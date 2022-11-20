import { createApp } from 'vue'
import App           from './App.vue'
import router        from './router.js'
import { UI }        from './pages/ui.js'

import '../reset.scss'
import './main.scss'

UI.init()

const app = createApp(App)

app.use(router)
app.mount('#app')
