import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/',
        name: 'Recommened',
        component: () => import('../views/recommoned') // 路由懒加载
      },
      {
        path: '/hot',
        name: 'Hot',
        component: () => import('../views/hot')
      },
      {
        path: '/s',
        name: 'Search',
        component: () => import('../views/search')
      },
      {
        path: '/my',
        name: 'My',
        component: () => import('../views/my')
      }
    ]
  },
  {
    path: '/play',
    name: 'Player',
    component: () => import('../views/Player.vue')
  },
  {
    path: '/sheet',
    name: 'Sheet',
    component: () => import('../views/SheetList.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
