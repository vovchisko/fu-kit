import { createApp } from 'vue'
import App           from './App.vue'
import router        from './router.js'

import '/reset.scss'
import '/root.scss'
import './styles.scss'

createApp(App).use(router).mount('#app')
