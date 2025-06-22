(ns browser.views.header
  (:require [browser.views.header-basic :as header]
            [browser.views.sonos :as sonos]
            [reitit.frontend.easy :as rfe]
            [browser.routes :as routes]))

(defn links []
  [#_{:href (rfe/href ::routes/home) :text ""}
   {:href (rfe/href ::routes/music) :text "Música"}
   {:href (rfe/href ::routes/blog) :text "Bitácora"}
   {:href (rfe/href ::routes/about) :text "Acerca"}
   {:href (rfe/href ::routes/contact) :text "Contacto"}])

(defn main []
  (header/main links (sonos/main)))
