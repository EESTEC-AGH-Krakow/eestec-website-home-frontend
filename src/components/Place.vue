<template>
    <b-row :style="{background: `url(${require('@/assets/images/background.png')})`}" class="text-white background" no-gutters>
        <b-col cols="12">
            <h1 class="text-center my-4 my-sm-5 display-4">Znajdź nas</h1>
        </b-col>
        <b-col class="mb-4 mb-sm-5 mb-lg-0" cols="10" lg="5" offset="1" offset-lg="1" xl="4">
            <l-map :center="center"
                   :zoom="zoom"
                   @update:center="centerUpdated"
                   @update:zoom="zoomUpdated"
                   class="map w-100">
                <l-tile-layer :url="url"></l-tile-layer>
                <l-marker :lat-lng="placeMarker">
                    <l-tooltip class="font-weight-bold second-font">biuro EESTEC AGH Kraków<br>
                        Reymonta 17<br>
                        30-059, Kraków
                    </l-tooltip>
                </l-marker>
            </l-map>
        </b-col>
        <b-col class="d-flex flex-column justify-content-around" cols="10" lg="4" offset="1" offset-lg="1" xl="5">
            <b-row class="mb-3" no-gutters>
                <b-col cols="2">
                    <font-awesome-icon icon="map-marker-alt" size="lg"></font-awesome-icon>
                </b-col>
                <b-col>
                    <span class="second-font">Dom Studencki ALFA</span><br>
                    <span class="second-font">Reymonta 17</span>
                </b-col>
            </b-row>
        </b-col>
        <b-col class="mx-auto" cols="11" lg="8" md="10">
            <p class="text-justify my-4 my-sm-5">
                Nasze biuro mieści się w budynku domu studenckiego ALFA na terenie AGH.
            </p>
        </b-col>
    </b-row>
</template>

<script>

  export default {
    name: 'Place',
    data () {
      return {
        zoom: 16,
        center: [50.065603, 19.916682],
        placeMarker: [50.065603, 19.916682],
        url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      }
    },
    methods: {
      zoomUpdated (zoom) {
        this.zoom = zoom
      },
      centerUpdated (center) {
        this.center = center
      },
      boundsUpdated (bounds) {
        this.bounds = bounds
      },
    },
    computed: {
      buses () {
        return this.busArray.join(', ')
      },
    },
  }
</script>

<style lang="scss" scoped>
    .map {
        height: 15rem;
    }

    .img-fluid {
        transform: rotate(180deg);
    }

    .background {
        @include background();
    }
</style>
