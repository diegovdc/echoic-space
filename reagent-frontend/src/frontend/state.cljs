(ns frontend.state
    (:require
        [reagent.core :as r]))

(def app-state 
  (r/atom {:page :home
           :single ""
           :hash nil
           :music []
           :about []}))

(def player-state
  (r/atom {:track-data {:duration nil :elapsed nil :percentage nil}
           :is-playing false
           :is-paused false
           :now-playing {}}))
                              

