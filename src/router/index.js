import Vue from 'vue'
import Router from 'vue-router'
import ParticularUser from '../components/ParticularUser'
import EditParticularUser from '../components/EditParticularUser'
import UserList from '../components/UserList'
import AddUserForm from '../components/AddUserForm'
import AlbumList from '../components/AlbumList'
import PhotoList from '../components/PhotoList'
import EditAlbum from '../components/EditAlbum'
import AddAlbumForm from '../components/AddAlbumForm'

Vue.use(Router)

export default new Router({
  base: '/',
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/users',
      name: 'home'
    },
    {
      path: '/users',
      component: UserList
    },
    {
      path: '/users/add',
      component: AddUserForm
    },
    {
      path: '/users/:id',
      component: ParticularUser,
      name: 'user'
    },
    {
      path: '/users/:id/edit',
      component: EditParticularUser,
      name: 'editUser'
    },
    {
      path: '/albums',
      component: AlbumList
    },
    {
      path: '/albums/add',
      component: AddAlbumForm
    },
    {
      path: '/albums/:id',
      component: PhotoList,
      name: 'Album'
    },
    {
      path: '/albums/:id/edit',
      component: EditAlbum,
      name: 'EditAlbum'
    }
  ]
})
