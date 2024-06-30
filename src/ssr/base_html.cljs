(ns ssr.base-html
  (:require [browser.views.header-basic :as header]))

(defn build-meta [path {:keys [description title seo slug backgroundImage]}]
  (let [base-url "https://echoic.space/"
        url (str base-url path slug)
        {:keys [img width height] :or {img backgroundImage}} seo]
    [:head
     [:meta {:charset "utf-8"}]
     [:link {:href "/images/favicon/apple-touch-icon-57x57.png", :sizes "57x57", :rel "apple-touch-icon-precomposed"}]
     [:link {:href "/images/favicon/apple-touch-icon-114x114.png", :sizes "114x114", :rel "apple-touch-icon-precomposed"}]
     [:link
      {:href "/images/favicon/apple-touch-icon-72x72.png",
       :sizes "72x72",
       :rel "apple-touch-icon-precomposed"}]
     [:link
      {:href "/images/favicon/apple-touch-icon-144x144.png",
       :sizes "144x144",
       :rel "apple-touch-icon-precomposed"}]
     [:link
      {:href "/images/favicon/apple-touch-icon-60x60.png",
       :sizes "60x60",
       :rel "apple-touch-icon-precomposed"}]
     [:link
      {:href "/images/favicon/apple-touch-icon-120x120.png",
       :sizes "120x120",
       :rel "apple-touch-icon-precomposed"}]
     [:link
      {:href "/images/favicon/apple-touch-icon-76x76.png",
       :sizes "76x76",
       :rel "apple-touch-icon-precomposed"}]
     [:link
      {:href "/images/favicon/apple-touch-icon-152x152.png",
       :sizes "152x152",
       :rel "apple-touch-icon-precomposed"}]
     [:link
      {:sizes "196x196",
       :href "/images/favicon/favicon-196x196.png",
       :type "image/png",
       :rel "icon"}]
     [:link
      {:sizes "96x96",
       :href "/images/favicon/favicon-96x96.png",
       :type "image/png",
       :rel "icon"}]
     [:link
      {:sizes "32x32",
       :href "/images/favicon/favicon-32x32.png",
       :type "image/png",
       :rel "icon"}]
     [:link
      {:sizes "16x16",
       :href "/images/favicon/favicon-16x16.png",
       :type "image/png",
       :rel "icon"}]
     [:link
      {:sizes "128x128",
       :href "/images/favicon/favicon-128.png",
       :type "image/png",
       :rel "icon"}]
     [:link
      {:type "text/css", :rel "stylesheet", :href "/css/mazorca.css"}]
     [:link
      {:crossorigin "anonymous",
       #_#_:integrity
         "sha384-XdYbMnZ/QjLh6iI4ogqCTaIjrFk87ip+ekIjefZch0Y+PvJ8CDYtEs1ipDmPorQ+",
       :href
       "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
       :rel "stylesheet"}]
     [:meta {:content " ", :name "application-name"}]
     [:meta
      {:content "width=device-width, initial-scale=1", :name "viewport"}]
     [:meta {:content "#FFFFFF", :name "msapplication-TileColor"}]
     [:meta
      {:content "mstile-144x144.png", :name "msapplication-TileImage"}]
     [:meta
      {:content "mstile-70x70.png",
       :name "msapplication-square70x70logo"}]
     [:meta
      {:content "mstile-150x150.png",
       :name "msapplication-square150x150logo"}]
     [:meta
      {:content "mstile-310x150.png",
       :name "msapplication-wide310x150logo"}]
     [:meta
      {:content "mstile-310x310.png",
       :name "msapplication-square310x310logo"}]
     [:meta {:content "Diego Villaseñor", :name "application-name"}]
     [:meta {:content "#FFFFFF", :name "msapplication-TileColor"}]
     [:meta
      {:content "baseUrl+/images/favicon/mstile-144x144.png",
       :name "msapplication-TileImage"}]
     [:meta
      {:content "baseUrl+/images/favicon/mstile-70x70.png",
       :name "msapplication-square70x70logo"}]
     [:meta
      {:content "baseUrl+/images/favicon/mstile-150x150.png",
       :name "msapplication-square150x150logo"}]
     [:meta
      {:content "baseUrl+/images/favicon/mstile-310x150.png",
       :name "msapplication-wide310x150logo"}]
     [:meta
      {:content "baseUrl+/images/favicon/mstile-310x310.png",
       :name "msapplication-square310x310logo"}]
     [:title (str "Diego Villaseñor | " title)]
     [:meta {:content description, :name "description"}]
     [:meta {:content "summary_large_image", :name "twitter:card"}]
     [:meta {:content "@diegovideco", :name "twitter:site"}]
     [:meta {:content "@diegovideco", :name "twitter:creator"}]
     [:meta
      {:content (str "Diego Villaseñor | " title),
       :name "twitter:title"}]
     [:meta
      {:content description, :name "twitter:description"}]
     [:meta {:content img, :name "twitter:image"}]
     [:meta {:content url, :property "og:url"}]
     [:meta {:content "article", :property "og:type"}]
     [:meta
      {:content (str "Diego Villaseñor | " title),
       :property "og:title"}]
     [:meta
      {:content description, :property "og:description"}]
     [:meta {:content img, :property "og:image"}]
     (when width [:meta {:content width, :property "og:image:width"}])
     (when height [:meta {:content height, :property "og:image:height"}])]))

(defn base [path body attributes]
  [:html

   (build-meta path attributes)
   [:body
    [:a {:style "display: none;"
         :rel "me"
         :href "https://social.toplap.org/@videco"}
     "Mastodon"]
    [:div#app
     (header/main (fn [] [{:href "/" :text "~/"}
                          {:href "/music/" :text "~/música"}
                          {:href "/blog/" :text "~/bitácora"}
                          {:href "/about/" :text "~/acerca"}
                          {:href "/contact/" :text "~/contacto"}]))
     body]
    [:script {:src "/browser-main.js", :type "text/javascript"}]
    [:script {:type "text/javascript",
              :src "https://www.youtube.com/iframe_api"}]]])
