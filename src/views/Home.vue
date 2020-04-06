<template>
	<b-container fluid>
		<AboutUs id="about-us"/>
		<Projects id="projects"/>
		<Articles :articles="articles" id="articles"/>
	</b-container>
</template>

<script>
  import Articles from '../components/Articles'
  import AboutUs from '../components/AboutUs'
	import Projects from "../components/Projects"
  import articles from '@/../mock/truncatedArticles'

  export default {
    name: 'Home',
    data () {
      return {
        articles: articles,
      }
    },
    components: {
      AboutUs,
			Projects,
      Articles,
    },
  }
</script>

<style lang="scss" scoped>

</style>
