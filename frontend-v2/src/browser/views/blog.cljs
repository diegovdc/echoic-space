(ns browser.views.blog
  (:require [browser.views.helpers :refer [make-archive-page make-archive-item print-categories]]
            [reagent.core :as r]
            [browser.helpers :refer [year sort-entry-by-year filter-by-selected-categories toggle-category]]))


(def selected-categories (r/atom []))

(defn main [app-state]
  (let [music (map #(:attributes %) (:blog @app-state))
        categories (set (sort (flatten (map #(:category %) music))))]
    (make-archive-page
     "Bitácora"
     [:div
      (print-categories selected-categories categories)
      [:div
       (map  (fn [m]
               [:div {:class "music__year-container" :key (first m)}
                [:h2 {:class "music__year"} (first m)] ; prints year
                [:div {:class "music-work"}            ; prints work
                 (map
                  (partial make-archive-item "/blog")
                  (second m))]])
             (sort-entry-by-year (filter-by-selected-categories @selected-categories music)))]])))
