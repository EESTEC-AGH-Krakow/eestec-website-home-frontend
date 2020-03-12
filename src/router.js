import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
		{
			path: '/news',
			name: 'news',
			component: () => import(/* webpackChunkName: "news" */ './views/News.vue'),
		},
		{
			path: '/news/:id',
			name: 'post',
			component: () => import(/* webpackChunkName: "article" */ './views/Post.vue'),
		},
	],
})
