import { createApp } from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import 'bulma/css/bulma.css'
import router from "@/router";

createApp(App)
    .use(router)
    .mount('#app')
