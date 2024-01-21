(ns browser.pages
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [reitit.frontend :as rf]
            [reitit.frontend.easy :as rfe]
            [reitit.coercion.spec :as rss]
            [spec-tools.data-spec :as ds]
            #_[fipp.edn :as fedn]))

(defn home-page [state]
  [:div [:h2 "Welcome to frontend"]
   [:button {:on-click #(swap! state inc)} (str "inc me" @state)]
   [:button
    {:type "button"
     :on-click #(rfe/push-state ::item {:id 3})}
    "Item 3"]

   [:button
    {:type "button"
     :on-click #(rfe/replace-state ::item {:id 4})}
    "Replace State Item 4"]])

(defn about-page []
  [:div
   [:h2 "About frontend"]
   [:ul
    [:li [:a {:href "http://google.com"} "external link"]]
    [:li [:a {:href "foobar" #_(rfe/href ::foobar)} "Missing route"]]
    [:li [:a {:href "item" #_(rfe/href ::item)} "Missing route params"]]]

   [:div
    {:content-editable true
     :suppressContentEditableWarning true}
    [:p "Link inside contentEditable element is ignored."]
    [:a {:href "/" #_(rfe/href ::frontpage)} "Link"]]])

#_(with-redefs [rfe/href (fn [_])] (about-page))
