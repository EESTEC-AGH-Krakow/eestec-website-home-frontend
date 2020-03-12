<template>
	<b-row class="pb-4 pb-sm-5 text-black"  no-gutters>
		<b-col cols="12">
			<h1 class="text-center my-4 my-sm-5">Projekty</h1>
		</b-col>
		<b-col class="mx-auto" cols="11" lg="8" md="10">
			<b-row>
				<b-col :key="article.id" class="d-flex my-2" cols="12" sm="6" v-for="article in articles">
<!--					<ArticleCard :article="article" />-->
				</b-col>
			</b-row>
		</b-col>
	</b-row>
</template>

<script>
    export default {
        name: "Projects",
        data() {
            return {}
        },
        components: {},
        methods: {},
        computed: {},
        watch: {}
    }
</script>

<style scoped lang="scss">

</style>
