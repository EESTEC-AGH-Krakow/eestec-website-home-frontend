import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { L, LMap, LMarker, LTileLayer, LTooltip } from 'vue2-leaflet'
import 'leaflet/dist/leaflet.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueScrollTo from 'vue-scrollto'
import VueParticles from 'vue-particles'
import VueMediaQueryMixin from 'vue-media-query-mixin'
import store from './store'

// this part resolve an issue where the markers would not appear
delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
})

library.add(fas, fab)

Vue.component('l-map', LMap)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('l-tile-layer', LTileLayer)
Vue.component('l-marker', LMarker)
Vue.component('l-tooltip', LTooltip)

Vue.use(VueMediaQueryMixin, {
  framework: 'bootstrap',
})
Vue.use(BootstrapVue)
Vue.use(VueParticles)
Vue.use(VueScrollTo, {
  container: 'body',
  duration: 700,
  easing: 'ease-in-out',
  force: true,
  y: true,
  x: false,
})

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
