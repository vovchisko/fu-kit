import { createApp } from 'vue'
import App           from './App.vue'
import router        from './router.js'

import('../reset.scss')
import('../root.scss')
import('./styles.css')

const app = createApp(App)

app.use(router)
app.mount('#app')
