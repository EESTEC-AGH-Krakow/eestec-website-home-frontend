<template>
	<b-row no-gutters>
		<b-col class="mx-auto my-4" cols="11" md="8" sm="10">
			<b-card
				:img-alt="article.title"
				:img-src="article.mainImage"
				border-variant="danger"
				class="shadow-lg border-0"
				img-top
				tag="article">
				<h5 class="m-0">{{article.title}}</h5>
				<div class="d-flex flex-column mb-2">
					<small class="first-font">{{article.author}}</small>
					<small class="first-font">{{date}}</small>
				</div>
				<b-card-text class="mb-2 first-font" text-tag="span" v-html="article.body"></b-card-text>
			</b-card>
		</b-col>
	</b-row>
</template>

<script>
  import articles from '@/../mock/articles'

  export default {
    name: 'Post',
    data () {
      return {
        articles: articles,
      }
    },
    components: {},
    computed: {
      article () {
        return this.articles[Math.floor(Math.random() * this.articles.length)]
      },
      date () {
        const date = new Date(this.article.date)
        return `${date.getDay()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes() || '00'}`
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>
