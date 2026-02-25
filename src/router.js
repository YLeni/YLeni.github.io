import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './HomeView.vue'
import CVView from './CVView.vue'
// import LifeView from './LifeView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/cv', component: CVView },
  // { path: '/life', component: LifeView }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router