import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import nav from './modules/nav'

export default new Vuex.Store({
    modules: {
		nav,
	},
})