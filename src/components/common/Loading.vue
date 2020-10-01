<template>
	<SVGLoading class="loading-svg"></SVGLoading>
</template>

<script>
import SVGLoading from '@/assets/icons/EESTEC-S.svg';

export default {
	name: 'Loading',
	data() {
		return {};
	},
	components: {
		SVGLoading,
	},
};
</script>

<style lang="scss" scoped>
.loading-svg {
	width: 100vw;
	height: 100vh;

	/deep/ {
		.sinus {
			fill: transparent;
		}

		.sinus-rect {
			animation: loading-sinus-rect 1.5s ease-in-out infinite;
			fill: $red;
		}
	}
}
</style>
