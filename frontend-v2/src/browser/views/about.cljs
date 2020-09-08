(ns browser.views.about
  (:require [browser.views.helpers :refer [page-container]]
            [browser.state :as state]
            [goog.string.Const :as Const]
            [browser.views.js-loader :refer [js-loader]]
            [reagent.core :as r]
            [clojure.string :as str]))

(set! *warn-on-infer* true)

(def show-posters (r/atom false))

(def n-images-to-load (r/atom 0))

(def masonry (r/atom nil))

(defn reload-items [^js/Masonry masonry]
  (.reloadItems masonry))

(defn layout [^js/Masonry masonry]
  (.layout masonry))

(defn init-masonry []
  (js/setTimeout
   #(let [container (js/document.querySelector
                     ".about__m-grid")
          masonry* (js/Masonry.
                    container
                    {:itemSelector ".about__m-grid-item"
                     :columnWidth ".about__m-grid-item"
                     :isFitWidth true
                     :percentPosition true})
          runner (js/imagesLoaded. container)]
      (-> runner
          (.on
           "progress"
           (fn []
             (layout masonry*))))
      (reset! masonry masonry*)
      (reset! show-posters true))
   1000))

(def shuffle-posters
  "Just once"
  (memoize shuffle))

(def quote "“Lograr una comprensión más plena de la experiencia del pensamiento, que es también la experiencia  cotidiana y la forma en que creamos el mundo o los objetos de este mundo y nos relacionamos con ellos... Se trata  de algo como una ecología del pensamiento (por oposición a una eco-nomía), no de esforzarse por imponer sobre el mundo algo más allá de sus posibilidades, desatentamente (e.g. el supuesto crecimiento ilimitado del  capitalismo), sino de crear con el mundo-pensamiento partiendo de sus posibilidades. No se trata tampoco de una  renuncia que pretenda decir que “las cosas son así, y no pueden ser diferentes”, sino por el contrario del  descubrimiento-reconocimiento de todo lo que pueden ser); y esto es (no)paradójicamente algo más eficiente y  “económico” que la economía misma, pues actúa en diálogo con el logos: con las formas de ha-ser del  pensamiento-mundo.”")

(defn src->alt [src]
  (-> src
      (str/replace "-" " ")
      (str/split ".")
      drop-last
      (->> (str/join ""))
      (str " (Diego Villaseñor, músico)")))

(defn images-grid [total-posters posters*]
  [:div
   [:div {:class "about__m-grid"
          :style {:opacity (if @show-posters 1 0)}}
    (doall (map (fn [src]
                  [:img {:class "about__m-grid-item"
                         :key src
                         :alt (src->alt src)
                         :src (str "/images/presentaciones/" src)}])
                posters*))]
   [:div {:class "about__button-container"}
    (when (not= total-posters @n-images-to-load)
      [:button {:class "about__all-images-button"
                :on-click (fn [_]
                            (reset! n-images-to-load
                                    total-posters))}
       (str "Ver todas (" total-posters ")")])]])

(defn scripts-loader [posters]
  [js-loader {:scripts {#(exists? js/imagesLoaded)
                        (Const/from "https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.min.js")
                        #(exists? js/Masonry)
                        (Const/from "https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js")}
              :callback #(reset! n-images-to-load 7)
              :loading [:div]
              :loaded (images-grid
                       (count posters)
                       (take @n-images-to-load posters))}])

(defn main-simple [app-state scripts-loader-fn]
  (let [body (get-in @app-state [:about 0 :body])
        cv (get-in @app-state [:cv 0 :body])
        posters (->>  (get-in @app-state [:posters])
                      shuffle-posters)]
    (page-container
     "about"
     [:div
      [:div {:class "about__image-container"}
       [:img {:class "about__image" :src "/images/about.png"}]]
      [:q {:class "about__quote"} quote]
      [:div {:class "markdown-body"
             :dangerouslySetInnerHTML {:__html body}}]
      [:div {:class "about__button-container"}
       [:a {:class "about__button" :target "_blank" :href "/downloads/cv-2020-04.pdf"}
        "Curriculum Vitae"]]
      [:div {:class "about__activities-detail"}]
      (scripts-loader-fn posters)
      [:div {:class "markdown-body"
             :dangerouslySetInnerHTML {:__html cv}}]])))

(defn main []
  (r/create-class
   {:component-did-update
    (fn [_ _]
      (cond
        (nil? @masonry) (init-masonry)
        @masonry (do (reload-items @masonry)
                     (-> (js/imagesLoaded.
                          (js/document.querySelector ".about__m-grid"))
                         (.on "progress" (fn [] (layout @masonry)))))))
    :reagent-render
    (fn []
      (main-simple state/app-state scripts-loader))}))
