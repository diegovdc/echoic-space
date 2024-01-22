(ns dev.new-music-file
  (:require
   [clojure.java.io :as io]
   [clojure.string :as str]))

(def template
  "---
title: {{title}}
description: {{short-description}}
slug: {{slug}}
file_name: {{file-url}}
track_name: \"{{title}}\"
backgroundImage:
date: {{date}}
category:
{{tags}}
---

{{content}}
")

(defn slugify [title]
  (-> title
      str/lower-case
      (str/replace #" " "-")
      (str/replace #"\(" "")
      (str/replace #"\)" "")))

(comment
  (slugify "Ho la"))

(defn make-tags [tags]
  (str (->> tags
            sort
            (map #(str "  - " %))
            (str/join "\n"))))

(comment
  (make-tags ["hola" "mundo"]))

(defn create-file-string
  [{:keys [title
           short-description
           slug
           file-url
           date
           tags
           content]
    :or {title ""
         short-description ""
         slug (slugify title)
         file-url ""
         date ""
         tags []}}]
  (-> template
      (str/replace #"\{\{title\}\}" title)
      (str/replace #"\{\{slug\}\}" slug)
      (str/replace #"\{\{short-description\}\}" short-description)
      (str/replace #"\{\{file-url\}\}" file-url)
      (str/replace #"\{\{date\}\}" date)
      (str/replace #"\{\{tags\}\}" (make-tags tags))
      (str/replace #"\{\{content\}\}" (or content short-description))))

(comment
  ;; Create a new music-single file from template
  (let [title "For Our Palestinian Siblings (A Wish for Peace)"
        slug (slugify title)
        data {:title title
              :short-description "Improvisation against the genocide"
              :slug slug
              :file-url "https://archive.org/download/ohmachaCiani/ohmachaCiani.mp3"
              :date "2022-08-11"
              :content nil ;; use `short-description`
              :tags ["Live Coding"
                     "Suzanne Ciani"
                     "Combination Product Sets"
                     "Microtonalidad"]}
        file-path (format "build/browser/music/%s/%s.md" slug slug)]
    (if (.exists (io/file file-path))
      (println "File already exists, doing nothing.")
      (do (io/make-parents file-path)
          (spit file-path (create-file-string data))))))
