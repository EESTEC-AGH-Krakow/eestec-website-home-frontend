import axios from 'axios';

const HTTP = {
	async getCategoryID(slug) {
		return axios({
			method: 'GET',
			url: `${process.env.VUE_APP_BACKEND_API_HOST_URL}/categories&slug=${slug}`
		}).data;
	},
	async getPayload(categoriesSlug) {
		return axios({
			method: 'GET',
			url: `${process.env.VUE_APP_BACKEND_API_HOST_URL}/posts&categories=${categoriesSlug}`
		});
	},
	async getPayloadWithPagination(categoriesSlug, pagination) {
		axios({
			method: 'GET',
			url: `${process.env.VUE_APP_BACKEND_API_HOST_URL}/posts&categories=${categoriesSlug}&per_page=${pagination.postsPerPage}&page=${pagination.currentPage}`
		});
	}
};

export default HTTP;
