<template>
	<b-row class="pb-4 pb-sm-5" no-gutters>
		<b-col cols="12">
			<h2 class="text-center my-4 my-sm-5">{{ title }}</h2>
		</b-col>
		<b-col class="mx-auto" cols="11" md="10" xl="8">
			<slot></slot>
		</b-col>
	</b-row>
</template>

<script>
export default {
	name: 'Layout',
	components: {},
	data() {
		return {};
	},
	props: {
		title: {
			required: true,
			type: String,
		},
	},
	methods: {},
	computed: {},
	watch: {}
};
</script>

<style lang="scss" scoped></style>
