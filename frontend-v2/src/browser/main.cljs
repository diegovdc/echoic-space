(ns browser.main
  (:require ["axios" :as axios]
            [browser.state :refer [app-state]]
            [browser.views.header :as header]
            [clojure.string :as str]
            [reagent.core :as r]
            [reagent.dom :as rdom]
            [reitit.coercion.spec :as rss]
            [reitit.frontend :as rf]
            [browser.routes :refer [routes]]
            [reitit.frontend.easy :as rfe]
            [browser.routes :as routes]))

(def state (r/atom 0))

(defn item-page [match]
  (let [{:keys [path query]} (:parameters match)
        {:keys [id]} path]
    [:div
     [:h2 "Selected item " id]
     (if (:foo query)
       [:p "Optional foo query param: " (:foo query)])]))


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
       [view @routes/match]))])

(defn start []
  (get-data identity :about "/data/about.json")
  (get-data identity :blog "/data/blog.json")
  (get-data identity :music "/data/music.json")
  (get-data identity :cv "/data/cv.json")
  ;; FIXME
  #_(get-data identity :posters "http://www.echoic.space/get-posters")
  (routes/init)
  (rdom/render [:div (header/main) [current-page]]
               (.getElementById js/document "app")))

(defn ^:export init []
  (start))

#_(init!)
                                        ;
(println "Hello, world! - this is from the module static code - Open your Console in DevTools")

#_(defn init []
  (println "This is from the init function")
  (.appendChild (.-body js/document) (.createTextNode js/document "It works!")))

(defn stop []
  ;; stop is called before any code is reloaded
  ;; this is controlled by :before-load in the config
  (js/console.log "stop"))
