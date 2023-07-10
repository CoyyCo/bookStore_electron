import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createPinia} from 'pinia'
import {func} from '@/util/fetchIntercept'
// 通用字体
import 'vfonts/Lato.css'
import 'animate.css/animate.min.css' //引入
createApp(App).use(createPinia()).use(router).mount('#app')
func(router)
