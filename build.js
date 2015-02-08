var Metalsmith = require('metalsmith'),
	markdown = require('metalsmith-markdown'),
	layouts = require('metalsmith-layouts'),
	less = require('metalsmith-less');

console.log(__dirname);

Metalsmith(__dirname)
	.use(function (files) {
		var products = [];

		for (var property in files) {
			if (files.hasOwnProperty(property)) {
				if (files[property].template_product)
					products.push(files[property].title);
			}
		}
		console.log(files);
		console.log(products);
		files['products/index.md'] = {
			contents: Buffer(files.join('\n')),
		};
	})
	.use(markdown())
	.use(less())
	.use(layouts({
		engine: 'handlebars',
		master: 'html.hbs',
		partials: {
			page: 'page',
			product: 'product',
		},
	}))
	.build(function (error, files) {
		// console.log(error);
		// console.log(files);
	});
