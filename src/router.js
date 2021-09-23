import { createRouter, createWebHistory } from 'vue-router'

import Home       from '@/Home.vue'
import DocButtons from '@/docs/DocButtons.vue'
import DocTypo    from '@/docs/DocTypo.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/typo', name: 'DocTypo', component: DocTypo },
  { path: '/button', name: 'DocButton', component: DocButtons },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
