import Vue from 'vue';
import Vuex from 'vuex';
import general from './modules/general.store';
import news from './modules/news.store';
import projects from './modules/projects.store';
import tripBlog from './modules/tripBlog.store';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		general,
		news,
		projects,
		tripBlog
	}
});
