import Vue from 'vue'
import Router from 'vue-router'
import UserList from '../components/UserList'
import AlbumList from '../components/AlbumsList'

Vue.use(Router)

export default new Router({
  base: '/',
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/users'
    },
    {
      path: '/users',
      component: UserList
    },
    {
      path: '/albums',
      component: AlbumList
    }
  ]
})
