(ns views.radio
  (:require [views.helpers :refer [page-container]]
            [frontend.state :as state]))


(defn main []
  (let [body (get-in @state/app-state [:about 0 :body])]
    (page-container "about"
      [:div
       [:audio {:src "https://freesound.org/data/previews/99/99557_321967-lq.mp3" :controls true}]
       [:div {:class "markdown-body"
              :dangerouslySetInnerHTML {:__html body}}]])))
