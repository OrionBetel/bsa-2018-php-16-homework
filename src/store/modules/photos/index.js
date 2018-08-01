const state = {
  photos: [
    {
      id: 1,
      albumId: 1,
      imgUrl: 'http://placehold.it/600/92c952',
      title: 'accusamus beatae ad facilis cum similique qui sunt'
    },
    {
      id: 2,
      albumId: 1,
      imgUrl: 'http://placehold.it/600/f66b97',
      title: 'natus nisi omnis corporis facere molestiae rerum in'
    },
    {
      id: 3,
      albumId: 2,
      imgUrl: 'http://placehold.it/600/771796',
      title: 'reprehenderit est deserunt velit ipsam'
    },
    {
      id: 4,
      albumId: 2,
      imgUrl: 'http://placehold.it/600/56a8c2',
      title: 'accusamus ea aliquid et amet sequi nemo'
    },
    {
      id: 5,
      albumId: 3,
      imgUrl: 'http://placehold.it/600/24f355',
      title: 'officia porro iure quia iusto qui ipsa ut modi'
    },
    {
      id: 6,
      albumId: 3,
      imgUrl: 'http://placehold.it/600/b0f7cc',
      title: 'officia delectus consequatur vero aut veniam explicabo molestias'
    },
    {
      id: 7,
      albumId: 4,
      imgUrl: 'http://placehold.it/600/54176f',
      title: 'aut porro officiis laborum odit ea laudantium corporis'
    },
    {
      id: 8,
      albumId: 4,
      imgUrl: 'http://placehold.it/600/51aa97',
      title: 'qui eius qui autem sed'
    }
  ],

  lastId: 8
}

const mutations = {
  ADD_PHOTO (state, photo) {
    state.photos.push({
      id: ++state.lastId,
      albumId: photo.albumId,
      imgUrl: photo.url,
      title: photo.title
    })
  },

  DELETE_PHOTO (state, photoId) {
    const ind = state.photos.findIndex(photo => photo.id === photoId)

    if (ind !== -1) {
      state.photos.splice(ind, 1)
    }
  }
}

const actions = {
  addPhoto ({ state, commit, rootState }, data) {
    return new Promise(resolve => {
      setTimeout(() => {
        commit('ADD_PHOTO', data)
        resolve()
      }, 100)
    })
  },

  deletePhoto ({ commit }, photoId) {
    return new Promise(resolve => {
      setTimeout(() => {
        commit('DELETE_PHOTO', photoId)
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
