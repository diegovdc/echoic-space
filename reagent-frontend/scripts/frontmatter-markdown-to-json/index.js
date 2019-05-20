const path = require('path')
const fm = require('front-matter')
const marked = require('marked');
const glob = require('glob')
const R = require('ramda')
const {readAsText, writeFile} = require('coral-fs-tasks')
const Task = require('data.task')

const getDir = dir => glob.sync(`${dir}/**/*.md`)

let parse = R.compose(
	content => R.assoc('body', marked(content.body), content),
	fm
)

let groupFilesByFolder = R.compose(
	R.map(R.map(x => parse(x.content))),
	R.groupBy(x => x.folder),
)

let getFolder = (input_dir, path) => R.pipe(
	R.replace(input_dir, ''),
	R.split('/'),
	R.reject(R.isEmpty),
	R.head,
)(path)/*? */


let fileTask = input_dir => path => R.composeK(
	file => Task.of({folder: getFolder(input_dir, path), content: file}),
	readAsText('utf8')
)(path)

const writeJsons = output_dir => obj => 
	R.sequence(
		Task.of, 
		R.map(key => 
			writeFile(output_dir+'/', {filename:key+'.json', buffer:JSON.stringify(obj[key])}), 
		Object.keys(obj))
	)

// markdownToJSON :: (String, String, {attributes: {*}, body: HTMLstring} -> {attributes: {*}, body: HTMLstring}) -> JSON {attributes: {*}, body: HTMLstring}
const markdownToJSON = (input_dir, output_dir, postProcessors) => 
	R.sequence(Task.of, R.map(fileTask(input_dir), getDir(input_dir)))
		.map(groupFilesByFolder)
		.map(R.map(R.map(
			R.pipe(
				R.omit('frontmatter'),
				// post processing, iterates over each processed .md file
				postProcessors
			)
		)))
		.chain(writeJsons(output_dir))
		.fork(console.log, s => console.log('Alles Gut!'))

module.exports = markdownToJSON

