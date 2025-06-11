import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'  // Bootstrap from npm
import 'bootstrap/dist/js/bootstrap.bundle.min.js'  // Bootstrap JS
import '@/assets/vendor/bootstrap-icons/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.css'

// Your custom JS
import '@/assets/js/main.js'

createApp(App).mount('#app')
