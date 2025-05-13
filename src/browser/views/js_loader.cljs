(ns browser.views.js-loader
  (:require [reagent.core :as reagent]
            [goog.net.jsloader :as jsloader]
            [goog.html.TrustedResourceUrl :as TrustedResourceUrl]))

(defn filter-loaded [scripts]
  (reduce (fn [acc [loaded? src]]
            (if (loaded?) acc (conj acc src)))
          []
          scripts))

(defn load* [const-urls]
  (jsloader/safeLoadMany
   (clj->js
    (mapv
     TrustedResourceUrl/format
     const-urls))))

(defn js-loader
  "Load a supplied list of Javascript files and render a component
   during loading and another component as soon as every script is
   loaded.

   Arg map: {:scripts {loaded-test-fn src}
             :loading component
             :loaded component}"
  [{:keys [scripts callback loading loaded]}]
  (let [loaded? (reagent/atom false)]
    (reagent/create-class
     {:component-did-mount (fn [_]
                             (let [not-loaded (filter-loaded scripts)]
                               (.then (load* not-loaded)
                                      #(do (callback)
                                           (reset! loaded? true)))))
      :reagent-render (fn [{:keys [scripts loading loaded]}]
                        (if @loaded? loaded loading))})))
