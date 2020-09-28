<template>
	<div class="bg-primary background d-flex flex-column position-relative">
		<vue-particles :lineOpacity="0.4" :linesWidth="2" :particleOpacity="0.8" :particleSize="5" :particlesNumber="150"
									 class="position-absolute h-100" clickMode="repulse" color="#fff"/>
		<b-row class="justify-content-center align-items-center flex-fill" no-gutters>
			<b-col class="mx-auto" cols="10" lg="12" md="8">
				<div class="d-flex flex-column align-items-center">
					<img alt="EESTEC AGH Kraków" class="img-fluid" src="@/assets/images/logo_white.png"/>
				</div>
			</b-col>
		</b-row>
	</div>
</template>

<script>
export default {
	name: 'Main',
	data() {
		return {};
	},
	components: {},
};
</script>

<style lang="scss" scoped>
.row {
	pointer-events: none;
}

.background {
	height: 100vh;

	.position-absolute {
		bottom: 0;
		left: 0;
		right: 0;
	}
}
</style>
