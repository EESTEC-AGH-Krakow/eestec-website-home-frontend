<template>
    <b-container class="p-0" fluid id="app">
        <headroom class="h-0" id="headroom" v-if="largerDevice">
            <Navbar/>
        </headroom>
        <Navbar v-else/>
        <main>
            <Main id="main"/>
            <!--            <AboutProject id="about-project"/>-->
            <AboutUs id="about-us"/>
            <!--            <Gallery id="gallery"/>-->
            <Place id="place"/>
        </main>
        <footer>
            <Contact id="contact"/>
        </footer>
    </b-container>
</template>

<script>
  import { headroom } from 'vue-headroom'
  import Main from './components/Main'
  import Navbar from './components/Navbar'
  // import AboutProject from './components/AboutProject'
  // import Gallery from './components/Gallery'
  import AboutUs from './components/AboutUs'
  import Contact from './components/Contact'
  import Place from './components/Place'

  export default {
    name: 'app',
    components: {
      Navbar,
      Main,
      // AboutProject,
      // Gallery,
      AboutUs,
      Contact,
      Place,
      headroom,
    },
    computed: {
      largerDevice () {
        return this.wMD || this.wLG || this.wXL
      },
    },
  }
</script>

<style lang="scss">
    /*@import url('assets/fonts/Inter/inter.scss');*/
    @import url('assets/fonts/Elegant/elegant.scss');
    /*@import url('assets/fonts/Cinzel/cinzel.scss');*/
    @import url('https://fonts.googleapis.com/css?family=Montserrat|Roboto&display=swap');

    * {
        box-sizing: border-box;
        @extend .second-font;
    }

    html, body {
        margin: 0;
        padding: 0;
        font-size: 30px;
    }

    #app {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
        position: relative;
    }

    main {
        flex: 1 0 auto;
    }

    a {
        &:hover {
            text-decoration: none;
        }
    }

    @for $i from 1 through 6 {
        h#{$i} {
            @extend .font-weight-bold;
        }
    }

    .flip-card__top, .flip-card__bottom, .flip-card__back, .flip-card__back-bottom {
        &, &::before {
            width: 5em !important;
        }
    }
</style>
