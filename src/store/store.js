import Vue from 'vue'
import Vuex from 'vuex'

import commentStore from './comment.store'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    commentStore,
  }
})
