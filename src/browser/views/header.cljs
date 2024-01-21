(ns browser.views.header
  (:require [browser.views.header-basic :as header]
            [browser.views.sonos :as sonos]
            [reitit.frontend.easy :as rfe]
            [browser.routes :as routes]))

(defn links []
  [{:href (rfe/href ::routes/home) :text "~/"}
   {:href (rfe/href ::routes/music) :text "~/música"}
   {:href (rfe/href ::routes/blog) :text "~/bitácora"}
   {:href (rfe/href ::routes/about) :text "~/acerca"}
   {:href (rfe/href ::routes/contact) :text "~/contacto"}])

(defn main []
  (header/main links (sonos/main)))
