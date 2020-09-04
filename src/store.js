import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		isLoading: true,
	},
	mutations: {
		loading(state, payload) {
			state.isLoading = payload;
		},
	},
	actions: {
		changeLoading({commit}) {
			setTimeout(() => {
				commit('loading', false);
			});
		},
	},
});
