const getters={
    login_syetem:(state:any)=>state.user.login_syetem, // 记录上一次登录的子系统
    menu:(state:any)=>state.user.menu, // 记录上一次登录的子系统
    userInfo:(state:any)=>state.user.userInfo, // 用户基础信息
    access_token:(state:any)=>state.user.access_token,
    isGetRoles:(state:any)=>state.user.isGetRoles, // 判断是否已经获取了基础数据，以防重复获取接口
}
export default getters
