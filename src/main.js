import { createApp } from 'vue'
import App from './App.vue'
import routeConfig from './routers'
import { createPinia } from 'pinia'
// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// Bootstrap JavaScript
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

createApp(App)
.use(routeConfig)
.use(createPinia())
.mount('#app')