import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mystate: '입력없음'
  },
  getters: {
  },
  mutations: {
    SEND(state, data) {
      state.mystate = data
    }
  },
  actions: {
    send(context,data) {
      context.commit('SEND', data)
    } 
  },
  modules: {
  }
})
