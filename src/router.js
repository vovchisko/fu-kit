import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/Home.vue'

import DocButton   from '@/docs/DocButton.vue'
import DocTypo     from '@/docs/DocTypo.vue'
import DocSelect   from '@/docs/DocSelect.vue'
import DocText     from '@/docs/DocText.vue'
import DocTextarea from '@/docs/DocTextarea.vue'
import DocSandbox  from '@/docs/DocSandbox.vue'
import DocSidebar  from '@/docs/DocSidebar.vue'

const ROUTE_NAMES = Object.freeze({
  HOME: 'HOME',
  DOC_SANDBOX: 'DOC_SANDBOX',
  DOC_TYPO: 'DOC_TYPO',
  DOC_BUTTON: 'DOC_BUTTON',
  DOC_SELECT: 'DOC_SELECT',
  DOC_TEXT: 'DOC_TEXT',
  DOC_TEXTAREA: 'DOC_TEXTAREA',
  DOC_SIDEBAR: 'DOC_SIDEBAR',
  DOC_CHECK: 'DOC_CHECK',
  DOC_RADIO: 'DOC_RADIO',
  DOC_MODAL: 'DOC_MODAL',
})

const routes = [
  { path: '/', name: ROUTE_NAMES.HOME, component: Home },
  { path: '/sandbox', name: ROUTE_NAMES.DOC_SANDBOX, component: DocSandbox },
  { path: '/typo', name: ROUTE_NAMES.DOC_TYPO, component: DocTypo },
  { path: '/button', name: ROUTE_NAMES.DOC_BUTTON, component: DocButton },
  { path: '/select', name: ROUTE_NAMES.DOC_SELECT, component: DocSelect },
  { path: '/text', name: ROUTE_NAMES.DOC_TEXT, component: DocText },
  { path: '/textarea', name: ROUTE_NAMES.DOC_TEXTAREA, component: DocTextarea },
  { path: '/sidebar', name: ROUTE_NAMES.DOC_SIDEBAR, component: DocSidebar },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.afterEach((to, from) => {
  document.body.setAttribute('route', String(to.name))
})

export default router
