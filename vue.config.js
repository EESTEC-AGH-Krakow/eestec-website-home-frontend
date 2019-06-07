module.exports = {
  productionSourceMap: false,
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        data: `@import "@/assets/scss/partials/_variables.scss";
        @import "@/assets/scss/partials.scss";
        @import "@/assets/scss/main.scss";`
      }
    }
  }
}
