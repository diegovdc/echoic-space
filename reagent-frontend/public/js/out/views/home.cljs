(ns views.home)

; homeView st = 
;   div ! className "home" $ do
;       (div ! style "background-image: url(/images/1.png)" ! className "home__img" ) $ do
;           div ! style "background-image: url(/images/2.jpg)"
;           ! className "home__img-2" $ text ""

(defn main []
  [:div {:class "home"}
    [:div {:style {:background-image "url(images/1.png)"} :class "home__img"}
      [:div {:style {:background-image "url(images/2.jpg)"} :class "home__img-2"}]]])


 
