<template>
	<div>
		<!--            <AboutProject id="about-project"/>-->
		<AboutUs id="about-us"/>
		<Articles :articles="articles" id="article"/>
		<!--            <Gallery id="gallery"/>-->
		<Place id="place"/>
	</div>
</template>

<script>
  import Place from '../components/Place'
  import Articles from '../components/Articles'
  // import AboutProject from './components/AboutProject'
  // import Gallery from './components/Gallery'
  import AboutUs from '../components/AboutUs'
  import articles from '@/../mock/truncatedArticles'

  export default {
    name: 'Home',
    data () {
      return {
        articles: articles,
      }
    },
    components: {
      // AboutProject,
      // Gallery,
      AboutUs,
      Place,
      Articles,
    },
  }
</script>

<style lang="scss" scoped>

</style>
