<template>
	<b-row no-gutters>
		<Articles :articles="articles" hideButton/>
		<b-pagination-nav base-url="#" class="mx-auto" number-of-pages="10"></b-pagination-nav>
	</b-row>
</template>

<script>
  import Articles from '../components/Articles'
  import articles from '@/../mock/truncatedArticles'

  export default {
    name: 'Blog',
    data () {
      return {
        articles: articles,
      }
    },
    components: {
      Articles,
    },
  }
</script>

<style lang="scss" scoped>

</style>
