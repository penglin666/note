import Vue from 'vue'
import App from './App'
//引入全局组件toast
import toast from 'components/toast.vue'
//引入vuex
import store from './store'
//把vuex定义成全局组件
Vue.prototype.$store = store
Vue.config.productionTip = false
Vue.component('toast',toast)

App.mpType = 'app'

const app = new Vue({
    ...App,
	//挂载
	    store
})
app.$mount()
