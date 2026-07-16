import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting: lazy-loaded when the route is visited
    component: () => import('../views/About.vue')
  }
]

const router = createRouter({
  // hash history matches the previous vue-router 3 default mode
  // and works under file:// in the packaged electron app
  history: createWebHashHistory(),
  routes
})

export default router
