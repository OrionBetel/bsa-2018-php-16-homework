import Vue from 'vue'

let state = {
  users: null
}

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => {
    state.users = json.map(user => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        avatar: 'http://avatar.cmex29.ru/pic/0y' + user.id + '.gif'
      }
    })
  })

let lastId = 10

const mutations = {
  ADD_USER (state, user) {
    state.users.push({
      id: ++lastId,
      name: user.name,
      email: user.email,
      avatar: user.avatar
    })
  },

  UPDATE_USER (state, { userId, data }) {
    const ind = state.users.findIndex(user => user.id === userId)

    if (ind !== -1) {
      const updatedUser = {
        id: userId,
        name: data.name,
        email: data.email,
        avatar: data.avatar
      }

      Vue.set(state.users, ind, updatedUser)
    }
  },

  DELETE_USER (state, userId) {
    const ind = state.users.findIndex(user => user.id === userId)

    if (ind !== -1) {
      state.users.splice(ind, 1)
    }
  }
}

const actions = {
  addUser ({ state, commit, rootState }, data) {
    return new Promise(resolve => {
      setTimeout(() => {
        commit('ADD_USER', data)
        resolve()
      }, 100)
    })
  },

  updateUser ({ commit }, data) {
    return new Promise(resolve => {
      setTimeout(() => {
        commit('UPDATE_USER', data)
        resolve()
      }, 100)
    })
  },

  deleteUser ({ commit }, userId) {
    return new Promise(resolve => {
      setTimeout(() => {
        commit('DELETE_USER', userId)
        resolve()
      }, 100)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
