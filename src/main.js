import './scss/all.scss'


import { createApp } from 'vue'
import App           from './App.vue'
import router        from './router.js'

require('./scss/ui.scss')
require('./scss/typo.scss')
require('./scss/media.scss')
require('./scss/colors.scss')
require('./root.scss')


createApp(App).use(router).mount('#app')
