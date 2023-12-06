import { createRouter, createWebHistory } from 'vue-router'

import { ROUTE_NAMES } from './route-names.js'

import Home from './pages/Home.vue'

import DocButton         from './pages/DocButton.vue'
import DocTypo           from './pages/DocTypo.vue'
import DocSelect         from './pages/DocSelect.vue'
import DocText           from './pages/DocText.vue'
import DocTextarea       from './pages/DocTextarea.vue'
import DocCodeInput      from './pages/DocCodeInput.vue'
import DocSidebar        from './pages/DocSidebar.vue'
import DocCheck          from './pages/DocCheck.vue'
import DocModal          from './pages/DocModal.vue'
import DocDropdown       from './pages/DocDropdown.vue'
import DocProgressRadial from './pages/DocProgressRadial.vue'
import DocIcon           from './pages/DocIcon.vue'
import DocImg            from './pages/DocImg.vue'


const routes = [
  { path: '/', name: ROUTE_NAMES.HOME, component: Home },
  { path: '/img', name: ROUTE_NAMES.DOC_IMG, component: DocImg },
  { path: '/typo', name: ROUTE_NAMES.DOC_TYPO, component: DocTypo },
  { path: '/button', name: ROUTE_NAMES.DOC_BUTTON, component: DocButton },
  { path: '/select', name: ROUTE_NAMES.DOC_SELECT, component: DocSelect },
  { path: '/text', name: ROUTE_NAMES.DOC_TEXT, component: DocText },
  { path: '/textarea', name: ROUTE_NAMES.DOC_TEXTAREA, component: DocTextarea },
  { path: '/code-input', name: ROUTE_NAMES.DOC_CODE_INPUT, component: DocCodeInput },
  { path: '/sidebar', name: ROUTE_NAMES.DOC_SIDEBAR, component: DocSidebar },
  { path: '/modal', name: ROUTE_NAMES.DOC_MODAL, component: DocModal },
  { path: '/dropdown', name: ROUTE_NAMES.DOC_DROPDOWN, component: DocDropdown },
  { path: '/check', name: ROUTE_NAMES.DOC_CHECK, component: DocCheck },
  { path: '/progress-radial', name: ROUTE_NAMES.DOC_PROGRESS_RADIAL, component: DocProgressRadial },
  { path: '/icon', name: ROUTE_NAMES.DOC_ICON, component: DocIcon },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.afterEach((to, from) => {
  document.body.setAttribute('route', String(to.name))
})

export default router
