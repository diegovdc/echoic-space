(ns views.sonos
  (:require [frontend.state :as state]
            [clojure.string :as str]
            [reagent.core :as r]
            [jayq.core :refer [$ anim width css]]
            [oops.core :refer [oget]]
            [frontend.helpers :refer [find-first
                                      fromNaN
                                      padTime
                                      percentage
                                      safe-rand-nth
                                      secondsToMinutes
                                      make-audio-url
                                      toInt]]))

(def is-mobile-or-tablet ((oget js/deps "isMobileOrTablet")))

(def Howl (oget js/deps "Howl"))

(def Howler (oget js/deps "Howler"))

(def log (.-log js/deps))

(def b (partial str "menu-main__"))

(def sonos (partial str "sonos-player__"))

(defn update-track-data [e]
  (let [current-time (.-currentTime (.-target e))
        duration (.-duration (.-target e))
        result {:duration (secondsToMinutes duration)
                :elapsed (secondsToMinutes current-time)
                :percentage (percentage current-time duration)}]
    (swap! state/player-state assoc :track-data result)))

(defn scroll-trackname []
  (let [container ($ "#menu-main__playing-container")
        track-name ($ "#menu-main__playing")
        diff (- (width container) (width track-name))
        should-scroll (< diff 0)
        position (atom diff)]
   (.stop track-name)
   (css track-name {:left 0})
   (if should-scroll 
    (letfn [(to-the-left [] (anim track-name {:left diff} 7000 to-the-right))
            (to-the-right [] (anim track-name {:left 0} 7000 to-the-left))]
      (to-the-left)))))

(js/setInterval
  ;update player info by reading it from howl (see let)
  (fn []
    (let [howl (get-in @state/player-state [:now-playing :howl])
          is-playing (:is-playing @state/player-state)]
      (if (and howl is-playing)
        (let [duration (.duration howl)
              seek (.seek howl)]
          (swap! state/player-state assoc :track-data {:duration (secondsToMinutes duration)
                                                       :elapsed (secondsToMinutes seek)
                                                       :percentage (percentage seek duration)})))))
  500)

(defn toggle-play [track-to-play should-change-track?]
  (fn []
    (let [previously-playing (get-in @state/player-state [:now-playing :howl] (clj->js {:pause (fn [] nil)}))]
      (if (or should-change-track? (not (@state/player-state :is-playing)))
        (do
          (swap! state/player-state assoc :is-playing true)
          (if (or should-change-track? (not (:is-paused @state/player-state)))
            (swap! state/player-state assoc :now-playing (assoc track-to-play :howl (Howl. (clj->js {:src [(make-audio-url track-to-play)] :html5 true})))))
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
  (let [on-click (if playable-track-if-in-single 
                  (toggle-play (:attributes playable-track-if-in-single) true)
                  play-random)]
   [:a (merge {:class (b "playing") :id (b "playing")}
             (if is-playing
               {:href (str "/music/" track-slug)}
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

(defn play-btn 
  "Play button for the lower bar of sonos"
  [icon is-playing]
  (let [tracks (tracks-with-audio (:music @state/app-state))
        single (:single @state/app-state)
        is-single (= (@state/app-state :page) :music-single)
        track-to-play (if is-single
                        (find-first #(= (get-in % [:slug] single)) tracks)
                        (safe-rand-nth {} tracks))]
    [:i {:class  (sonos (str "icon-play fa " (icon "fa-pause")))
         :on-click (toggle-play (:attributes track-to-play) false)}]))

(defn main []
  (let [is-playing (@state/player-state :is-playing)
        is-paused (@state/player-state :is-paused)
        track-name (get-in @state/player-state [:now-playing :track_name])
        track-slug (get-in @state/player-state [:now-playing :slug])
        icon #(if is-playing % "fa-play")
        playable-track-if-in-single
        (some #(and
                (= (:single @state/app-state)
                   (get-in % [:attributes :slug]))
                (get-in % [:attributes :file_name])
                %)
              (:music @state/app-state))]
    [:div {:class (b "playing-container") :id (b "playing-container")}
                  ; (if is-mobile-or-tablet " is-mobile"
     [:div {:class (str (b "playing-overflower"))}
       (track-name' is-playing is-paused track-name track-slug playable-track-if-in-single)]
     (frwd-btn icon is-playing)
     [:div {:class (sonos "duration")}
      [:div {:class (sonos "elapsed")
             :style {:width (str (get-in @state/player-state [:track-data :percentage] "0") "%")}}]
      (play-btn icon is-playing)
      [:div {:class (sonos "time-container")}
       [:p {:class (str (sonos "time ") (sonos "time-elapsed"))}
        (get-in @state/player-state [:track-data :elapsed] "00:00")]
       [:p {:class (str (sonos "time ") (sonos "time-total"))}
        (get-in @state/player-state [:track-data :duration] "00:00")]]]]))
       



