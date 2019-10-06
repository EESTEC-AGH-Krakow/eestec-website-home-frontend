<template>
	<b-row class="pb-4 pb-sm-5 text-black bg-white" no-gutters>
        <b-col cols="12">
					<h1 class="text-center my-4 my-sm-5">Blog</h1>
        </b-col>
        <b-col class="mx-auto" cols="11" lg="8" md="10">
					<b-row>
						<b-col :key="article.id" class="d-flex my-2" cols="12" sm="6" v-for="article in articles">
							<ArticleCard :article="article"/>
						</b-col>
					</b-row>
        </b-col>
		<b-col class="d-flex mt-4 mt-sm-5" cols="12" v-if="!hideButton">
			<b-button :to="{name: 'blog'}" class="mx-auto" variant="primary">Wszystkie posty</b-button>
		</b-col>
    </b-row>
</template>

<script>
  import ArticleCard from './ArticleCard'

  export default {
    name: 'Articles',
    data () {
      return {
      }
    },
    components: {
      ArticleCard,
    },
    props: {
      articles: Array,
      hideButton: {
        type: Boolean,
        default: false,

      },
    },
  }
</script>

<style lang="scss" scoped>

</style>
