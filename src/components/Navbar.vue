<template>
    <header :class="{'position-fixed w-100 h-100 overflow-auto': wXS || wSM, 'darken-background': slided && expanded, 'bg-transparent': !(slided && expanded)}" class="m-0 p-0 transition-fast">
        <b-navbar-toggle :aria-expanded="showCollapse ? 'true' : 'false'" @click="showCollapse = !showCollapse" class="d-md-none" target="navbar-collapse">
            <font-awesome-icon :class="{'text-white': slided && showCollapse}" class="transition-fast" icon="bars"></font-awesome-icon>
        </b-navbar-toggle>
        <b-navbar class="d-flex transition-fast pb-2" ref="navbar" toggleable="md">
            <b-collapse id="navbar-collapse" is-nav v-model="showCollapse">
                <b-row class="flex-fill flex-column flex-md-row" no-gutters>
                    <transition name="fade-scale">
                        <b-col :class="{'d-flex align-items-center': slided}" class="mx-auto" cols="8" md="2" v-show="slided" xl="1">
                            <b-navbar-brand class="d-flex mx-auto mr-md-3" href="#">
                                <img :class="{'w-75': !wXL}" alt="logo" class="img-fluid mx-auto" src="@/assets/images/logo.png">
                            </b-navbar-brand>
                        </b-col>
                    </transition>
                    <b-col class="d-flex mx-auto" cols="12" md="10" xl="11">

                        <b-navbar-nav align="between" class="flex-fill align-items-center d-flex flex-column flex-md-row" fill>
                            <b-nav-item :class="{ light: slided }" :key="index" @click="scrollTo(link)" class="text-center font-weight-bold" href="#" v-for="(link, index) in links"><span class="transition-fast">{{ link.name }}</span></b-nav-item>
                        </b-navbar-nav>

                    </b-col>
                </b-row>
            </b-collapse>

        </b-navbar>
    </header>
</template>

<script>

  export default {
    name: 'Navbar',
    data () {
      return {
        showCollapse: false,
        scrollY: 0,
        mainHeight: 0,
        clientHeight: 0,
        links: [
          {
            name: 'start',
            href: 'main',
          },
          {
            name: 'o nas',
            href: 'about-us',
          },
          {
            name: 'jak dojechać',
            href: 'place',
          },
          {
            name: 'kontakt',
            href: 'contact',
          },
        ],
      }
    },
    mounted () {
      window.addEventListener('scroll', () => {
        this.scrollY = window.scrollY
      })
      window.addEventListener('resize', () => {
        this.mainHeight = window.innerHeight
        this.clientHeight = this.$refs.navbar ? this.$refs.navbar.clientHeight : this.clientHeight
      })
      let event = new Event('resize')
      window.dispatchEvent(event)
      event = new Event('scroll')
      window.dispatchEvent(event)
    },
    methods: {
      scrollTo (link) {
        this.$scrollTo(`#${link.href}`, 700)
        this.clickMenu = false
      },
    },
    computed: {
      slided () {
        return this.scrollY > this.mainHeight - this.clientHeight
      },
      expanded () {
        return this.showCollapse || this.wMD || this.wLG || this.wXL
      },
    },
    watch: {
      showCollapse () {
        document.querySelector('body').style.overflow = this.showCollapse && (this.wXS || this.wSM) ? 'hidden' : 'auto'
      },
    },
  }
</script>

<style lang="scss" scoped>
    .position-fixed {
        z-index: $navbar-index;
    }

    .h-0 {
        height: 0 !important;
    }

    .darken-background {
        background: transparentize($black, 0.4);
    }

    .nav-item {
        * {
            color: $gray-800;
        }

        &:hover * {
            color: lighten($gray-800, 30%);
        }

        &.light {
            * {
                color: $gray-300;

            }

            &:hover * {
                color: lighten($gray-300, 15%);
            }
        }
    }
</style>
