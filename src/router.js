import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/Home.vue'

import DocButton   from '@/docs/DocButton.vue'
import DocTypo     from '@/docs/DocTypo.vue'
import DocSelect   from '@/docs/DocSelect.vue'
import DocText     from '@/docs/DocText.vue'
import DocTextarea from '@/docs/DocTextarea.vue'
import DocSandbox  from '@/docs/DocSandbox.vue'
import DocSidebar  from '@/docs/DocSidebar.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/sandbox', name: 'DocSandbox', component: DocSandbox },
  { path: '/typo', name: 'DocTypo', component: DocTypo },
  { path: '/button', name: 'DocButton', component: DocButton },
  { path: '/select', name: 'DocSelect', component: DocSelect },
  { path: '/text', name: 'DocText', component: DocText },
  { path: '/textarea', name: 'DocTextarea', component: DocTextarea },
  { path: '/sidebar', name: 'DocSidebar', component: DocSidebar },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
