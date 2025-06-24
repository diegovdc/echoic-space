(ns browser.views.press
  (:require
   [browser.views.helpers :refer [make-archive-page]]))

(def ^:private notes
  [{:url "https://casadellago.unam.mx/nuevo/evento/cantan-las-esferas"
    :title "Hábitat de Milo Tamez y Diego Villaseñor (MX)
Cantan las esferas. Ciclo curado por Alejandro Colinas (MX)"
    :date "2023/03/01"
    :image ""
    :description "Concierto en Casa del Lago."
    :link-description ""}
   {:url "https://www.c3.unam.mx/noticias/noticia130.html"
    :link "https://youtu.be/lRbRyRlN67Q?si=6GYPfr0jO_IqaykW "
    :title "La música antes de la música"
    :date "2019/06/14"
    :image ""
    :description "Concierto conferencia en el C3 de la UNAM."
    :link-description ""}
   {:url "https://www.jornada.com.mx/2022/07/08/cultura/a04n1cul"
    :title "Diferencial, nuevo ciclo de ofertas sonoras fuera de formatos tradicionales"
    :date "2022/07/08"
    :image ""
    :description "Performance de Hábitat dentro del Cíclo Diferencial"
    :link-description ""}
   {:url "https://ntcd.mx/noticias-expansivas-cenart-festival-guitarra-electrica-arte-sonoro"
    :title "Expansivas en Cenart: Festival que celebra la guitarra eléctrica en el arte sonoro contemporáneo"
    :date "2024/10/11"
    :image ""
    :description ""
    :link-description ""}
   {:url "https://cmm.cenart.gob.mx/data/2024/Expansivas_Programa_largo.pdf"
    :title "Programa de Expansivas"
    :date "2024/10/11"
    :image ""
    :description ""
    :link-description ""}
   {:url "https://www.jornada.com.mx/2024/10/21/cultura/a05n2cul"
    :title "El Centro Multimedia del Cenart dedica ciclo a la guitarra eléctrica"
    :date "2024/10/21"
    :image ""
    :description ""
    :link-description ""}
   {:url "https://www.cenart.gob.mx/2022/07/inicia-la-primera-edicion-del-ciclo-diferencial-musica-nueva-en-el-centro-nacional-de-las-artes/"
    :title "Inicia la primera edición del ciclo Diferencial. Música Nueva en el Centro Nacional de las Artes"
    :date "2022/07/01"
    :image ""
    :description ""
    :link-description ""}
   {:url "https://inba.gob.mx/prensa/11758/en-el-laboratorio-arte-alameda-se-resalto-la-importancia-de-difundir-las-lenguas-originarias"
    :title "En el Laboratorio Arte Alameda se resaltó la importancia de difundir las lenguas originarias"
    :date "2019/02/25"
    :image ""
    :description ""
    :link-description ""}])

(defn main
  []
  (make-archive-page
   "Notas de Prensa"
   [:div
    (->> notes
         (sort-by :date)
         reverse
         (map (fn [{:keys [date url title]}]
                [:div.archive__item {:key url
                                     :style {:margin-bottom 16}}
                 [:div
                  [:h3.archive__sbttl title]
                  [:p.archive__date {:style {:font-size 28}} date]
                  [:p.archive__p [:a {:style {:font-size 24
                                              :color "#562bdc"}
                                      :href url} url]]]])))]))
