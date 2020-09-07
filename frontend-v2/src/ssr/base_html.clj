(ns ssr.base-html
  (:require [browser.views.header :as header]))

(defn base [body]
  [:html
   {:lang "en"}
   [:head
    [:meta {:charset "utf-8"}]
    [:meta
     {:content "width=device-width, initial-scale=1", :name "viewport"}]
    [:title "ShadowCLJS"]]
   [:body
    [:div#app
     body]
    [:script {:src "/browser-main.js", :type "text/javascript"}]]])
