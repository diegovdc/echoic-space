(ns browser.views.sonos
  (:require ["/js/index" :refer [isMobileOrTablet]]
            ["howler" :refer [Howl]]
            [browser.helpers
             :refer
             [find-first
              make-audio-url
              percentage
              safe-rand-nth
              scroll-to
              secondsToMinutes
              ]]
            [browser.state :as state]
            [browser.views.helpers :refer [get-entries]]
            [reagent.core :as r]))

;; FIXME there is a bug where forwarding a track may trigger two tracks to play
;; FIXME the pause button doesn't resume playback but goes to the next track

;; FIXME
(defn $ [selector] (js/document.querySelector selector))
(defn width [_] (js/console.error "please implement `width`"))
(defn css [_ _] (js/console.error "please implement `css`"))
(defn anim [_ _ _ _] (js/console.error "please implement `anim`"))

(def is-mobile-or-tablet isMobileOrTablet)

(def b (partial str "menu-main__"))

(def sonos (partial str "sonos-player__"))

(defn scroll-trackname []
  (let [container ($ "#menu-main__playing-container")
        track-name ($ "#menu-main__playing")
        diff (- (width container) (width track-name))
        should-scroll (< diff 0)]
    #_(.stop track-name)
    #_(css track-name {:left 0})
    (set! (.. track-name -style -left) 0)
    #_(if should-scroll
        (letfn [(to-the-left [] (anim track-name {:left diff} 7000 to-the-right))
                (to-the-right [] (anim track-name {:left 0} 7000 to-the-left))]
          (to-the-left)))))

(comment (scroll-trackname))
(defn update-callback
  "update player info by reading it from howl (see let)"
  []
  (let [howl (get-in @state/player-state [:now-playing :howl])
        is-playing (:is-playing @state/player-state)]
    (if (and  howl is-playing)
      (let [duration (.duration howl)
            seek (.seek howl)]
        (swap!
         state/player-state
         assoc :track-data {:duration (secondsToMinutes duration)
                            :elapsed (secondsToMinutes seek)
                            :percentage (percentage seek duration)})))))

(defonce update-interval
  (js/setInterval #(update-callback) 200))

(declare play-random)

(defn get-offset-top [id]
  (-> id js/document.getElementById .-offsetTop))

(set! *warn-on-infer* false)

(defn toggle-play-video [post-attrs]
  (let [onPlayerReady (fn [e]
                        (let [player (.-target e)
                              start-seconds (:startSeconds post-attrs)]
                          (js/console.log "event" e)
                          (js/console.log "target" (.-target e))
                          (.playVideo player)
                          (when start-seconds
                            (.seekTo player start-seconds))
                          (scroll-to (get-offset-top "single__video-player-container"))))]
    (fn []
      (try
        (js/window.YT.Player. "player"
                              (js-obj
                               "videoId" (:youtube_id post-attrs)
                               "events" (js-obj "onReady" onPlayerReady)))
        (catch js/Error e nil )))))


(defn toggle-play* [track-to-play should-change-track?]
  (fn []
    (js/console.debug "toggle-play" track-to-play)
    (let [previously-playing (get-in @state/player-state [:now-playing :howl]
                                     (clj->js {:pause (fn [] nil)}))]
      (if (or should-change-track? (not (@state/player-state :is-playing)))
        (do
          (swap! state/player-state assoc :is-playing true)
          (if (or should-change-track? (not (:is-paused @state/player-state)))
            (swap! state/player-state assoc :now-playing
                   (assoc track-to-play
                          :howl (Howl. (clj->js {:src [(make-audio-url track-to-play)]
                                                 :html5 true
                                                 :autoplay true
                                                 :onend play-random})))))
          (swap! state/player-state assoc :is-paused false)
          (r/after-render
           #(do
              (.pause previously-playing)
              (.play (get-in @state/player-state [:now-playing :howl]))
              (scroll-trackname))))
        (do
          (.pause (get-in @state/player-state [:now-playing :howl]))
          (swap! state/player-state assoc :is-playing false)
          (swap! state/player-state assoc :is-paused true))))))

(defn toggle-play [track-to-play should-play-track?]
  (if (-> track-to-play :is_video)
    (toggle-play-video track-to-play)
    (toggle-play* track-to-play should-play-track?)))

(defn play-random []
  (let [track (->>  (@state/app-state :music)
                    (filter #(and
                              (not= (get-in % [:attributes :title])
                                    (get-in @state/player-state [:now-playing :title]))
                              (get-in % [:attributes :file_name])))
                    (rand-nth)
                    (:attributes))]
    (swap! state/player-state assoc :is-playing false)
    ((toggle-play track true))))

(defn track-name' [is-playing is-paused track-name track-slug playable-track-if-in-single]
  (let [attrs (:attributes playable-track-if-in-single)
        on-click (if playable-track-if-in-single
                   (toggle-play attrs true)
                   play-random)]
    [:a (merge {:class (b "playing") :id (b "playing")
                :style {:position "relative"}}
               (if is-playing
                 {:href ((:routing-fn @state/app-state)
                         (if (some #(=  "Bitácora" %) (:category attrs))
                           :browser.routes/blog-single
                           :browser.routes/music-single)
                         {:slug track-slug})}
                 {:on-click on-click}))
     (if (or is-playing is-paused)
       track-name
       "escucha")]))

(defn frwd-btn [icon is-playing]
  [:i {:class (str (b "playing-next-track")
                   " fa "
                   (if is-playing (icon "fa-forward")))
       :on-click play-random}])

(defn tracks-with-audio [tracks]
  (filter #(not= nil (get-in % [:attributes :file_name]))) tracks)

(def find-track-to-play
  (memoize
   (fn [is-single single tracks]
     (js/console.debug "is single" is-single single "-")
     (if is-single
       (find-first #(= single (get-in % [:attributes :slug])) tracks)
       (safe-rand-nth {} tracks)))))

(defn play-btn
  "Play button for the lower bar of sonos"
  [icon is-playing currently-playing-track]
  (let [tracks (tracks-with-audio (-> @state/app-state
                                      (select-keys [:music :blog])
                                      vals
                                      flatten))
        single (-> @state/app-state :route :path-params :slug)
        is-single (or
                   (= (:page @state/app-state) :music-single)
                   (= (:page @state/app-state) :blog-single))]
    [:i {:class  (sonos (str "icon-play fa " (icon "fa-pause")))
         :on-click (toggle-play
                    (:attributes (find-track-to-play is-single single tracks))
                    (if (and is-single ;; should change track
                             (not is-playing)
                             (not= currently-playing-track single))
                      true
                      false))}]))

(defn get-style [element]
  (.getComputedStyle js/window element))

(defn get-duration-bar-padding-left []
  (or (some-> (.querySelector js/document ".sonos-player__duration")
              get-style
              .-paddingLeft
              js/parseInt)
      0))

(defn click-x [event]
  (-> event .-clientX))

(defn window-width []
  (-> js/document .-body .-clientWidth))

(defn set-new-track-position! [event track]
  (let [x (.-clientX event)
        pad (get-duration-bar-padding-left)
        howl (get-in @state/player-state [:now-playing :howl])
        new-position (when howl (* (.duration howl)
                                   (/ (- x pad)
                                      (- (window-width) pad))))]
    (if (or (not howl) (<= x pad))
      nil
      (.seek howl new-position))))

#_(-> @state/app-state :route :data :name #{:browser.routes/music-single
                                          :browser.routes/blog-single})


(defn get-playable-track [app-state]
  (let [slug (-> @app-state :route :path-params :slug)]
    (some #(and (= slug (-> % :attributes :slug))
                (or (-> % :attributes :file_name)
                    (-> % :attributes :is_video))
                %)
          (get-entries app-state))))

(defn main []
  (let [is-playing (@state/player-state :is-playing)
        is-paused (@state/player-state :is-paused)
        track-name (get-in @state/player-state [:now-playing :track_name])
        track-slug (get-in @state/player-state [:now-playing :slug])
        icon #(if is-playing % "fa-play")
        playable-track-if-in-single (get-playable-track state/app-state)]
    [:div {:class (b "playing-container") :id (b "playing-container")}
                                        ; (if is-mobile-or-tablet " is-mobile"
     [:div {:class (str (b "playing-overflower"))}
      (track-name' is-playing is-paused track-name track-slug playable-track-if-in-single)]
     (frwd-btn icon is-playing)
     [:div {:class (sonos "duration")
            :on-click set-new-track-position!}
      [:div {:class (sonos "elapsed")
             :style {:width (str
                             (*
                              (- (window-width)
                                 (get-duration-bar-padding-left))
                              (/ (get-in
                                  @state/player-state
                                  [:track-data :percentage]
                                  0)
                                 100))
                             "px")}}]
      (play-btn icon is-playing track-slug)
      [:div {:class (sonos "time-container")}
       [:p {:class (str (sonos "time ") (sonos "time-elapsed"))}
        (get-in @state/player-state [:track-data :elapsed] "00:00")]
       [:p {:class (str (sonos "time ") (sonos "time-total"))}
        (get-in @state/player-state [:track-data :duration] "00:00")]]]]))

(comment (play-random))
