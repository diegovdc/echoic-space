(defproject reagent-frontend "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.10.312"]
                 [reagent "0.8.1"]
                 [secretary "1.2.3"]
                 [metosin/reagent-dev-tools "0.2.0"]
                 [binaryage/oops "0.6.2"]
                 [jayq "2.5.4"]
                 [com.cemerick/url "0.1.1"]
                 [venantius/accountant "0.2.4"]
                 [ring "1.5.1"]
                 [ring/ring-defaults "0.2.1"]
                 [compojure "1.5.0"]]
  
  :plugins [[lein-cljsbuild "1.1.5"]
            [lein-figwheel "0.5.16"]]

  :min-lein-version "2.5.0"
  :jvm-opts []
  :clean-targets ^{:protect false}
  [:target-path
   [:cljsbuild :builds :app :compiler :output-dir]
   [:cljsbuild :builds :app :compiler :output-to]]

  :resource-paths ["public"]

  :figwheel {:http-server-root "."
             :nrepl-port 7002
             :ring-handler dev-server.server-handler/dev-app
             :nrepl-middleware ["cemerick.piggieback/wrap-cljs-repl"]
             :css-dirs ["public/css"]}

  :cljsbuild {:builds {:app
                       {:source-paths ["src" "env/dev/cljs"]
                        :compiler
                        {:main "reagent-frontend.dev"
                         :output-to "public/js/app.js"
                         :output-dir "public/js/out"
                         :asset-path   "/js/out"
                         :source-map true
                         :optimizations :none
                         :pretty-print  true
                         :external-config {:reagent-dev-tools {:state-atom frontend.state/app-state}}
                         :preloads [reagent-dev-tools.preload]}
                        :figwheel
                        {:on-jsload "reagent-frontend.core/mount-root"
                         :open-urls ["http://localhost:3449/"]}}
                       :release
                       {:source-paths ["src" "env/prod/cljs"]
                        :compiler
                        {:output-to "public/js/app.js"
                         :output-dir "public/js/release"
                         :asset-path   "//js/out"
                         :optimizations :advanced
                         :externs ["externs/jquery.js", "externs/youtube.ext.js"] 
                         :pretty-print false}}}}

  :aliases {"package" ["do" "clean" ["cljsbuild" "once" "release"]]}

  :profiles {:dev {:source-paths ["src" "env/dev/clj"]
                   :plugins [[cider/cider-nrepl "0.21.0"]]
                   :repl-options {:nrepl-middleware [cider.piggieback/wrap-cljs-repl]}
                   :dependencies [[binaryage/devtools "0.9.7"]
                                  [cider/piggieback "0.3.10"]
                                  [figwheel-sidecar "0.5.16"]
                                  [org.clojure/tools.nrepl "0.2.13"]
                                  [cider/piggieback "0.3.10"]]}})
