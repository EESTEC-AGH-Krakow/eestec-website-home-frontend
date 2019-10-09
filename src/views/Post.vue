<template>
	<b-row no-gutters>
		<b-col class="mx-auto my-4" cols="11" md="8" sm="10">
			<b-card
				:img-alt="article.title"
				:img-src="article.mainImage"
				border-variant="danger"
				class="shadow-lg border-0 bg-primary text-white"
				img-top
				tag="article">
				<h1 class="m-0">{{article.title}}</h1>
				<div class="d-flex flex-column mb-2">
					<small class="first-font">{{article.author}}</small>
					<small class="first-font">{{date}}</small>
				</div>
				<b-card-text class="mb-2 first-font" id="content" ref="content" text-tag="span"></b-card-text>
			</b-card>
		</b-col>
	</b-row>
</template>

<script>
  import httpMixin from '../mixins/httpMixin'

  export default {
    name: 'Post',
    components: {},
    mixins: [httpMixin('', '#content')],
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
		@extend .p-2, .p-sm-3, .p-md-4;
	}

	#content img {
		width: 100%;
	}
</style>
