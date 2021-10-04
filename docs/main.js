import { createApp } from 'vue'
import App           from './App.vue'
import router        from './router.js'

import FuKit from '@/entry.esm';

import '../reset.scss'
import '../root.scss'

createApp(App).use(router).mount('#app')

// To register individual components where they are used (serve.vue) instead of using the
// library as a whole, comment/remove this import and it's corresponding "app.use" call
const app = createApp(App);
app.use(FuKit);
app.mount('#app');
