import axios from "axios";

export default {
	state: () => ({
		isLoading: true
	}),
	mutations: {
		loading(state, payload) {
			state.isLoading = payload;
		}
	},
	actions: {
		changeLoading({ commit }) {
			setTimeout(() => {
				commit("loading", false);
			}, 3000);
		},
		async getPaginationPayload(context, category) {
			const { data } = await axios({
				method: "GET",
				url: `${process.env.VUE_APP_BACKEND_API_HOST_URL}/categories&slug=${category.name}`
			});
			return axios({
				method: "GET",
				url: `${process.env.VUE_APP_BACKEND_API_HOST_URL}/posts&categories=${data[0].id}&per_page=${category.postsPerPage}&page=${category.currentPage}`
			});
		},
		async getPayload(context, name) {
			const { data } = await axios({
				method: "GET",
				url: `${process.env.VUE_APP_BACKEND_API_HOST_URL}/categories&slug=${name}`
			});
			return axios({
				method: "GET",
				url: `${process.env.VUE_APP_BACKEND_API_HOST_URL}/posts&categories=${data[0].id}`
			});
		}
	}
};
