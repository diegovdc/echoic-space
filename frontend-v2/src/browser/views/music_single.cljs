(ns browser.views.music-single
  (:require [browser.views.helpers :refer [page-container-bg-img base-url get-entries]]
            [browser.helpers :refer [scroll-to set-scroll make-audio-url]]
            [browser.views.sonos :as sonos]
            [browser.state :as state]
            [reagent.core :as r]))

(set! *warn-on-infer* false)

;; TODO merge blog json with music json on render

(defn get-offset-top [id]
  (-> id js/document.getElementById .-offsetTop))

(defn go-to-hash [hash]
  (if hash
    (scroll-to (get-offset-top hash))
    (set-scroll 0)))

(defn get-bg-img [base-url post-attrs]
  (str "/" base-url "/" (:slug post-attrs) "/" (:backgroundImage post-attrs)))

(comment (-> state/app-state base-url))
(defn bg-img [url]
  {:background-image
   (str "url(" url ")")})

(defn image [url child-node]
  [:div {:class "single__img--main"
         :style (bg-img url)}
   child-node])

(defn title [app-state post]
  (let [base-url* (base-url app-state)]
    (cond
      (= nil (get-bg-img base-url* post)) [:h1 {:class "single__ttl"}
                                           (:title post)]
      :else
      [:div {:class "single__ttl-container"}
       [:h1 {:id "single-ttl"
             :class "single__ttl single__ttl--with-img"
             :style (merge {:fontSizes "200px"} (bg-img (get-bg-img base-url*  post)))}
        (:title post)]])))


(defn -play-button [app-state post-attrs action]
  "Renders a play button that supports a particular action (i.e. play video o play audio)
  `post-attrs` {}
  `action` :: post-attrs -> () -> PlayAction"
  (let [
        playing-this-track? (= (get-in @state/player-state [:now-playing :track_name]) (:track_name post-attrs))
        should-change-track? (not playing-this-track?)
        icon (if (and playing-this-track? (@state/player-state :is-playing)) "fa-pause" "fa-play")]
    [:span {:class (str "single__play fa " icon)    #_(.webkitRequestFullScreen (.-target e))
            :style (bg-img (get-bg-img app-state post-attrs))
            :on-click (action post-attrs should-change-track?)}]))

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

(defn play-button [app-state post-attrs]
  (cond
    (= true (post-attrs :is_video)) (-play-button app-state post-attrs toggle-play-video)
    :else (-play-button app-state post-attrs sonos/toggle-play)))


(defn show-info-cb [local-state]
  (fn []
    (do
      (reset! local-state
              (merge
               @local-state
               {:show-info (not (@local-state :show-info))}))
      (r/after-render
       (fn []
         ;; FIXME
         (js/console.error "Implement this")
         (set-scroll 0)
         #_(->> (js/document.querySelector ".markdown-body")
                .-offsetTop
                (#(- % 26))
                (if (not (@local-state :show-info)) 0)
                scroll-to))))))

#_(-> (js/document.querySelector ".markdown-body")
      .-offsetTop)
(defn show-info [img-url local-state]
  ;; TODO implement me again
  [:span]
  #_[:span {:class "single__show-info"
            :style (bg-img img-url)
            :on-click (show-info-cb local-state)}
     "..."])

(defn video [post-attrs]
  (let [youtube-id (:youtube_id post-attrs)
        start-seconds (:startSeconds post-attrs)]
    [:div
     {:id "player"}
     (when youtube-id
       [:iframe
        {:allowfullscreen "allowfullscreen",
         :allow
         "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
         :frameborder "0",
         :title "YouTube video player",
         :src (str "https://www.youtube.com/embed/"
                   youtube-id
                   (when start-seconds
                     (str "?" start-seconds))),
         :height "315",
         :width "560"}])]))

(defn print-post [app-state post local-state]
  (cond
    (= nil post) [:div "not found"]
    :else
    (let [post-attrs (:attributes post)
          img-url (get-bg-img (base-url app-state) post-attrs)]
      [:div
       (page-container-bg-img
        (str "single--" (:slug post-attrs))
        [:div {:class ""}
         (image
          img-url
          [:div
           (title app-state post-attrs)
           (play-button app-state post-attrs)
           (show-info img-url local-state)])
         (if (:is_video post-attrs)
           [:div {:class "single__video-player-container"
                  :id "single__video-player-container"}
            (video post-attrs)])]

        (if (and (not (empty? (post :body))) (@local-state :show-info))
          [:div
           [:div {:class "markdown-body"
                  :dangerouslySetInnerHTML {:__html (:body post)}}]]))])))

(defn find-post [tracks slug]
  (first
   (filter
    #(= (:slug (:attributes %)) slug)
    tracks)))

(defn main [app-state single-slug hash]
  (let [local-state (r/atom {:show-info true})
        entries (get-entries app-state) ;; may be either music entries o blog entries
        post (find-post entries single-slug)
        printed-post (fn [] (print-post app-state post local-state))]
    (r/create-class
     {:reagent-render printed-post
      :component-did-mount (fn [] (go-to-hash hash))})))