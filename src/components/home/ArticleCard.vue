<template>
	<b-card :img-alt="article.title" :img-src="article.mainImage" border-variant="danger" class="bg-primary text-white border-0" img-top tag="article">
		<h5 class="m-0">{{ article.title }}</h5>
		<div class="d-flex flex-column mb-2">
			<small>{{ article.author }}</small>
			<small>{{ date }}</small>
		</div>
		<b-card-text class="mb-2 " text-tag="span">{{ article.body }}</b-card-text>

		<b-button :to="{ name: 'post', params: { id: article.id } }" class="mt-auto text-white" variant="secondary">Więcej </b-button>
	</b-card>
</template>

<script>
export default {
	name: 'ArticleCard',
	data() {
		return {};
	},
	components: {},
	props: ['article'],
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
	display: flex;
	flex-direction: column;
	padding: map-get($spacers, 3);
}
</style>
