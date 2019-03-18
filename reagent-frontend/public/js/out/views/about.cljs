(ns views.about
  (:require [views.helpers :refer [page-container]]
            [frontend.state :as state]))

(def log (.-log js/deps))

(def quote "“Lograr una comprensión más plena de la experiencia del pensamiento, que es también la experiencia  cotidiana y la forma en que creamos el mundo o los objetos de este mundo y nos relacionamos con ellos... Se trata  de algo como una ecología del pensamiento (por oposición a una eco-nomía), no de esforzarse por imponer sobre el mundo algo más allá de sus posibilidades, desatentamente (e.g. el supuesto crecimiento ilimitado del  capitalismo), sino de crear con el mundo-pensamiento partiendo de sus posibilidades. No se trata tampoco de una  renuncia que pretenda decir que “las cosas son así, y no pueden ser diferentes”, sino por el contrario del  descubrimiento-reconocimiento de todo lo que pueden ser); y esto es (no)paradójicamente algo más eficiente y  “económico” que la economía misma, pues actúa en diálogo con el logos: con las formas de ha-ser del  pensamiento-mundo.”")

(defn main []
  (let [body (get-in @state/app-state [:about 0 :body])]
    (page-container "about"
      [:div
       [:img {:class "about__image" :src "/images/about.png"}]
       [:q {:class "about__quote"} quote]
       (comment
        [:div {:class "about__button-container"}
          [:a {:class "about__button" :target "_blank" :href "/downloads/cv.pdf"}] 
          "Curriculum Vitae"])
       [:div {:class "markdown-body"
              :dangerouslySetInnerHTML {:__html body}}]])))
