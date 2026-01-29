import { createApp } from 'vue'
import App from './App.vue'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import { inject } from "@vercel/analytics"
import './custom.css'
const app = createApp(App)
// SweetAlert2
app.use(VueSweetalert2)
inject()
app.mount('#app')