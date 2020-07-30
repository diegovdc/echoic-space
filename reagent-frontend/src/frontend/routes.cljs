(ns frontend.routes
  (:require-macros [secretary.core :refer [defroute]])
  (:import goog.history.Html5History
           goog.Uri)
  (:require
   [frontend.history]
   [views.home]
   [views.about]
   [views.radio]
   [views.music]
   [views.music-single]
   [views.blog]
   [frontend.state :as state]
   [secretary.core :as secretary]
   [goog.events :as events]
   [goog.history.EventType :as EventType]
   [reagent.core :as r]
   [clojure.string :as str]))

;; -------------------------
;; Routes
(defn log [x] (.log js/console x) x)

(defn music-single [page single]
  (let [single-hash (str/split single #"#")
        s (nth single-hash 0 "")
        hash (nth single-hash 1 nil)]
                                        ; (js/console.log single-hash hash)
    (swap! state/app-state assoc :single s)
    (swap! state/app-state assoc :hash hash)
    (swap! state/app-state assoc :page page)))

(defn app-routes []
  (defroute "/" []
    (swap! state/app-state assoc :page :home))

  (defroute "/radio" []
    (swap! state/app-state assoc :page :radio))

  (defroute #"/about/?" []
    (swap! state/app-state assoc :page :about))

  (defroute #"/music/?" []
    (swap! state/app-state assoc :single "")
    (swap! state/app-state assoc :page :music))

  (defroute "/music/:single" [single]
    (music-single :music-single single))

  (defroute "/music/:single/" [single]
    (music-single :music-single single))

  (defroute #"/blog/?" []
    (js/console.log "blog")
    (swap! state/app-state assoc :single "")
    (swap! state/app-state assoc :page :blog))

  (defroute "/blog/:single" [single]
    (music-single :blog-single single))

  (defroute "/blog/:single/" [single]
    (music-single :blog-single single))


  (frontend.history/accountant-history-navigation))


(defmulti current-page #(@state/app-state :page))

(defmethod current-page :home []
  [views.home/main])

(defmethod current-page :about []
  [views.about/main])

(defmethod current-page :radio []
  [views.radio/main])

(defmethod current-page :music []
  [views.music/main])

(defmethod current-page :music-single []
  [(views.music-single/main (@state/app-state :single) (@state/app-state :hash))])

(defmethod current-page :blog []
  [views.blog/main])

(defmethod current-page :blog-single []
  [(views.music-single/main (@state/app-state :single) (@state/app-state :hash))])

(defmethod current-page :default []
  [views.home/main])
