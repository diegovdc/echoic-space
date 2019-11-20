(ns frontend.history
  (:import goog.history.Html5History
           goog.Uri)
  (:require [goog.events :as events]
            [goog.history.EventType :as EventType]
            [secretary.core :as secretary]
            [accountant.core :as accountant]))

;; -------------------------
;; History
(defn accountant-history-navigation []
  (accountant/configure-navigation! 
    {:nav-handler (fn [path]
                     (secretary/dispatch! path))
     :path-exists? (fn [path]
                     (secretary/locate-route path))}))

;Sustituido por accountant
; (defn hook-browser-navigation! []
;   (let [history (doto (Html5History.)
;                   (events/listen
;                    EventType/NAVIGATE
;                    (fn [event]
;                      (secretary/dispatch! (.-token event))))
;                   (.setUseFragment false)
;                   (.setPathPrefix "")
;                   (.setEnabled true))]

;     (events/listen js/document "click"
;       (fn [e]
;         (. e preventDefault)
;         (let [target (.closest (.-target e) "a") 
;               path (if (nil? target) "" (.getPath (.parse Uri (.-href target))))
;               title (.-title (.-target e))]
;           (when (not= path "")
;             (. history (setToken path title))))))))

