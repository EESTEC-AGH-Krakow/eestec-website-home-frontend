<template>
	<b-container fluid>
		<ComponentLayout :image="aboutUs.image" :title="aboutUs.title" card-layout>
			<AboutUs id="about-us" />
		</ComponentLayout>
		<ComponentLayout :title="news.title" class="bg-white">
			<Articles :articles="articles" id="articles" />
		</ComponentLayout>
	</b-container>
</template>

<script>
import Articles from '../components/Articles';
import AboutUs from '../components/AboutUs';
import articles from '@/../mock/truncatedArticles';
import ComponentLayout from '../layouts/ComponentLayout';

export default {
	name: 'Home',
	data() {
		return {
			aboutUs: {
				image: {
					src: 'https://dummyimage.com/600x400/b0b0b0/fff',
					alt: 'image'
				},
				title: 'O nas'
			},
			news: {
				title: 'Aktualności'
			},
			articles
		};
	},
	components: {
		ComponentLayout,
		AboutUs,
		Articles
	}
};
</script>

<style lang="scss" scoped></style>
