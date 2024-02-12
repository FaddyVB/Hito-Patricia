import Vue from 'vue'
import VueRouter from 'vue-router'

import Page1 from '@/views/Page1.vue'
import Page2 from '@/views/Page2.vue'
import Page3 from '@/views/Page3.vue'
import Page4 from '@/views/Page4.vue'
import Page5 from '@/views/Page5.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/page1', component: Page1 },
  { path: '/page2', component: Page2 },
  { path: '/page3', component: Page3 },
  { path: '/page4', component: Page4 },
  { path: '/page5', component: Page5 },
  // Puedes definir más rutas aquí según sea necesario
]

const router = new VueRouter({
  mode: 'history', // Modo de enrutamiento, puedes usar 'hash' también
  base: process.env.BASE_URL,
  routes
})

export default router
