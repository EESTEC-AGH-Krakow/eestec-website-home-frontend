<template>
    <b-row class="pb-4 pb-sm-5 text-white bg-black" no-gutters>
        <b-col cols="12">
            <h1 class="text-center my-4 my-sm-5 display-4">Blog</h1>
        </b-col>
        <b-col class="mx-auto" cols="11" lg="8" md="10">

        </b-col>
    </b-row>
</template>

<script>
  import Article from './Article'

  export default {
    name: 'Articles',
    data () {
      return {}
    },
    components: {
      Article,
    },
  }
</script>

<style lang="scss" scoped>

</style>
