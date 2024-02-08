// --- src/main.js ---
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Bootstrap v5.0
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'

// Bootstrap icon
import 'bootstrap-icons/font/bootstrap-icons.css'

// Style Css
import './assets/css/style.css'
import './assets/css/animation.css'

// Vue Sweet alert 2
import 'sweetalert2/dist/sweetalert2.min.css';

// Config Sweet alert in App
import VueSweetalert2 from 'vue-sweetalert2';

const app = createApp(App)
const pinia = createPinia()

app.use(VueSweetalert2)
app.use(pinia)
app.use(router)

app.mount('#app')