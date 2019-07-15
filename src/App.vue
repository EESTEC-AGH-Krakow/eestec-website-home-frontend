<template>
    <b-container class="p-0" fluid id="app">
        <header>
            <Aside/>
        </header>
        <main>
            <Main id="main"/>
            <AboutProject id="about-project"/>
            <Gallery id="gallery"/>
            <AboutUs id="about-us"/>
            <Place id="place"/>
        </main>
        <footer>
            <Contact id="contact"/>
        </footer>
    </b-container>
</template>

<script>
  import Main from './components/Main'
  import Aside from './components/Aside'
  import AboutProject from './components/AboutProject'
  import Gallery from './components/Gallery'
  import AboutUs from './components/AboutUs'
  import Contact from './components/Contact'
  import Place from './components/Place'

  export default {
    name: 'app',
    components: {
      Aside,
      Main,
      AboutProject,
      Gallery,
      AboutUs,
      Contact,
      Place,
    },
  }
</script>

<style lang="scss">
    @import url('assets/fonts/Inter/inter.scss');
    @import url('assets/fonts/Elegant/elegant.scss');
    @import url('assets/fonts/Cinzel/cinzel.scss');

    * {
        box-sizing: border-box;
        @extend .primary-font;
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

    .btn {
        @extend .rounded-0, .font-weight-bold, .bg-transparent, .border, .border-white, .px-4, .py-2;
        border-width: 5px !important;

        &:hover {
            @extend .bg-white, .text-black;
        }

        &:focus {
            box-shadow: none !important;
        }
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
