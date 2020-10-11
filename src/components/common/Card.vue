<template>
	<b-card body-class="d-flex flex-column align-items-center p-0">
		<div class="mt-md-4 mx-md-4" v-if="image">
			<b-card-img-lazy :alt="image.alt" :src="image.src" />
		</div>
		<b-card-body class="p-2 py-3 p-md-4">
			<b-card-title class="text-center" title-tag="h2" v-if="title">{{ title }}</b-card-title>
			<slot></slot>
			<div class="d-flex justify-content-end align-self-end" v-if="showMore">
				<b-button>więcej</b-button>
			</div>
		</b-card-body>
	</b-card>
</template>

<script>
export default {
	name: 'Card',
	props: {
		image: {
			type: Object,
			required: false
		},
		title: {
			type: String,
			required: false
		},
		showMore: {
			type: Boolean,
			default: false
		}
	}
};
</script>

<style lang="scss" scoped></style>
