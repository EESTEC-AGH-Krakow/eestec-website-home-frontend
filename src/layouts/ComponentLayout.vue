<template>
	<b-row class="pb-4 pb-sm-5">
		<b-col cols="12" v-if="title && !cardLayout">
			<h2 class="text-center my-4 my-sm-5">{{ title }}</h2>
		</b-col>
		<b-col class="mx-auto" cols="11" md="10" xl="8">
			<Card :image="image" :title="title" show-more v-if="cardLayout">
				<slot></slot>
			</Card>
			<slot v-else></slot>
		</b-col>
	</b-row>
</template>

<script>
import Card from '../components/Card';

export default {
	name: 'ComponentLayout',
	components: {
		Card
	},
	data() {
		return {};
	},
	props: {
		title: {
			type: String,
			required: true
		},
		image: {
			type: Object,
			required: false
		},
		cardLayout: {
			type: Boolean,
			default: false
		}
	},
	methods: {},
	computed: {},
	watch: {}
};
</script>

<style lang="scss" scoped></style>
