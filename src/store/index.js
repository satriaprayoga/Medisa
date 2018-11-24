import Vue from 'vue'
import Vuex from 'vuex'
import layout from '../modules/layout/store'
import master from '../modules/master/store'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
      layout,
      master
    }
})
