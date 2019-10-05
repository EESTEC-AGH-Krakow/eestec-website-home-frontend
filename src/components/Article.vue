<template>
	<b-card
		:img-alt="article.title"
		:img-src="article.mainImage"
		:title="article.title"
		border-variant="danger"
		class="bg-primary text-white"
		img-top
		tag="article"
		title-tag="h5">
		<div class="d-flex flex-column mb-2">
			<small class="first-font">{{article.author}}</small>
			<small class="first-font">{{date}}</small>
		</div>
		<b-card-text class="mb-2 first-font" text-tag="span">{{article.body}}</b-card-text>

		<b-button class="mt-auto text-white" variant="secondary">Więcej</b-button>
	</b-card>
</template>

<script>
  export default {
    name: 'Blog',
    data () {
      return {}
    },
    components: {},
    props: ['article'],
    computed: {
      date () {
        const date = new Date(this.article.date)
        return `${date.getDay()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes() || '00'}`
      },
    },
  }
</script>

<style lang="scss" scoped>
	.card-body {
		@extend .d-flex, .flex-column, .p-3;
	}

	.card {
		border-width: 3px;
	}
</style>
