(ns frontend.helpers
  (:require [jayq.core :refer [$ anim width]]
            [clojure.string :as str]))

; (def origin (js/window.location.origin))

(defn find-first [fn coll]
  (first (filter fn coll)))

(defn percentage [part total]
  (* 100 (/ part total)))

(defn toInt [n] (js/parseInt n 10))

(defn fromNaN [n]
  (if (js/isNaN n) 0 n))

(defn padTime [time-component]
  (if (< (fromNaN time-component) 10)
    (str "0" (fromNaN (toInt time-component)))
    (fromNaN (toInt time-component))))

(defn secondsToMinutes [seconds]
  (str (padTime (quot seconds 60)) ":" (padTime (rem seconds 60))))

(defn safe-rand-nth [or xs] 
  (if (empty? xs) 
      or 
      (rand-nth xs)))

(defn scroll-to [top]
  (anim ($ "html, body") {:scrollTop top}))

(defn set-scroll [top]
  (.scrollTop ($ js/window) top))

(defn make-audio-url [music-post-attrs]
  (let [file_name (:file_name music-post-attrs "")]
    (if (str/includes? file_name "http")
      file_name
      (str "http://www.echoic.space" "/music/" (:slug music-post-attrs) "/" file_name))))
 