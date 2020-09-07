(ns browser.views.music
  (:require [browser.views.helpers :refer [make-archive-page make-archive-item print-categories]]
            [browser.helpers :refer [maybe-make-audio-url year sort-entry-by-year filter-by-selected-categories toggle-category]]
            [reagent.core :as r]
            ))

(def selected-categories (r/atom []))

(defn merge-blog-music [app-state]
  (let [music (:music app-state)
        blog (:blog app-state)]
    (->> blog
         (filter #(get-in % [:attributes :file_name]))
         (map
          #(update-in
            %
            [:attributes :category]
            (fn [col] (conj col "Bitácora"))))
         (concat music))))

(defn main [app-state]
  (let [music (map #(:attributes %) (merge-blog-music @app-state))
        categories (set (sort (flatten (map #(:category %) music))))]
    (make-archive-page
     "Música"
     [:div
      (print-categories selected-categories categories)
      [:div
       (map  (fn [m]
               [:div {:class "music__year-container" :key (first m)}
                [:h2 {:class "music__year"} (first m)] ; prints year
                [:div {:class "music-work"}; prints work
                 (map
                  #(make-archive-item
                    (if (some
                         (fn [cat] (=  "Bitácora" cat))
                         (:category %))
                      "/blog"
                      "/music")
                    %)
                  (second m))]])
             (sort-entry-by-year (filter-by-selected-categories @selected-categories music)))]])))
