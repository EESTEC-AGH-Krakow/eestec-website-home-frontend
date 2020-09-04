<template>
	<b-container class="p-0" fluid id="app">
		<Loading v-if="isLoading"></Loading>
		<template v-else>
			<headroom class="h-0" id="headroom" v-if="largerDevice">
				<Navbar/>
			</headroom>
			<Navbar v-else/>
			<main>
				<Main id="main"/>
				<router-view></router-view>
			</main>
			<footer>
				<Contact id="contact"/>
			</footer>
		</template>
	</b-container>
</template>

<script>
import {headroom} from 'vue-headroom';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Main from './components/Main';
import Loading from './components/Loading';
import {mapState, mapActions} from 'vuex';

export default {
	name: 'app',
	components: {
		Main,
		Navbar,
		Contact,
		headroom,
		Loading,
	},
	mounted() {

	},
	methods: {
		...mapActions(['changeLoading'])
	},
	computed: {
		largerDevice() {
			return this.wMD || this.wLG || this.wXL;
		},
		...mapState(['isLoading'])
	},
};
</script>

<style lang="scss">
/*@import url('assets/fonts/Inter/inter.scss');*/
@import url('assets/fonts/Elegant/elegant.scss');
/*@import url('assets/fonts/Cinzel/cinzel.scss');*/
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
