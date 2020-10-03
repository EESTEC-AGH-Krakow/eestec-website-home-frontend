<template>
	<b-container>
		<b-row>
			<b-col cols="12" class="d-flex my-3">
				<b-img class="mx-auto" src="https://placeimg.com/640/480/any" fluid></b-img>
			</b-col>
			<b-col cols="12" class="mb-3">
				<h2 class="text-center">Czesc Chlopaki</h2>
			</b-col>
			<b-col cols="12">
				<article class="text-justify">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
					desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
				</article>
			</b-col>
		</b-row>
		<b-row class="d-flex align-items-center mt-5">
			<b-col cols="12" class="mb-3">
				<h2 class="text-center">Czesc pozostale Chlopaki</h2>
			</b-col>
			<b-col cols="1">
				<font-awesome-icon size="3x" icon="chevron-left" @click="previousSlide"></font-awesome-icon>
			</b-col>
			<b-col cols="10">
				<b-carousel ref="project-carousel" v-model="slide" :interval="4000" indicators background="unset" img-width="1024" img-height="480">
					<b-carousel-slide class="slide-height">
						<b-row class="flex-column align-items-center">
							<b-col cols="4" class="mt-4 mb-2">
								<b-img src="https://picsum.photos/480/480/?image=52" fluid> </b-img>
							</b-col>
							<b-col cols="6" class="my-2">
								<h4 class="text-dark">Hello world!</h4>
							</b-col>
							<b-col cols="6">
								<article class="text-justify small text-dark">
									{{ text | truncate(200) }}
								</article>
							</b-col>
						</b-row>
					</b-carousel-slide>

					<b-carousel-slide class="slide-height">
						<b-row class="flex-column align-items-center">
							<b-col cols="4" class="mt-4 mb-2">
								<b-img src="https://picsum.photos/480/480/?image=54" fluid> </b-img>
							</b-col>
							<b-col cols="6" class="my-2">
								<h4 class="text-dark">Hello world!</h4>
							</b-col>
							<b-col cols="6">
								<article class="text-justify small text-dark">
									{{ text | truncate(200) }}
								</article>
							</b-col>
						</b-row>
					</b-carousel-slide>
				</b-carousel>
			</b-col>
			<b-col cols="1">
				<font-awesome-icon size="3x" icon="chevron-right" @click="nextSlide"></font-awesome-icon>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
export default {
	name: 'Project',
	components: {},
	data() {
		return {
			text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
			slide: 0,
			sliding: null
		};
	},
	methods: {
		previousSlide() {
			this.$refs['project-carousel'].prev();
		},
		nextSlide() {
			this.$refs['project-carousel'].next();
		}
	},
	watch: {},
	computed: {}
};
</script>

<style scoped lang="scss">
.slide-height {
	min-height: 22rem;
}
</style>
