var Metalsmith = require('metalsmith'),
	markdown = require('metalsmith-markdown'),
	templates = require('metalsmith-templates');

console.log(__dirname);

Metalsmith(__dirname)
	.use(markdown())
	.use(templates('handlebars'))
	.build(function (error, files) {
		console.log(error);
		console.log(files);
	});
