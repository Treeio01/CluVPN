import { createApp } from 'vue'
import { router } from './router/routes';
import './style.css'
import App from './App.vue'
import 'aos/dist/aos.css'

createApp(App).use(router).mount('#app')
