
let parentRouter = null

/**
 * 接收从父组件传来的路由，为了登出和获取目录等功能
 *
 * */
export const initParentRouter = function (router){
    parentRouter = router
}

export const jumpParentPage = function (path) {
    if (parentRouter) {
        parentRouter.push(path)
    } else {
        window.open(path, '_parent')
    }
}
