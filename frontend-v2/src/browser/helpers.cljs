(ns browser.helpers
  (:require [clojure.string :as str]
            [clojure.set :as set]))

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

(defn safe-rand-nth [or* xs]
  (if (empty? xs)
    or*
    (rand-nth xs)))

;; FIXME
(defn scroll-to [top]
  #_(jq/anim (jq/$ "html, body") {:scrollTop top}))

;; FIXME
(defn set-scroll [top]
  #_(.scrollTop (jq/$ js/window) top))

(defn maybe-make-audio-url [base slug file-name]
  (if (str/includes? file-name "http")
    file-name
    (str "http://www.echoic.space/" base "/" slug "/" file-name)))

(defn make-audio-url [music-post-attrs]
  (let [file-name (:file_name music-post-attrs "")
        slug (:slug music-post-attrs)]
    (maybe-make-audio-url "music" slug file-name)))


(defn year [music]
  (first (clojure.string/split (:date music) "-")))

(defn sort-entry-by-year [entry]
  (->> entry
       (group-by year)
       (sort-by first >)
       (map (fn [[year musics]]
              [year (sort-by :date > musics)]))))

(defn filter-by-selected-categories [selected-categories entry]
    (if (empty? selected-categories)
        entry
        (filter #(not= #{}
                    (clojure.set/intersection
                        selected-categories
                        (set (:category %))))
                entry)))

(defn toggle-in-set [set val]
  (if (contains? set val)
      (clojure.set/difference set #{val})
      (clojure.set/union set #{val})))

(defn toggle-category [selected-categories-atom cat]
  (fn []
    (swap! selected-categories-atom #(toggle-in-set % cat))))
