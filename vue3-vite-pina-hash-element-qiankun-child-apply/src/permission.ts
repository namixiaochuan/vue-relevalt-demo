/**
 * 全站权限配置
 *
 */
import router from './router'
// import {useStore} from './store/index'
import store from '@/store'

router.beforeEach((to, from, next) => {
    // console.log('===========123========',to, from, useStore(), store)
    console.log('===========123========',store.userStore.access_token)
    // path: "/Login"
    // 访问根目录或者登录页判断是否登录状态
    if (['/', "/Login"].includes(to.path) && store.userStore.access_token) {
        next('Home')
        return
    }
    // console.log('===========123========',store.userStore.isGetRoles)
    // 判断是否登录状态
    if (store.userStore.access_token) {
        next()
        // 不是登录页面，或非登录页面则跳转到登录页面
    } else if (!store.userStore.access_token && !['/Login'].includes(to.path) || ['/'].includes(to.path)) {
        next('Login')
    } else {
        next()
    }
    // 不存在的页面 跳转到404
    if (to.matched.length === 0) {
        next('/404')
    }
})
