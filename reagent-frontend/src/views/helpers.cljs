(ns views.helpers)

(defn page-container [page-class node]
  [:div {:class (str "page " page-class)}
    [:div {:class (str "grid__container " page-class "__main-container")}
      [:div {:class "grid__col-1-1"}
        node]]])

(defn make-archive-item [base-url post]
  [:div {:class "grid__container archive__container" :key (:slug post)}
   [:a {:style {:display "flex" :flex-direction "column"} :href (str base-url "/" (:slug post))}
    [:span {:class "archive__sbttl archive__sbttl--sm"} 
      (:title post)]
    [:span  {:class "archive__p"} 
     (:description post)]]
   [:p  {:class "archive__category"} (clojure.string/join ", " (:category post))]])


(defn make-archive-page [title node]
  (page-container "archive"
    [:div
      [:h1 {:class "archive__ttl"} title]
      node]))

(defn page-container-bg-img [page-class img-node child-node]
    [:div
      img-node
      (page-container (str "single__bg-img "page-class) child-node)])
