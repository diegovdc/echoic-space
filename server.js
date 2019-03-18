require('dotenv').config()
const path = require('path')
const express = require('express')
const app = express()
const R = require('ramda')
const music = require('./reagent-frontend/public/data/music.json')
const log = require('tap-logger')

// console.log("(path.join(process.cwd(), './reagent-frontend/public/js')) ", (path.join(process.cwd(), './reagent-frontend/public/js')));
app.set('view engine', 'pug')
app.use('/robots.txt', express.static(path.join(process.cwd(), './reagent-frontend/public/robots.txt')))
app.use('/js', express.static(path.join(process.cwd(), './reagent-frontend/public/js')))
app.use('/css', express.static(path.join(process.cwd(), './reagent-frontend/public/css')))
app.use('/music', express.static(path.join(process.cwd(), './reagent-frontend/public/music')))
app.use('/downloads', express.static(path.join(process.cwd(), './reagent-frontend/public/downloads')))
app.use('/images', express.static(path.join(process.cwd(), './reagent-frontend/public/images')))
app.use('/data', express.static(path.join(process.cwd(), './reagent-frontend/public/data')))

app.use((req, res, next) => {
  let baseUrl = process.env.NODE_ENV === 'development' ?
    '//' + req.headers.host :
    '//' + req.headers.host

  res.locals.baseUrl = req.protocol + ":" + baseUrl

  // res.locals.mainClientJS = process.env.WEBPACK === 'true' ?
  //   `http://localhost:${process.env.WEBPACK_PORT || 8080}/public/build/bundle.js` :
  //   `${res.locals.baseUrl}${versionedAssets['app.js']}`

  // res.locals.mainClientCSS = `${res.locals.baseUrl}${versionedAssets['app.css']}`
  next();
})

//SEO
const seoBase = {
  title: '| Echoic Space',
  description: 'Música experimental de Diego Villaseñor. Grabaciones, partituras, código y análisis.',
  image: {
      url: res => res.locals.baseUrl + '/images/seo.png',
      width:1231,
      height:1023
  }
}



app.get('/music', (req, res) => {    
    let openGraph = {
      url: res.locals.baseUrl + req.url,
      title: '| Música',
      description: 'Archivo de composiciónes, improvisaciónes y live coding. Audios, partituras, código y análisis',
      image: {
        url: seoBase.image.url(res),
        width: seoBase.image.width,
        height: seoBase.image.height,
      }
    }

    res.render('index', {
      openGraph,
    })
})

app.get('/music/:work_slug', (req, res) => {    
    let work = R.pipe(
      R.find(m => 
        R.path(['attributes', 'slug'], m) 
        === req.params.work_slug, 
      ),
      R.pathOr({}, ['attributes']),
      log,
    )(music)

    let openGraph = {
      url: res.locals.baseUrl + req.url,
      title: `| ${work.title}`,
      description: work.seo_description || work.description,
      image: {
        url: work.seo_img 
          ? res.locals.baseUrl + '/music/' + work.slug + '/' + work.seo_img
          : seoBase.image.url(res),
        width: work.seo_img_width,
        height: work.seo_img_height,
      }
    }

    res.render('index', {
      openGraph,
    })
})

app.get('*', (req, res) => {    
    let openGraph = {
      url: res.locals.baseUrl + req.url,
      title: seoBase.title,
      description: seoBase.description,
      image: {
        url: seoBase.image.url(res),
        width: seoBase.image.width,
        height: seoBase.image.height,
      }
    }

    res.render('index', {
      openGraph,
    })
})

app.listen(process.env.PORT || 3000, () => console.log('echoic-space running on port '+process.env.PORT+'!'))