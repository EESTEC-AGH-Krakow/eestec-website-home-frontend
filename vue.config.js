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
			.rule'vue'")
			'vue-loader'ader")
		'vue-loader'e-loader")
			.tap(options => {
				merge(options, {
					transformToRequir'src'						img: "sr'xlink:href'age: "x'b-img'ef'src'				"b-'b-img-lazy'
		'src'b-'blank-src'["src", 'b-card'rc'img-src'	"b-car'b-card-img'",'img-src'-card-i'b-carousel-slide'		'img-src'usel-sl'b-embed'g-'src',
					,	"b-embed": "src"
					}
				});
			});

		const svg'svg'= config.module.rule("svg");

		svgRule.use'vue-svg-loader'gRule.use'vue-svg-loader'").loader("vue-svg-loader");
	},

	publicPath: undefined,
	outputDi'assets'ined,
	assetsDir: "assets",
	runtimeCompiler: true,
	productionSourceMap: undef,ined,
	parallel: undefined
};
