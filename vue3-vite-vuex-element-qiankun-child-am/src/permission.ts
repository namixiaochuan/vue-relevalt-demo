/**
 * 全站权限配置
 *
 */
import router from './router'
import {useStore} from './store/index'
import store from './store/index'

router.beforeEach((to, from, next) => {
    console.log('===========123========',to, from, useStore(), store)
    console.log('===========123========',store.getters.access_token)
    // path: "/Login"
    // 访问根目录或者登录页判断是否登录状态
    if (['/', "/Login"].includes(to.path) && store.getters.access_token) {
        next('Home')
        return
    }
    console.log('===========123========',store.getters.isGetRoles)
    // 判断是否登录状态
    if (store.getters.access_token) {
        // 判断是否获取了基础数据
        if (!store.getters.isGetRoles) {
            store.dispatch('user/GetMenu').then((res: any) => {
                console.log(res)
                next()
            })
        } else {
            next()
        }
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
