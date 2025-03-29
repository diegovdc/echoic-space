(ns browser.analytics
  (:require
   ["axios" :as axios]))

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
