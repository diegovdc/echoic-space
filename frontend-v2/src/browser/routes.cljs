(ns browser.routes
  (:require [browser.state :refer [app-state]]
            [browser.views.about :as about]
            [reitit.frontend.easy :as rfe]
            [reitit.coercion.spec :as rss]
            [reitit.frontend :as rf]
            [reagent.core :as r]
            [browser.views.blog :as blog]
            [browser.views.contact :as contact]
            [browser.views.home :as home]
            [browser.views.music :as music]
            [browser.views.music-single :as music-single]))

(def match (r/atom nil))

(def routes
  [["/" {:name ::home :view #(home/main)}]
   ["/about/" {:name ::about :view #(about/main)}]
   ["/music/:slug/" {:name ::music-single
                    :view #(let [slug (-> %1 :parameters :path :slug)]
                             (music-single/main app-state slug nil))
                    :parameters {:path {:slug string?}}}]
   ["/music/" {:name ::music :view #(music/main app-state)}]
   ["/blog/:slug/" {:name ::blog-single
                    :view #(let [slug (-> %1 :parameters :path :slug)]
                             (music-single/main app-state slug nil))
                    :parameters {:path {:slug string?}}}]
   ["/blog/" {:name ::blog :view #(blog/main app-state)}]
   ["/contact" {:name ::contact :view #(contact/main app-state)}]])

(defn init []
  (swap! app-state assoc :routing-fn rfe/href)
  (rfe/start!
   (rf/router routes {:data {:coercion rss/coercion}})
   (fn [m]
     (js/console.log "router" m)
     (swap! app-state assoc :page (-> m :data :name name keyword)
            :route m)
     (reset! match m))
   ;; set to false to enable HistoryAPI
   {:use-fragment false}))
