<template>
	<b-card body-class="d-flex flex-column align-items-center">
		<div>
			<b-card-img-lazy :alt="image.alt" :src="image.src" />
		</div>
		<b-card-title class="text-center my-3" title-tag="h2">{{ title }}</b-card-title>
		<slot></slot>
		<div class="d-flex justify-content-end align-self-end">
			<b-button>więcej</b-button>
		</div>
	</b-card>
</template>

<script>
export default {
	name: 'CardLayout',
	props: {
		image: {
			required: true,
			type: Object
		},
		title: {
			required: true,
			type: String
		}
	}
};
</script>

<style lang="scss" scoped></style>
