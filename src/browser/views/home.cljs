(ns browser.views.home)

(defn main []
  [:div {:class "home"}
   [:div {:style {:background-image "url(images/1.png)"} :class "home__img"}
    [:div {:style {:background-image "url(images/2.jpg)"} :class "home__img-2"}]]])
