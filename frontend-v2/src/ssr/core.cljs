(ns ssr.core
  (:require-macros [hiccups.core :as hiccups :refer [html]])
  (:require [browser.pages :refer [home-page about-page]]
            [browser.views.home :as home]
            [browser.views.about :as about]
            [browser.views.blog :as blog]
            [browser.views.music :as music]
            [browser.views.music-single :as music-single]
            [clojure.string :as str]
            [ssr.base-html :refer [base]]
            [hiccups.runtime :as hiccupsrt]
            ["process" :as process]
            ["path" :as path]
            ["fs" :as fs]))

(set! *warn-on-infer* false)


(defn spy [x] (println x) x)
(defn react-id-str [react-id]
  (assert (vector? react-id))
  (str "." (str/join "." react-id)))

(defn set-react-id [react-id element]
  (update element 1 merge {:data-reactid (react-id-str react-id)}))

(defn normalize [component]
  (if (map? (second component))
    component
    (into [(first component) {}] (rest component))))

(defn fix-style-tags [opts]
  (->> opts
       (map (fn [[k v]] (if (= k :style)
                         [k (str/join  (map (fn [[k v]] (str (name k) ":" v ";")) v))]
                         [k v])))
       (into {})))

(defn render
  ([component] (render [0] component))
  ([id component]
   (cond
     (fn? component)
     (render (component))

     (not (coll? component))
     component

     (coll? (first component))
     (map-indexed #(render (conj id %1) %2) component)

     (keyword? (first component))
     (let [[tag opts & body] (normalize component)]
       (let [body* (or (-> opts :dangerouslySetInnerHTML :__html) body)]
         (->> body*
              (map-indexed #(render (conj id %1) %2))
              (into [tag (fix-style-tags opts)])
              (set-react-id id))))

     (fn? (first component))
     (render id (apply (first component) (rest component))))))

(defn page->html [path page attributes]
  (hiccups.core/html (ssr.base-html/base path (render page) attributes)))

(defn get-dir-path [path]
  (->> (str/split path #"/")
       (drop-last)
       (str/join "/")))


(do
  (def main-dir "frontend-v2")
  (def main-dir-path
    (-> (process/cwd)
        (str/split main-dir)
        first
        (str "/" main-dir "/")))
  )

(defn make-file-path  [file-path] (path/join main-dir-path "build/browser/" file-path))

(defn write-page [file-path url-path page attributes]
  (let [path (make-file-path file-path)
        dir-path (get-dir-path path)]
    (when-not (empty? dir-path)
      (fs/mkdirSync dir-path (clj->js {:recursive true}))) ;
    (fs/writeFileSync (make-file-path file-path)
                      (page->html url-path page attributes))
    (println (str "file-created: " path))))

(defn get-data-file [file]
  (-> (fs/readFileSync
       (make-file-path (str "data/" file))
       (clj->js {:encoding "utf8"}))
      (js/JSON.parse)
      (js->clj :keywordize-keys true)))
(defn routing-fn
  ([route] (routing-fn route nil nil))
  ([route params] (routing-fn route params nil))
  ([route params query]
   (condp = route
     :browser.routes/music "/music/"
     :browser.routes/music-single (str "/music/" (:slug params) "/")
     :browser.routes/blog-single (str "/blog/" (:slug params) "/")
     :browser.routes/blog "/blog/"
     :browser.routes/about "/about/"
     "/")))

(def data (atom
           {:routing-fn routing-fn
            :about (get-data-file "about.json")
            :blog (get-data-file "blog.json")
            :music (get-data-file "music.json")
            :posters (js->clj
                      (fs/readdirSync (make-file-path "images/presentaciones")))}))

(defn update-posters-data [posters]
  (fs/writeFileSync  (make-file-path "data/posters.json")
                     (js/JSON.stringify (clj->js posters)))
  (println "Posters updated"))

(defn build []
  (write-page "index.html" nil (home/main)
              {:description "Diego Villaseñor: músico, compositor, programador, artista transdisciplinario. Música experimental, partituras, código y análisis"
               :title "Echoic Space"
               :seo {:img "https://echoic.space/images/seo.png"
                     :width 1231,
                     :height 1023}})
  (write-page "blog/index.html" "blog/" (blog/main data)
              {:description "Blog de Diego Villaseñor: músico, compositor, programador, artista transdisciplinario. Música experimental, partituras, código y análisis"
               :title "Blog"
               :seo {:img "https://echoic.space/images/seo.png"
                     :width 1231,
                     :height 1023}})
  (do (swap! about/n-images-to-load (constantly 30))
      (swap! about/show-posters (constantly true))
      (write-page "about/index.html" "about/"
                  (about/main-simple
                   data
                   (fn [posters] (about/images-grid (count posters)
                                                   (take @about/n-images-to-load
                                                         posters))))
                  {:description "Acerca de Diego Villaseñor: músico, compositor, programador, artista transdisciplinario. About, imágenes, fechas, cv."
                   :title "Acerca"
                   :seo {:img "https://echoic.space/images/seo.png"
                         :width 1231,
                         :height 1023}}))
  (write-page "music/index.html" "music/" (music/main data)
              {:description "Grabaciones de Diego Villaseñor: músico, compositor, programador, artista transdisciplinario."
               :title "Música"
               :seo {:img "https://echoic.space/images/seo.png"
                     :width 1231,
                     :height 1023}})
  (do ;; Music singles
    (swap! data assoc :page :music-single)
    (doseq [page (-> @data :music)]
      (let [slug (-> page :attributes :slug)]
        (write-page (str "music/" slug "/index.html")
                    "music/"
                    (.reagentRender (.-prototype (music-single/main data slug nil)))
                    (page :attributes)))))
  (do ;; Blog singles
    (swap! data assoc :page :blog-single)
    (doseq [page (-> @data :blog)]
      (let [slug (-> page :attributes :slug)]
        (write-page (str "blog/" slug "/index.html")
                    "blog/"
                    (.reagentRender (.-prototype (music-single/main data slug nil)))

                    (page :attributes))))))

(defn -main []
  (build)
  (update-posters-data (@data :posters))
  (process/exit 0))

(comment
  (update-posters-data (@data :posters))
  (build))
