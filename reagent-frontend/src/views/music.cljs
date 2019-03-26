(ns views.music
  (:require [views.helpers :refer [make-archive-page make-archive-item]]
            [frontend.state :as state]
            [reagent.core :as r]))

(def log (.-log js/deps))
        
(def selected-categories (r/atom []))

(defn year [music]
  (first (clojure.string/split (:date music) "-")))

(defn sort-music-by-year [music]
  (->> music
      (sort #(compare (:date %2) (:date %1)))  
      (group-by year)))

(defn filter- [selected-categories music]
    (if (empty? selected-categories) 
        music
        (filter #(not= #{} 
                    (clojure.set/intersection 
                        selected-categories 
                        (set (:category %)))) 
                music)))

(defn toggle-in-set [set val]
  (if (contains? set val)
      (clojure.set/difference set #{val})
      (clojure.set/union set #{val})))

(defn toggle-category [cat]
  (fn []
    (swap! selected-categories #(toggle-in-set % cat))))  

(defn print-categories [selected-categories categories]
  [:div {:class "music__category-container"} 
   (map (fn [cat] 
          [:span {:key cat 
                  :class (str "music__category " 
                          (if (contains? selected-categories cat) "selected")) 
                  :on-click (toggle-category cat)} 
            cat]) 
        categories)])



(defn main []
  (let [music (map #(:attributes %) (:music @state/app-state))
        categories (set (sort (flatten (map #(:category %) music))))]
    (make-archive-page 
     "Música" 
     [:div
       (print-categories @selected-categories categories)
      [:div 
       (map  (fn [m]
               [:div {:class "music__year-container" :key (first m)}
                [:h2 {:class "music__year"} (first m)] ; prints year
                [:div {:class "music-work"}; prints work
                 (map
                  (partial make-archive-item "/music")
                  (second m))]])
             (sort-music-by-year (filter- @selected-categories music)))]])))

        

