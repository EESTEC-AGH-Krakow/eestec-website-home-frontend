<template>
	<b-row class="pb-4 pb-sm-5 text-black" no-gutters>
		<b-col cols="12">
			<h1 class="text-center my-4 my-sm-5">Projekty</h1>
		</b-col>
		<b-col class="mx-auto" cols="11" lg="8" md="10">
			<Carousel3d v-bind="carouselOptions">
				<Slide :key="index" :index="index" class="d-flex" v-for="(project, index) in projects">
					<template slot-scope="{ isCurrent }">
						<b-img :src="project.image" :alt="project.name" fluid @click="isCurrent ? displayModal(project) : null" />
					</template>
				</Slide>
			</Carousel3d>
		</b-col>
		<b-modal id="project-modal" ok-only centered scrollable hide-header button-size="sm">
			<b-container fluid>
				<b-row>
					<b-col cols="12" sm="8" offset-sm="2">
						<h4 class="text-center">{{ currentProject.name }}</h4>

						<b-img fluid :src="currentProject.image" :alt="currentProject.name" />
					</b-col>
					<b-col cols="12">
						<p class="text-center">{{ currentProject.description }}</p>
					</b-col>
				</b-row>
			</b-container>
		</b-modal>
	</b-row>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";

export default {
	name: "Projects",
	data() {
		return {
			currentProject: {},
			carouselOptions: {
				height: 360,
				autoplay: true,
				autoplayTimeout: 5000,
				autoplayHoverPause: true
			},
			projects: [
				{
					name: "Hacknarök",
					description: "Wspaniały maraton programistyczny, podczas którego Ty i Twoi dzielni kompani zawalczycie w bitwie o nowy, lepszy świat!",
					image: require("@/assets/images/projects/hacknarok.png"),
					link: "https://hacknarok.eestec.pl/"
				},
				{
					name: "Soft Skills Academy",
					description: "Wspaniały maraton programistyczny, podczas którego Ty i Twoi dzielni kompani zawalczycie w bitwie o nowy, lepszy świat!",
					image: require("@/assets/images/projects/ssa.png"),
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
		Carousel3d,
		Slide
	},
	methods: {
		displayModal(project) {
			this.currentProject = project;
			this.$bvModal.show("project-modal");
		}
	},
	computed: {},
	watch: {}
};
</script>

<style scoped lang="scss"></style>
