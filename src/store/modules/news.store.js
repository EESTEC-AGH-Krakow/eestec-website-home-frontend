import categoryStateInit from '../state.init';

export default {
	namespaced: true,
	state: {
		category: categoryStateInit('aktualnosci', 2, 1),
		payload: []
	},
	mutations: {
		loadPayload(state, payload) {
			state.payload = payload;
		}
	},
	actions: {
		async getPaginationPayload(context) {
			const data = await context.dispatch('getPaginationPayload', context.state.category, { root: true });
			context.commit('loadPayload', data);
		}
	}
};
