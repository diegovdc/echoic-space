(ns browser.views.contact
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
  (.. (axios/post (str api-base "/.netlify/functions/contact") (-> @form-state clj->js))
      (then #(reset! form-state {:sent? true}))
      (catch (fn [error]
               #_(-> error .-response js/console.log)
               (swap! form-state assoc :error? true :sending? false)))))

(defn links []
  [:div {:class "contact__links"}
   [:a {:href "https://t.me/diegovideco" :target "_blank"}
    [:i {:class "fa fa-telegram" :aria-hidden "true"}] " @diegovideco" ]
   [:a {:href "https://twitter.com/diegovideco" :target "_blank"}
    [:i {:class "fa fa-twitter" :aria-hidden "true"}] " @diegovideco" ]
   [:a {:href "https://echoic-space.bandcamp.com/" :target "_blank"}
    [:i {:class "fa fa-bandcamp" :aria-hidden "true"}] " Bandcamp" ]
   [:a {:href "https://github.com/diegovdc" :target "_blank"}
    [:i {:class "fa fa-github" :aria-hidden "true"}] " Github" ]])

(defn form []
  [:form {:class "contact__form"
          :on-submit (partial send-email form-state)}
   [:label {:for "email" :class "contact__label"} "Email *"
    [:input {:id "email"
             :type "email"
             :class "contact__input"
             :required true
             :value (@form-state :email)
             :on-change (partial on-change :email)}]]
   [:label {:for "name" :class "contact__label"} "Nombre " [:small "(opcional)"]
    [:input {:id "name"
             :type "text"
             :class "contact__input"
             :value (@form-state :name)
             :on-change (partial on-change :name)}]]
   [:label {:for "subject" :class "contact__label"} "Asunto " [:small "(opcional)"]
    [:input {:id "subject"
             :type "text"
             :class "contact__input"
             :value (@form-state :subject)
             :on-change (partial on-change :subject)}]]
   [:label {:for "message" :class "contact__label"} "Mensaje *"
    [:textarea {:id "message"
                :class "contact__textarea"
                :required true
                :value (@form-state :message)
                :on-change (partial on-change :message)}]]
   [:div
    [:input {:id "subscribe"
             :type "checkbox"
             :class "contact__checkbox"
             :checked (@form-state :subscribe)
             :on-change #(swap! form-state assoc :subscribe (-> % .-target .-checked))}]
    [:label {:for "subscribe" :class "contact__label checkbox__label"}
     "Suscribirme a la lista de correos"]]
   [:button {:class "button" :disabled (@form-state :sending?)} "Enviar"]
   (when (@form-state :sent?) [:div {:style {:text-align "center"}}
                               "Thanks, I'll be in touch soon!"])
   (when (@form-state :error?)
     [:div {:style {:text-align "center"} :class "text-red"}
      "There was an error when sending you message, please try again."])])

(defn main [app-state]
  (page-container
   "contact pt-40"
   [:div
    [:h1 {:class "contact__ttl"} "Contacto"]
    (links)
    (form)]))
