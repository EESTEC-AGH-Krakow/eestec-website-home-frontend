<template>
	<b-container class="p-0" fluid id="app">
		<transition mode="out-in" name="fade">
			<component :is="view"></component>
		</transition>
	</b-container>
</template>

<script>
import Loading from './components/common/Loading';
import AppLayout from './layouts/AppLayout';
import {mapState} from 'vuex';

export default {
	name: 'app',
	components: {
		Loading,
		AppLayout
	},
	computed: {
		...mapState('general', ['isLoading']),
		view() {
			return this.isLoading ? 'Loading' : 'AppLayout';
		}
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
