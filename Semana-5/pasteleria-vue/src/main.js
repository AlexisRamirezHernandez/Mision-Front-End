import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Admin from './Admin.Vue';

createApp(App).use(store).use(router).mount('#app')
// createApp(Admin).use(store).use(router).mount('#app')
