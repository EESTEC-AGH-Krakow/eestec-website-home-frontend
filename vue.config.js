const merge = require("babel-merge");

module.exports = {
	css: {
		sourceMap: process.env.NODE_ENV === "development",
		loaderOptions: {
			sass: {
				data: `@import '@/assets/sass/bootstrap-override.scss';
											@import '~bootstrap/scss/bootstrap.scss';
											@import '@/assets/sass/all.scss';
											@import '@/assets/sass/rwd.scss';
											@import '@/assets/sass/animations.scss';`
			}
		}
	},

	chainWebpack: config => {
		config.module
			.rule("vue")
			.use("vue-loader")
			.loader("vue-loader")
			.tap(options => {
				merge(options, {
					transformToRequire: {
						img: "src",
						image: "xlink:href",
						"b-img": "src",
						"b-img-lazy": ["src", "blank-src"],
						"b-card": "img-src",
						"b-card-img": "img-src",
						"b-carousel-slide": "img-src",
						"b-embed": "src"
					}
				});
			});

		const svgRule = config.module.rule("svg");

		svgRule.uses.clear();

		svgRule.use("vue-svg-loader").loader("vue-svg-loader");
	},

	publicPath: undefined,
	outputDir: undefined,
	assetsDir: "assets",
	runtimeCompiler: true,
	productionSourceMap: undefined,
	parallel: undefined
};
