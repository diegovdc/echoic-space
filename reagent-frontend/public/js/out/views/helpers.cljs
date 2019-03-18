(ns views.helpers)

(defn page-container [page-class node]
  [:div {:class (str "page " page-class)}
    [:div {:class (str "grid__container " page-class "__main-container")}
      [:div {:class "grid__col-1-1"}
        node]]])

(defn make-archive-item [base-url post]
  [:div {:key (:slug post)}
    [:a {:class "grid__container archive__container" 
         :href (str base-url "/" (:slug post))}
      [:span {:class "archive__sbttl archive__sbttl--sm"} 
          (:title post)]
      [:span  {:class "archive__p"} 
          (:description post)]]])

(defn make-archive-page [title node]
  (page-container "archive"
    [:div
      [:h1 {:class "archive__ttl"} title]
      node]))

(defn page-container-bg-img [page-class img-node child-node]
    [:div
      img-node
      (page-container (str "single__bg-img "page-class) child-node)])
