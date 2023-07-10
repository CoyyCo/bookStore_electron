import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: "用户界面",
        component: () => import('@/views/home/userLogin.vue'),
        redirect: 'login',
        children: [
            {
                path: "login",
                name: "登录",
                component: () => import('@/views/home/login.vue')
            },
            {
                path: "register",
                name: "注册",
                component: () => import('@/views/home/register.vue')
            }
        ]
    }, {
        path: "/index",
        name: "首页",
        component: () => import('@/views/index/index.vue')
    },
    {
        path: "/category",
        name: "类别",
        component: () => import('@/views/category/category.vue')
    },
    {
        path: "/detail",
        name: "详细",
        component: () => import('@/views/detail/detail.vue')
    },
    {
        path: "/search",
        name: "search",
        component: () => import('@/views/search/search.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
