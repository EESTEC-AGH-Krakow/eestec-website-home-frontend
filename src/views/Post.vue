<template>
	<b-row no-gutters>
		<b-col class="mx-auto my-4" cols="11" md="8" sm="10">
			<b-card :img-alt="article.title" :img-src="article.mainImage" border-variant="danger" class="shadow-lg border-0 bg-primary text-white" img-top tag="article">
				<h1 class="m-0">{{ article.title }}</h1>
				<div class="d-flex flex-column mb-2">
					<small>{{ article.author }}</small>
					<small>{{ date }}</small>
				</div>
				<b-card-text id="content" class="mb-2" text-tag="span" v-html="article.html"></b-card-text>
			</b-card>
		</b-col>
	</b-row>
</template>

<script>
export default {
	name: 'Post',
	components: {},
	data() {
		return {
			article: {
				title: 'Tytuł',
				mainImage: 'img',
				author: 'Paweł Potacaal',
				date: new Date(),
				html: '<p>example html content with some <strong>tags</strong>.</p>'
			}
		};
	},
	computed: {
		date() {
			const date = new Date(this.article.date);
			return `${date.getDay()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes() || '00'}`;
		}
	}
};
</script>

<style lang="scss" scoped>
.card-body {
	padding: map-get($spacers, 2);

	@include media-breakpoint-up(sm) {
		padding: map-get($spacers, 3);
	}

	@include media-breakpoint-up(md) {
		padding: map-get($spacers, 4);
	}
}

#content img {
	width: 100%;
}
</style>
