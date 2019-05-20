const path = require('path')
const R = require('ramda')
const markDownToJSON = require('./index')
const postProcessHTML = require('./post-process-HTML')
const inputDir = path.join(__dirname, '../../public')
const outputDir = path.join(__dirname, '../../public/data')

markDownToJSON(
  inputDir,
  outputDir, 
  R.over(R.lensProp('body'), postProcessHTML)
)