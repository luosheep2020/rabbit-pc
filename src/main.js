import {createApp} from 'vue'
import App from './App.vue'
import router from "@/router/index.js";
import {createPinia} from 'pinia'
// 2. 自己项目的重置样式和公用样式
import '@/styles/common.scss'
import {lazyPlugin} from "@/directives/index.js";

const pinia = createPinia()

createApp(App)
    .use(router)
    .use(pinia)
    .use(lazyPlugin)
    .mount('#app')
