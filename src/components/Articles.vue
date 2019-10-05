<template>
	<b-row class="pb-4 pb-sm-5 text-black bg-white" no-gutters>
        <b-col cols="12">
					<h1 class="text-center my-4 my-sm-5">Blog</h1>
        </b-col>
        <b-col class="mx-auto" cols="11" lg="8" md="10">
					<b-row>
						<b-col :key="index" class="d-flex my-2" cols="12" sm="6" v-for="(article, index) in articles" xl="4">
							<Article :article="article"/>
						</b-col>
					</b-row>
        </b-col>
		<b-col class="d-flex mt-4 mt-sm-5" cols="12">
			<b-button class="mx-auto" variant="primary">Wszystkie posty</b-button>
		</b-col>
    </b-row>
</template>

<script>
  import Article from './Article'
  import articles from '@/../mock/truncatedArticles'

  export default {
    name: 'Articles',
    data () {
      return {
        articles: articles,
      }
    },
    components: {
      Article,
    },
  }
</script>

<style lang="scss" scoped>

</style>
