(ns browser.views.mailing-list
  (:require [browser.views.helpers :refer [page-container]]
            [reagent.core :as r]
            [axios :as axios]
            [clojure.string :as str]))

(def form-state (r/atom {}))
(-> form-state)

(defn on-change [key event]
  (swap! form-state assoc key (-> event .-target .-value)))

(def api-base (if goog.DEBUG "http://localhost:9000" ""))

(defn send-email [form-state ev]
  (.preventDefault ev)
  (swap! form-state assoc
         :sending? true
         :language (-> js/navigator.language (str/split "-") first))
  (.. (axios/post (str api-base "/.netlify/functions/mailing-list") (-> @form-state clj->js))
      (then #(reset! form-state {:sent? true}))
      (catch (fn [error]
               #_(-> error .-response js/console.log)
               (swap! form-state assoc :error? true :sending? false)))))

(defn form []
  [:form {:class "contact__form"
          :on-submit (partial send-email form-state)}
   [:label {:for "email" :class "contact__label"} "Email *"
    [:input {:id "email"
             :type "email"
             :class "contact__input"
             :required true
             :value (@form-state :email_address)
             :on-change (partial on-change :email_address)}]]
   [:label {:for "name" :class "contact__label"} "Nombre " [:small "(opcional)"]
    [:input {:id "name"
             :type "text"
             :class "contact__input"
             :value (@form-state :name)
             :on-change (partial on-change :name)}]]
   [:button {:class "button" :disabled (@form-state :sending?)} "Enviar"]
   (when (@form-state :sent?) [:div {:style {:text-align "center"}}
                               "Thanks for subscribing!"])
   (when (@form-state :error?)
     [:div {:style {:text-align "center"} :class "text-red"}
      "There was an error when trying to subscribe or maybe you are already subscribed. If not, please try again."])])

(defn main [app-state]
  (page-container
   "contact pt-40"
   [:div
    [:h1 {:class "contact__ttl"} "Mailing list"]
    [:div {:class "contact__p mb-20 text-center" }
     [:p {:class "mb-20"} "Suscríbete para recibir nueva música, noticias, textos y otras cosas."]
     [:small "Me compromento a mandar sólo contenido de calidad, aproximadamente cada dos meses."]]
    (form)]))
