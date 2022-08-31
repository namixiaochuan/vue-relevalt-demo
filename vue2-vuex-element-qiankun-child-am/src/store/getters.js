
const getters = {
    login_syetem:state => state.user.login_syetem, // 记录上一次登录的子系统
    menu:state => state.user.menu, // 记录上一次登录的子系统
    userInfo:state => state.user.userInfo, // 用户基础信息
    access_token:state => state.user.access_token,
    isGetRoles:state => state.user.isGetRoles, // 判断是否已经获取了基础数据，以防重复获取接口
}

export default getters
