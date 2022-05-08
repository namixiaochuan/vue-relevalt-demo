import {createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw} from 'vue-router'
// src/page/index.vue
import Layout from '@/page/page.vue'
import Home from '../views/home/Home.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: Layout,
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: 'Home',
                component: Home
            }
            ]
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "about" */ '../views/login/Login.vue')
    },
    {
        path: '/404',
        component: () =>
            import( /* webpackChunkName: "error-page" */ '@/views/error-page/404.vue'),
        name: '404',
        meta: {
            keepAlive: true,
            isTab: false,
            isAuth: false
        }

    },
    {
        path: '/403',
        component: () =>
            import( /* webpackChunkName: "error-page" */ '@/views/error-page/403.vue'),
        name: '403',
        meta: {
            keepAlive: true,
            isTab: false,
            isAuth: false
        }
    },
    {
        path: '/500',
        component: () =>
            import( /* webpackChunkName: "error-page" */ '@/views/error-page/500.vue'),
        name: '500',
        meta: {
            keepAlive: true,
            isTab: false,
            isAuth: false
        }
    },
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: import( /* webpackChunkName: "error-page" */ '@/views/error-page/404.vue'),
    },
]

const router = createRouter({
    // history: createWebHistory(process.env.BASE_URL),
    history: createWebHashHistory(),
    routes
})

export default router
