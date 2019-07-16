<template>
    <div class="bg-red background d-flex flex-column position-relative">
        <vue-particles
                :linesWidth="2"
                :particleOpacity="0.7"
                :particleSize="5"
                class="position-absolute h-100"
                clickMode="repulse"
                color="#fff"
                :particlesNumber="150"
        ></vue-particles>
        <b-row class="justify-content-center align-items-center flex-fill" no-gutters>
            <b-col class="mx-auto" cols="10" lg="12" md="8">
                <div class="d-flex flex-column align-items-center">
                    <img alt="EESTEC AGH Kraków" class="img-fluid" src="@/assets/images/logo_white.png"/>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
  export default {
    name: 'Main',
    data () {
      return {}
    },
    components: {},
  }
</script>

<style lang="scss" scoped>
    .row {
        pointer-events: none;
    }

    .background {
        height: 100vh;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-attachment: fixed;


        .position-absolute {
            bottom: 0;
            left: 0;
            right: 0;

            .apply {
                @include media-breakpoint-up(md) {
                    font-size: 1.5rem;
                }
            }
        }
    }
</style>
