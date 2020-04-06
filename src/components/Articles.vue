<template>
	<Layout title="Blog">
		<b-row>
			<b-col :key="article.id" class="d-flex my-2" cols="12" sm="6" v-for="article in articles">
				<ArticleCard :article="article" />
			</b-col>
		</b-row>
		<b-row>
			<b-col class="d-flex mt-4 mt-sm-5" cols="12" v-if="!hideButton">
				<b-button :to="{ name: 'blog' }" class="mx-auto" variant="primary">Wszystkie posty</b-button>
			</b-col>
		</b-row>
	</Layout>
</template>

<script>
import ArticleCard from "./ArticleCard";
import Layout from "./Layout";

export default {
	name: "Articles",
	data() {
		return {};
	},
	components: {
		Layout,
		ArticleCard
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
