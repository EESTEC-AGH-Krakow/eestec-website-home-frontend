import HTTP from '../http';

export default {
	namespaced: true,
	state: () => ({
		isLoading: true
	}),
	mutations: {
		changeLoading(state, payload) {
			state.isLoading = payload;
		}
	},
	actions: {
		loadPage({ commit }) {
			setTimeout(() => {
				commit('changeLoading', false);
			}, 3000);
		},
		async getPaginationPayload(context, category) {
			const data = await HTTP.getCategoryID(category.name);
			return HTTP.getPayloadWithPagination(data[0].id, category);
		},
		async getPayload(context, name) {
			const data = await HTTP.getCategoryID(name);
			return HTTP.getPayload(data[0].id);
		}
	}
};
