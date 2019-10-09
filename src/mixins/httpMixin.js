import axios from 'axios'
import Vue from 'vue'
import articles from '@/../mock/articles'

export default (url, domId) => ({
	data () {
		return {
			article: {},
		}
	},
	mounted () {
		if (process.env.NODE_ENV === 'development') {
			this.article = articles[Math.floor(Math.random() * articles.length)]
			const content = Vue.compile(`<div>${this.article.body}</div>`)
			const vm = new Vue({
				render: content.render,
				staticRenderFns: content.staticRenderFns,
			})
			vm.$mount(domId)
		} else axios.get(url).then(res => {
			this.article = res.data
			const content = Vue.compile(`<div>${res.data.body}</div>`)
			const vm = new Vue({
				render: content.render,
				staticRenderFns: content.staticRenderFns,
			})
			vm.$mount(domId)
		}).catch(e => {
			throw new Error(e)
		})
	},
})
