import Vue from 'vue'
import Vuex from 'vuex'
import vue from './modules/Vue.js'
import css from './modules/Css.js'
import js from './modules/Js.js'
import tools from './modules/Tools.js'
Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        vue,
        css,
        js,
        tools
    }
});