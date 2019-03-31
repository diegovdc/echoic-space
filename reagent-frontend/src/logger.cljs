(ns logger.core
  "Provides the `log` function.

  The last argument to log is the value that is returned.
     
  All other values may be strings, symbols or functions.
    
  Functions will receive the return value and it will ne logged
  
  The :mute keyword may be used to turn off the logger")

(defn log 
  "Example: (log :some-symbol some-func return-value)"
  [& args]
  (let [off (some #(= % :mute) args) 
        val (last args)]
    (if (or off (not js/goog.DEBUG))
      val ;; returns val when muted and/or not on debug

      (let [msgs (butlast args)]
        (apply js/console.log 
               (concat 
                (->> msgs (mapv (fn [msg]
                                  (if (fn? msg)
                                    (msg val)
                                    msg)))) 
                [val]))))
    val))
