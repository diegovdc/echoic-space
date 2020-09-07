(ns browser.views.header-basic
  (:require [reitit.frontend.easy :as rfe]
            [browser.routes :as routes]))

(defn menu-link [data]
  [:a {:class "menu-main__link"
       :key (:href data)
       :href (:href data)}
   (:text data)])

(defn main
  ([links] (main links nil))
  ([links sonos]
   [:header
    [:nav {:class "menu-main"}
     [:div {:class "menu-main__container"}
      (map menu-link (links))
      sonos]]]))
