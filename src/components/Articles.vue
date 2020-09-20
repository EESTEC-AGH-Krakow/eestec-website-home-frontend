<template>
	<div>
		<b-row>
			<b-col :key="index" class="d-flex my-2" cols="12" sm="6" v-for="(article, index) in articles">
				<Article :article="article" />
			</b-col>
		</b-row>
		<b-row>
			<b-col class="d-flex mt-4 mt-sm-5" cols="12" v-if="!hideButton">
				<b-button :to="{ name: 'news' }" class="mx-auto" variant="primary">Wszystkie posty</b-button>
			</b-col>
		</b-row>
	</div>
</template>

<script>
import Article from './Article';

export default {
	name: 'Articles',
	data() {
		return {};
	},
	components: {
		Article
	},
	props: {
		articles: Array,
		hideButton: {
			type: Boolean,
			default: false
		}
	}
};
</script>

<style lang="scss" scoped></style>
