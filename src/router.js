import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home';
import store from './store/index.store';

Vue.use(Router);

const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/news',
			name: 'news',
			component: () => import(/* webpackChunkName: "news" */ './views/News.vue')
		},
		{
			path: '/news/:id',
			name: 'post',
			component: () => import(/* webpackChunkName: "post" */ './views/Post.vue')
		},
		{
			path: '/gallery',
			name: 'gallery',
			component: () => import(/* webpackChunkName: "gallery" */ './views/Gallery.vue')
		},
		{
			path: '/gallery/:id',
			name: 'album',
			component: () => import(/* webpackChunkName: "album" */ './views/Album.vue')
		},
		{
			path: '/project/:id',
			name: 'project',
			component: () => import(/* webpackChunkName: "gallery" */ './views/Project.vue')
		}
	]
});

router.beforeEach(async () => {
	await store.dispatch('general/loadPage');
});

export default router;
