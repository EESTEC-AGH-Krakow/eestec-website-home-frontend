<template>
	<div>
		<headroom v-if="largerDevice" id="headroom">
			<Navbar />
		</headroom>
		<Navbar v-else />
		<main>
			<Main id="main" />
			<router-view></router-view>
		</main>
		<footer>
			<Contact id="contact" />
		</footer>
	</div>
</template>

<script>
import { headroom } from 'vue-headroom';
import Navbar from '../components/common/Header';
import Contact from '../components/common/Footer';
import Main from '../components/common/Main';

export default {
	name: 'AppLayout',
	components: {
		Main,
		Navbar,
		Contact,
		headroom
	},
	computed: {
		largerDevice() {
			return this.wMD || this.wLG || this.wXL;
		}
	}
};
</script>
