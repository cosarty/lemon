import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'
import LemonUI from '../packages'
import '../packages/theme/base.scss'

createApp(App).use(LemonUI).mount('#app')

