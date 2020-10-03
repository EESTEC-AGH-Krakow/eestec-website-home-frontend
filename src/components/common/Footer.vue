<template>
	<Layout title="Kontakt">
		<b-row no-gutters>
			<b-col class="d-flex" cols="12" sm="6">
				<b-link class=" d-flex align-items-center" href="mailto:wspolpraca@eestec.pl" target="_blank">
					<font-awesome-icon icon="envelope"></font-awesome-icon>
					<span class="font-weight-bold ml-2">wspolpraca@eestec.pl</span>
				</b-link>
			</b-col>
			<b-col class="d-flex mt-2 mt-sm-0" cols="12" sm="6">
				<b-link class="ml-sm-auto d-flex align-items-center" href="https://www.facebook.com/EESTEC.AGH.Krakow/" target="_blank">
					<font-awesome-icon :icon="['fab', 'facebook']"></font-awesome-icon>
					<span class="font-weight-bold ml-2">EESTEC AGH KRAKÓW</span>
				</b-link>
			</b-col>
		</b-row>
	</Layout>
</template>

<script>
import Layout from '../../layouts/ComponentLayout';

export default {
	name: 'Footer',
	components: { Layout },
	data() {
		return {
			publicPath: process.env.BASE_URL
		};
	}
};
</script>

<style lang="scss" scoped>
.copyright {
	font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
}
</style>
