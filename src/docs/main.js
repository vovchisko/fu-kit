import { createApp } from 'vue'
import App           from './App.vue'
import router        from './router.js'

import FuKit from '@/entry.esm.js'

require('../../reset.scss')
require('../../root.scss')
require('./styles.css')

const app = createApp(App)

// To register individual components where they are used (serve.vue) instead of using the
// library as a whole, comment/remove this import and it's corresponding "app.use" call
app.use(router)
app.use(FuKit)
app.mount('#app')
