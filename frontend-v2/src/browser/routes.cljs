(ns browser.routes
  (:require [browser.state :refer [app-state]]
            [browser.views.about :as about]
            [reitit.frontend.easy :as rfe]
            [reitit.coercion.spec :as rss]
            [reitit.frontend :as rf]
            [reagent.core :as r]
            [browser.views.blog :as blog]
            [browser.views.home :as home]
            [browser.views.music :as music]))

(def match (r/atom nil))

(def routes
  [["/" {:name ::home :view #(home/main)}]
   ["/about/" {:name ::about :view #(about/main)}]
   ["/music/" {:name ::music :view #(music/main app-state)}]
   ["/blog/" {:name ::blog :view #(blog/main app-state)}]])

(defonce init (memoize (fn []
                     (rfe/start!
                      (rf/router routes {:data {:coercion rss/coercion}})
                      (fn [m] (println m) (reset! match m))
                      ;; set to false to enable HistoryAPI
                      {:use-fragment false
                       }))))
