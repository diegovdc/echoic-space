const R = require('ramda')
const cheerio = require('cheerio')

//TEST body
// const body = `
// <p>asdkjas aslk<footnote type="source" class="some-class1">Algo</footnote> más</p>

// <p><footnote type="note" class="some-class1">Some note1</footnote>asdasdlkjsd</p>

// <p>asdkjas aslk<footnote class="some-class" type="source">Algo</footnote> lkjasd asdk as</p>

// <p><footnote class="some-class" type="note">Algo</footnote> Some note</p>

// <p>asfdlkjsdf  <footnote class="some-class2" type="source">Algo más</footnote>lkjda d</p>

// <p><footnote class="some-class2" type="note">Algo</footnote> Some note</p>`


const numberFootnotes = $ => {
  // in the html footnotes should look like this
  // <footnote class="some-class2" type="source">Any text (will be transformed into a number)</footnote>
  // type:defines if footnote is on the text body (type 'source') and refers to the real note (type 'note')
  // class: associates a source type footnote to a note type footnote
  const footnotesState = {count: 0, index:[]}

  $('footnote').map((i, el) => {
    const footnoteType = R.path(['attribs', 'type'], el)
    const class_ = R.path(['attribs', 'class'], el)
    if(!footnoteType) {throw new Error('Footnote with no type attribute found', el)}
    if(!class_) {throw new Error('Footnote with no class attribute found', el)}
    
    if(footnoteType === 'source') { // footnote reference
      footnotesState.count = footnotesState.count + 1
      footnotesState.index.push(class_)
      $(el).text(footnotesState.count.toString())
    } else { // true footnote
      const index = footnotesState.index.indexOf(class_) + 1
      $(el).text(index.toString())
      $(el.parent).addClass('footnote')
    }
    el.name = "sup";
    return el
  })

  return $
}

const postProcessHTML = body => {
  let $ = cheerio.load(body)
  $ = numberFootnotes($)
  return $('body').html()
}

module.exports = postProcessHTML
