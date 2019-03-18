(ns views.music-single
  (:require [views.helpers :refer [page-container-bg-img]]
            [frontend.helpers :refer [scroll-to set-scroll make-audio-url]]
            [views.sonos :as sonos]
            [frontend.state :as state]
            [goog.events :as events]
            [reagent.core :as r]
            [jayq.core :refer [$ offset anim]]
            [oops.core :refer [oget]]))

(def log (.-log js/deps))

(def is-mobile-or-tablet ((oget js/deps "isMobileOrTablet")))

(defn get-offset-top [id]
  (->> ($ (str "#" id))
       offset
       (:top)
       (#(- % 26))))

(defn go-to-hash [hash]
  (if hash 
    (scroll-to (get-offset-top hash))
    (set-scroll 0)))

(defn get-bg-img [post-attrs]
  (str "/music/" (:slug post-attrs) "/" (:backgroundImage post-attrs)))

(defn bg-img [url] 
  {:background-image 
    (str "url(" url ")")})

(defn image [url child-node]
  [:div {:class "single__img--main" 
         :style (bg-img url)}
        child-node])

(defn title [post]
  (cond 
    (= nil (get-bg-img post)) [:h1 {:class "single__ttl"} 
                                   (:title post)]
    :else
      [:div {:class "single__ttl-container"}
        [:h1 {:id "single-ttl"
              :class "single__ttl single__ttl--with-img" 
              :style (merge {:fontSizes "200px"} (bg-img (get-bg-img post)))} 
            (:title post)]]))


(defn -play-button [post-attrs action]
  "Renders a play button that supports a particular action (i.e. play video o play audio)
  `post-attrs` {}
  `action` :: post-attrs -> () -> PlayAction"
  (let [
        playing-this-track? (= (get-in @state/player-state [:now-playing :track_name]) (:track_name post-attrs))
        should-change-track? (not playing-this-track?)
        icon (if (and playing-this-track? @state/player-state :is-playing) "fa-pause" "fa-play")]
    [:span {:class (str "single__play fa " icon)
            :style (bg-img (get-bg-img post-attrs))
            :on-click (action post-attrs (log "shoudl change track" should-change-track?))}]))

(defn toggle-play-video [post-attrs]
  (let [onPlayerReady (fn [e]
                          (js/console.log "event" e)
                          (js/console.log "target" (.-target e))
                          (.playVideo (.-target e))
                          (.webkitRequestFullScreen (.-a (.-target e)))
                          (scroll-to (get-offset-top "single__video-player-container")))]
    (fn []
      (let [player (js/YT.Player. "player"
                                  (js-obj
                                   "videoId" (:youtube_id post-attrs)
                                   "events" (js-obj 
                                               "onReady" onPlayerReady)))]))))

(defn play-button [post-attrs]
  (cond
    (= true (post-attrs :is_video)) (-play-button post-attrs toggle-play-video)
    :else (-play-button post-attrs sonos/toggle-play)))    


(defn show-info-cb [local-state]
  (fn []
    (do
      (reset! local-state 
        (merge 
          @local-state 
          {:show-info (not (@local-state :show-info))}))
      (r/after-render 
        (fn []
          (->> ($ ".markdown-body")
              offset
              (:top)
              (#(- % 26)) 
              (if (not (@local-state :show-info)) 0)
              scroll-to))))))


(defn show-info [img-url local-state]
  [:span {:class "single__show-info" 
          :style (bg-img img-url)
          :on-click (show-info-cb local-state)}
        "..."])  

(defn video [post-attrs]
  [:div
    {:id "player"}])

(defn mobile-audio-player [post-attrs]
  (let [url (make-audio-url post-attrs)]
    (if (and is-mobile-or-tablet (some? url))
      [:div {:class "markdown-body"}
       [:h3 "Escuchar:"]
       [:audio
        {:controls "controls"
         :src url
         :preload "metadata"
         :encType "audio/mpeg"
         :autoPlay false}]])))

(defn print-post [post local-state]
  (cond
    (= nil post) [:div "not found"]
    :else 
      (let [post-attrs (:attributes post)
            img-url (get-bg-img post-attrs)]
        [:div
          (page-container-bg-img 
            (str "single--" (:slug post-attrs)) 
            [:div {:class ""}
              (image 
                img-url
                [:div
                 (title post-attrs)
                 (if-not is-mobile-or-tablet
                   (play-button post-attrs)) 
                 (show-info img-url local-state)])
              (if (:is_video post-attrs)
                [:div {:class "single__video-player-container" 
                       :id "single__video-player-container"}
                      (video post-attrs)])]
                                  
            (if (@local-state :show-info)
              [:div
                [:div {:class "markdown-body"
                       :dangerouslySetInnerHTML {:__html (:body post)}}]
                (mobile-audio-player post-attrs)]))])))
                       
(defn find-post [tracks slug]
  (first 
    (filter 
      #(= (:slug (:attributes %)) slug) 
      tracks)))

(defn main [singleSlug hash]
  (let [local-state (r/atom {:show-info true})
        tracks (:music @state/app-state)
        post (find-post tracks singleSlug)
        printed-post (fn [] (print-post post local-state))]
    (with-meta printed-post
      {:component-did-mount (fn [] (go-to-hash hash))})))
