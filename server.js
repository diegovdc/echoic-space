require('dotenv').config()
const path = require('path')
const express = require('express')
const app = express()
const R = require('ramda')
const music = require('./reagent-frontend/public/data/music.json')
const blog = require('./reagent-frontend/public/data/blog.json')
const log = require('tap-logger')

// console.log("(path.join(process.cwd(), './reagent-frontend/public/js')) ", (path.join(process.cwd(), './reagent-frontend/public/js')));
app.set('view engine', 'pug')
app.use('/robots.txt', express.static(path.join(process.cwd(), './reagent-frontend/public/robots.txt')))
app.use('/js', express.static(path.join(process.cwd(), './reagent-frontend/public/js')))
app.use('/css', express.static(path.join(process.cwd(), './reagent-frontend/public/css')))
app.use('/music', express.static(path.join(process.cwd(), './reagent-frontend/public/music')))
app.use('/blog', express.static(path.join(process.cwd(), './reagent-frontend/public/blog')))
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

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something went wrong!!');
});

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

const makeSinglePageOpenGraph = (parentSlug, singlePageSlug, db, req, res) => {
  const page = R.pipe(
    R.find(m => 
      R.path(['attributes', 'slug'], m) 
      === singlePageSlug, 
    ),
    R.pathOr({}, ['attributes']),
    log,
  )(db)

  const seo = page.seo || {}

  return log('openGraph', {
    url: res.locals.baseUrl + req.url,
    title: `| ${page.title}`,
    description: seo.description || page.description || seoBase.description,
    image: {
      url: seo.img 
        ? res.locals.baseUrl + `/${parentSlug}/` + page.slug + '/' + seo.img
        : seoBase.image.url(res),
      width: seo.width,
      height: seo.height,
    }
  })
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
app.get('/blog', (req, res) => {    
    let openGraph = {
      url: res.locals.baseUrl + req.url,
      title: '| Blog',
      description: 'Ideas, procesos, textos y noticias',
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
    res.render('index', {
      openGraph: makeSinglePageOpenGraph(
        'music',
        req.params.work_slug,
        music,
        req,
        res,
      ),
    })
})

app.get('/blog/:entry_slug', (req, res) => {    
    res.render('index', {
      openGraph: makeSinglePageOpenGraph(
        'blog',
        req.params.entry_slug,
        blog,
        req,
        res,
      ),
    })
})

app.get('*', (req, res) => {
    console.log('1') 
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
    console.log('2') 

    res.render('index', {
      openGraph,
    })
})

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something went wrong2!!');
});

app.listen(process.env.PORT || 3000, () => console.log('echoic-space running on port '+process.env.PORT+'!'))
