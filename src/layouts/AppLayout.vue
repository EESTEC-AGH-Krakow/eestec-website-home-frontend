<template>
	<div>
		<headroom v-if="largerDevice" id="headroom" class="h-0">
			<Navbar />
		</headroom>
		<Navbar v-else />
		<main>
			<Main id="main" />
			<router-view class="pt-4"></router-view>
		</main>
		<footer>
			<Footer id="contact" />
		</footer>
	</div>
</template>

<script>
import { headroom } from 'vue-headroom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Main from '../components/common/Main';

export default {
	name: 'AppLayout',
	components: {
		Main,
		Navbar,
		Footer,
		headroom
	},
	computed: {
		largerDevice() {
			return this.wMD || this.wLG || this.wXL;
		}
	}
};
</script>
