import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		isLoading: true,
		posts: []
	},
	mutations: {
		loading(state, payload) {
			state.isLoading = payload;
		},
		loadPosts(state, payload) {
			state.posts = payload;
		}
	},
	actions: {
		changeLoading({ commit }) {
			setTimeout(() => {
				commit("loading", false);
			}, 3000);
		},
		getPosts({ commit }) {
			axios({
				method: "get",
				url: `${process.env.VUE_APP_BACKEND_API_HOST_URL}/posts&categories=25`
			})
				.then(res => res.data.map(({ title, date, content }) => ({ title, date, content })))
				.then(posts => commit("loadPosts", posts));
		}
	}
});
