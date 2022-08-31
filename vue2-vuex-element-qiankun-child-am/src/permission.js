
import router from '@/router'
import NProgress from 'nprogress' // progress bar
import store from '@/store'

router.beforeEach((to, from, next) => {
    console.log('----123---------------', to, from, next, store.getters.access_token)
    // console.log(store.getters.access_token)
    // path: "/Login"
    // 访问根目录或者登录页判断是否登录状态
    if (['/', "/Login"].includes(to.path) && store.getters.access_token) {
        next('Home')
        return
    }
    // 获取目录数据
    if (!store.getters.isGetRoles) {
        store.dispatch('GetMenu')
    }
    // console.log(store.getters.isGetRoles)
    // 判断是否登录状态
    if (store.getters.access_token) {
        next()
        // 不是登录页面，或非登录页面则跳转到登录页面
    } else if (!store.getters.access_token && !['/Login'].includes(to.path) || ['/'].includes(to.path)) {
        next('Login')
    } else {
        next()
    }
    // 不存在的页面 跳转到404
    if (to.matched.length === 0) {
        next('/404')
    }
})

router.afterEach(() => {
    NProgress.done()
})
