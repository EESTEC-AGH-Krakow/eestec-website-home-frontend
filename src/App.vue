<template>
	<b-container class="p-0" fluid id="app">
		<transition mode="out-in" name="fade">
			<component :is="view"></component>
		</transition>
	</b-container>
</template>

<script>
import Loading from './components/Loading';
import AppLayout from './layouts/AppLayout';
import {mapActions, mapState} from 'vuex';

export default {
	name: 'app',
	components: {
		Loading,
		AppLayout,
	},
	mounted() {
		this.loadPage();
	},
	methods: {
		...mapActions(['loadPage']),
	},
	computed: {
		...mapState(['isLoading']),
		view() {
			return this.isLoading ? 'Loading' : 'AppLayout';
		},
	}
};
</script>

<style lang="scss">
html,
body {
	font-size: 20px;
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
</style>
