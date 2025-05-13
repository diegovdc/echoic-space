(ns browser.analytics
  (:require
   ["axios" :as axios]
   [browser.state :refer [player-state]]))

(defn get-session-id
  []
  (if-let [session-id (js/localStorage.getItem "session-id")]
    session-id
    (let [id (str (random-uuid))]
      (js/localStorage.setItem "session-id" id)
      id)))

(defn log-event
  [data]
  (when-not goog.DEBUG
    (.. (axios/post "/.netlify/functions/log-event"
                    (-> data
                        (assoc :sessionId (get-session-id)
                               :timestamp (js/Date.now))
                        clj->js))
        (catch (fn [_error])))))

(defn init-basic-ping!
  []
  (js/setInterval
   (fn []
     (log-event (merge {:type "ping"
                        :location js/window.location.href}
                       (when (:is-playing @player-state)
                         {:playing? true
                          :track (:track_name (:now-playing @player-state))
                          :percentage (:track-data @player-state)}))))
   1000))
