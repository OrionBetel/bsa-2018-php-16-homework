import Vue from 'vue'

const state = {
  albums: [
    {
      id: 1,
      title: 'quidem molestiae',
      userId: 1,
      preview: 'http://placehold.it/150/92c952'
    },
    {
      id: 2,
      title: 'sunt qui excepturi',
      userId: 1,
      preview: 'http://placehold.it/150/771796'
    },
    {
      id: 3,
      title: 'omnis laborum',
      userId: 2,
      preview: 'http://placehold.it/150/24f355'
    },
    {
      id: 4,
      title: 'non esse culpa',
      userId: 2,
      preview: 'http://placehold.it/150/d32776'
    }
  ],

  lastId: 4
}

const mutations = {
  ADD_ALBUM (state, album) {
    state.albums.push({
      id: state.lastId += 1,
      title: album.title,
      userId: album.userId,
      preview: album.preview
    })
  },

  UPDATE_ALBUM (state, { albumId, data }) {
    const ind = state.albums.findIndex(album => album.id === albumId)

    if (ind !== -1) {
      const updatedAlbum = {
        id: albumId,
        title: data.title,
        userId: data.userId,
        preview: data.preview
      }

      Vue.set(state.albums, ind, updatedAlbum)
    }
  },

  DELETE_ALBUM (state, albumId) {
    const ind = state.albums.findIndex(album => album.id === albumId)

    if (ind !== -1) {
      state.albums.splice(ind, 1)
    }
  }
}

const actions = {
  addAlbum ({ state, commit, rootState }, data) {
    return new Promise(resolve => {
      setTimeout(() => {
        commit('ADD_ALBUM', data)
        resolve()
      }, 100)
    })
  },

  updateAlbum ({ commit }, data) {
    return new Promise(resolve => {
      setTimeout(() => {
        commit('UPDATE_ALBUM', data)
        resolve()
      }, 100)
    })
  },

  deleteAlbum ({ commit }, userId) {
    return new Promise(resolve => {
      setTimeout(() => {
        commit('DELETE_ALBUM', userId)
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
