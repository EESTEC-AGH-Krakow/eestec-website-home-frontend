<template>
	<b-carousel :controls="controls" :indicators="indicators" :interval="interval">
		<slot></slot>
	</b-carousel>
</template>

<script>
export default {
	name: 'Carousel',
	props: {
		controls: {
			type: Boolean,
			default: false
		},
		indicators: {
			type: Boolean,
			default: false
		},
		interval: {
			type: Number,
			default: 4000
		}
	}
};
</script>

<style lang="scss" scoped></style>
