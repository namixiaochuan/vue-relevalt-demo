const getters={
    userInfo:(state:any)=>state.user.userInfo, // 用户基础信息
    menu:(state:any)=>state.user.menu, // 记录上一次登录的子系统
    top_menu:(state:any)=>state.user.top_menu, // 顶部菜单
    access_token:(state:any)=>state.user.access_token,
    isGetRoles:(state:any)=>state.user.isGetRoles, // 判断是否已经获取了基础数据，以防重复获取接口
}
export default getters
