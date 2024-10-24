//import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Router from './routes';

// createApp(App).mount('#app')
const vueApp = createApp(App);

vueApp.use(Router);
vueApp.mount("#app");
