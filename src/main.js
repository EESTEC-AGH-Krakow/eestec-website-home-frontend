import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VueScrollTo from 'vue-scrollto';
import VueParticles from 'vue-particles';
import VueMediaQueryMixin from 'vue-media-query-mixin';
import store from './store/index.store';
import router from './router';
import VueTruncate from 'vue-truncate-filter';

library.add(fas, fab);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VueMediaQueryMixin, {
	framework: 'bootstrap'
});
Vue.use(VueTruncate);
Vue.use(BootstrapVue);
Vue.use(VueParticles);
Vue.use(VueScrollTo, {
	container: 'body',
	duration: 700,
	easing: 'ease-in-out',
	force: true,
	y: true,
	x: false
});

Vue.config.productionTip = false;

new Vue({
	store,
	router,
	render: h => h(App)
}).$mount('#app');
