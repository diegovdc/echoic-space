(ns views.header
  (:require [views.sonos]))

(defn menu-link [data]
  [:a {
        :class "menu-main__link" 
        :key (:href data)
        :href (:href data)}
    (:text data)])

(def links
  (let [class "menu-main__link"] 
    [{:href "/" :text "~/"}
     {:href "/music" :text "~/música"}
     {:href "/blog" :text "~/bitácora"}
     {:href "/about" :text "~/acerca"}]))

(defn main []
  [:header
    [:nav {:class "menu-main"} 
      [:div {:class "menu-main__container"}
       (map menu-link links)]
      (views.sonos/main)]])


