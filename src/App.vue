<template>
	<b-container class="p-0" fluid id="app">
		<transition mode="out-in" name="fade">
			<component :is="view"></component>
		</transition>
	</b-container>
</template>

<script>
import Loading from './components/Loading';
import AppLayout from './components/AppLayout';
import {mapActions, mapState} from 'vuex';

export default {
	name: 'app',
	components: {
		Loading,
		AppLayout,
	},
	mounted() {
		this.changeLoading();
	},
	methods: {
		...mapActions(['changeLoading']),
	},
	computed: {
		...mapState(['isLoading']),
		view() {
			return this.isLoading ? 'Loading' : 'AppLayout';
		},
	},
};
</script>

<style lang="scss">
@import url('assets/fonts/Elegant/elegant.scss');
@import url('https://fonts.googleapis.com/css?family=Montserrat|Roboto&display=swap');

* {
	box-sizing: border-box;
	@extend .second-font;
}

html, body {
	margin: 0;
	padding: 0;
	font-size: 30px;
}

#app {
	display: flex;
	min-height: 100vh;
	flex-direction: column;
	position: relative;
}

main {
	flex: 1 0 auto;
}

a {
	&:hover {
		text-decoration: none;
	}
}

@for $i from 1 through 6 {
	h#{$i} {
		@extend .font-weight-bold;
	}
}

.flip-card__top, .flip-card__bottom, .flip-card__back, .flip-card__back-bottom {
	&, &::before {
		width: 5em !important;
	}
}

.card {
	&, &-img-top {
		@extend .rounded-0;
	}
}

.modal-content {
	@extend .rounded-0;
}
</style>
