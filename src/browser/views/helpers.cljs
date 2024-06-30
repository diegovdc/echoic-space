(ns browser.views.helpers
  (:require
   [browser.helpers :refer [toggle-category]]
   [browser.state :refer [app-state]]
   [clojure.string :as str]))


(defn page-container [page-class node]
  [:div {:class (str "page " page-class)}
   [:div {:class (str "grid__container " page-class "__main-container")}
    [:div {:class "grid__col-1-1"}
     node]]])

(def meses {"01" "Enero"
            "02" "Febrero"
            "03" "Marzo"
            "04" "Abril"
            "05" "Mayo"
            "06" "Junio"
            "07" "Julio"
            "08" "Agosto"
            "09" "Septiembre"
            "10" "Octubre"
            "11" "Noviembre"
            "12" "Diciembre"})

(defn format-date [date]
  (-> date
      (clojure.string/split "-")
      (subvec 1)
      (update-in [0] #(get meses %))
      (update-in [1] #(nth (clojure.string/split % "T") 0))
      (->> (clojure.string/join " "))
      (#(str "(" % ")"))))

(defn
  ;; ^:deprecated
  get-bg-img
  [base-url post-attrs]
  (str "/" base-url "/" (:slug post-attrs) "/" (:backgroundImage post-attrs)))

(defn get-bg-img2 [post-attrs]
  (let [archive (some-> post-attrs :data/archive name)
        img (:backgroundImage post-attrs)]
    (when (and archive img)
      (str "/" archive "/" (:slug post-attrs) "/" img))))

(defn bg-img [url]
  {:background-image (str "url(" url ")")
   :background-color "#000"})

(defn base-url [app-state]
  (let [page (:page @app-state)]
    (cond
      (= page :music-single) "music"
      (= page :blog-single)  "blog")))
(defn make-archive-item [app-state post->href post]
  (let [img-url (bg-img (get-bg-img2 post))]
    [:div {:class "grid__container archive__container" :key (:slug post)}
     [:a {:class "archive__item"
          :href (post->href post)}
      [:div {:class "archive__image"
             :style img-url
             }]
      [:div
       [:h3 {:class "archive__sbttl archive__sbttl--sm"}
        (:title post) [:span {:class "archive__date"} (format-date (:date post))]]
       [:p  {:class "archive__category"} (clojure.string/join ", " (:category post))]
       [:p  {:class "archive__p"}
        (:description post)]]]]))

(defn make-archive-page [title node]
  (page-container "archive"
                  [:div
                   [:h1 {:class "archive__ttl"} title]
                   node]))

(defn page-container-bg-img [page-class img-node child-node]
  [:div
   img-node
   (when child-node
     (page-container (str "single__bg-img "page-class) child-node))])

(defn print-categories [selected-categories-atom categories]
  (let [selected-cats @selected-categories-atom]
    [:div {:class "music__category-container"}
     (map (fn [cat]
            [:span {:key cat
                    :class (str "music__category "
                                (if (some #(= % cat) selected-cats) "selected"))
                    :on-click (toggle-category selected-categories-atom cat)}
             cat])
          categories)]))


(defn get-entries [app-state]
  (let [app-state' @app-state
        page (:page app-state')]
    (cond
      (= page :music-single) (:music @app-state )
      (= page :blog-single) (:blog @app-state ))))
