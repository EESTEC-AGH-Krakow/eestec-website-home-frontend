<template>
	<b-row class="pb-4 pb-sm-5 text-black" no-gutters>
		<b-col cols="12">
			<h1 class="text-center my-4 my-sm-5">Projekty</h1>
		</b-col>
		<b-col class="mx-auto" cols="11" lg="8" md="10">
			<b-row>
				<b-col cols="12">
					<Carousel v-bind="carouselOptions">
						<Slide :key="index" class="" v-for="(project, index) in projects">
							<b-card :title="project.name" :img-src="project.image" :img-alt="project.name" img-top tag="article" style="" class="m-2">
							</b-card>
						</Slide>
					</Carousel>
				</b-col>
			</b-row>
		</b-col>
	</b-row>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
	name: "Projects",
	data() {
		return {
			carouselOptions: {
				autoplay: true,
				autoplayHoverPause: true,
				perPage: 3
			},
			projects: [
				{
					name: "Hacknarök 1",
					description: "Wspaniały maraton programistyczny, podczas którego Ty i Twoi dzielni kompani zawalczycie w bitwie o nowy, lepszy świat!",
					image: require("@/assets/images/projects/hacknarok.png"),
					link: "https://hacknarok.eestec.pl/"
				},
				{
					name: "Hacknarök 2",
					description: "Wspaniały maraton programistyczny, podczas którego Ty i Twoi dzielni kompani zawalczycie w bitwie o nowy, lepszy świat!",
					image: require("@/assets/images/projects/hacknarok.png"),
					link: "https://hacknarok.eestec.pl/"
				},
				{
					name: "Hacknarök 3",
					description: "Wspaniały maraton programistyczny, podczas którego Ty i Twoi dzielni kompani zawalczycie w bitwie o nowy, lepszy świat!",
					image: require("@/assets/images/projects/hacknarok.png"),
					link: "https://hacknarok.eestec.pl/"
				},
				{
					name: "Hacknarök 4",
					description: "Wspaniały maraton programistyczny, podczas którego Ty i Twoi dzielni kompani zawalczycie w bitwie o nowy, lepszy świat!",
					image: require("@/assets/images/projects/hacknarok.png"),
					link: "https://hacknarok.eestec.pl/"
				},
				{
					name: "Hacknarök 5",
					description: "Wspaniały maraton programistyczny, podczas którego Ty i Twoi dzielni kompani zawalczycie w bitwie o nowy, lepszy świat!",
					image: require("@/assets/images/projects/hacknarok.png"),
					link: "https://hacknarok.eestec.pl/"
				}
			]
		};
	},
	components: {
		Carousel,
		Slide
	},
	methods: {},
	computed: {},
	watch: {}
};
</script>

<style scoped lang="scss"></style>
