<template>
    <div class="position-absolute">
        <SVGLoading></SVGLoading>
    </div>
</template>

<script>
  import SVGLoading from '@/assets/icons/EESTEC-S.svg'

  export default {
    name: 'Loading',
    data () {
      return {}
    },
    components: {
      SVGLoading,
    },
  }
</script>

<style lang="scss" scoped>

</style>
