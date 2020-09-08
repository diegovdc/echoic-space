(ns browser.main
  (:require
   ["axios" :as axios]
   [browser.routes :as routes :refer [routes]]
   [browser.state :as state :refer [app-state]]
   [browser.views.header :as header]
   [clojure.string :as str]
   [reagent.dom :as rdom]))


(defn get-data [func state-key url]
  (-> (axios/get url)
      (.then #(js->clj % :keywordize-keys true))
      (.then #(:data %))
      (.then #(swap! app-state assoc state-key (func %)))))

(defn parse-categories [music]
  (map #(update-in %
                   [:attributes :category]
                   (fn [c]
                     (as-> c v
                       (clojure.string/split v "$")
                       (map clojure.string/trim v))))
       music))


(defn current-page []
  [:div
   (if @routes/match
     (let [view (:view (:data @routes/match))]
       [:div (header/main)
        [view @routes/match]]))])

(defn start []
  ;; NOTE Promise.all seems necessary because r/atoms don't seem to work outside of the `current-page` function
  (-> (js/Promise.all [(get-data identity :about "/data/about.json")
                       (get-data identity :blog "/data/blog.json")
                       (get-data identity :music "/data/music.json")
                       (get-data identity :posters "/data/posters.json")
                       (get-data identity :cv "/data/cv.json")])
      (.then  (fn [_]
                ;; FIXME
                (routes/init)
                (rdom/render [current-page]
                             (.getElementById js/document "app"))))))

(defn ^:export init []
  (start))

(defn stop []
  ;; stop is called before any code is reloaded
  ;; this is controlled by :before-load in the config
  (js/console.log "stop"))
