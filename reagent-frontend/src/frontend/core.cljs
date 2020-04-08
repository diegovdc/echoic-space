(ns frontend.core
    (:require-macros [secretary.core :refer [defroute]])
    (:import goog.history.Html5History
             goog.Uri)
    (:require
     [frontend.state]
     [views.header]
     [views.sonos]
     [frontend.routes :as routes]
     [secretary.core :as secretary]
     [reagent.core :as r]
     [oops.core :refer [oget]]))

(defn log [x] (.log js/console x) x)

(def axios-get (oget js/deps "axios.get"))

(defn get-data [func state-key url]
  (-> (axios-get url)
      (.then #(js->clj % :keywordize-keys true))
      (.then #(:data %))
      (.then #(swap! frontend.state/app-state assoc state-key (func %)))))



;; -------------------------
;; Initialize app

(defn parse-categories [music]
  (map #(update-in %
                   [:attributes :category]
                   (fn [c]
                     (as-> c v
                       (clojure.string/split v "$")
                       (map clojure.string/trim v))))
       music))


(defn mount-root []
  (get-data identity :about "/data/about.json")
  (get-data identity :blog "/data/blog.json")
  (get-data identity :music "/data/music.json")
  (get-data identity :cv "/data/cv.json")
  (get-data identity :posters "http://www.echoic.space/get-posters")
  (r/render [:div
             [views.header/main]
             [routes/current-page]]
            (.getElementById js/document "app")))



(defn init! []
  (routes/app-routes)
  (secretary/dispatch! (.-pathname js/window.location))
  (mount-root))
