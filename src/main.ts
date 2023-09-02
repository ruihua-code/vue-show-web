import './assets/main.css'
import './assets/font/index.css'
import './assets/styles/bootstrap.scss'
import { Tooltip, Toast, Popover } from 'bootstrap'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
