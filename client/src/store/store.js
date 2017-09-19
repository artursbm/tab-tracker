import Vue from 'vue'
import Vuex from 'vuex'

// allows Vue to store all the components
Vue.use(Vuex)

// strict makes impossible to modify the state from the user side
// state are the global states of the app, initially all is false,
// and it will be changed during use of app by a user
// VUEX WORKS LIKE THIS:
// you have actions, mutations and states
// invoke actions from Vue components, like setToken
// it allows application to be easier to follow it
export default new Vuex.Store({
  strict: true,
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      if (token) {
        state.isUserLoggedIn = true
      } else {
        state.isUserLoggedIn = false
      }
    },
    setUser (state, user) {
      state.user = user
    }
  },
  actions: {
    // call the mutation, pass to the mutation whatever is
    // inside the action taken
    setToken ({ commit }, token) {
      // async calls works like this
      commit('setToken', token)
    },
    setUser ({commit}, user) {
      commit('setUser', user)
    }
  }
})
