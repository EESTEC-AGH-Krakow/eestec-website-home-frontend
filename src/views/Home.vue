<template>
	<b-container fluid>
		<AboutUs id="about-us" />
		<Articles id="articles" :articles="articles" />
	</b-container>
</template>

<script>
import Articles from '../components/home/Articles';
import AboutUs from '../components/home/AboutUs';
import articles from '@/../mock/truncatedArticles';

export default {
	name: 'Home',
	data() {
		return {
			articles
		};
	},
	components: {
		AboutUs,
		Articles
	}
};
</script>

<style lang="scss" scoped></style>
