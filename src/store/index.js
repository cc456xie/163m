import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id: 0,
    avatar: ''
  },
  mutations: {
    setId (state, params) {
      state.id = params
    },
    setAvatar (state, params) {
      state.avatar = params
    }
  },
  actions: {
    ActionId ({ commit }, params) { commit('setId', params) },
    ActionAvatar ({ commit }, params) { commit('setAvatar', params) }
  },
  modules: {
  },
  getters: {
    userId: (state) => {
      return state.id
    },
    avatarUrl: (state) => {
      return state.avatar
    }
  }
})
