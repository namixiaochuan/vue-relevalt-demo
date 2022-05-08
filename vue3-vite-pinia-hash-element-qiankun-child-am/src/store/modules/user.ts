import { defineStore } from 'pinia'
import {getStore, setStore} from "@/utils/store";
export const userStore = defineStore('userStore', {
    state: () => ({
        access_token: getStore({
            name: "access_token"
        }) || "",
        refresh_token: getStore({
            name: "refresh_token"
        }) || "",
        expires_in: getStore({
            name: "expires_in"
        }) || "",
        userInfo: getStore({
            name: "userInfo"
        }) || {},
        keyLogin: getStore({
            name: "keyLogin"
        }) || false,
        // 菜单
        menu: getStore({
            name: "menu"
        }) || [],
        top_menu: getStore({
            name: "top_menu"
        }) || [],
        // 权限信息
        permissions: getStore({
            name: "permissions"
        }) || {
            obj: {},
            arr: []
        },
        // 判断是否登陆后获取基础数据
        isGetRoles: getStore({
            name: "isGetRoles"
        }) || false,
        subSystem: getStore({
            name: "subSystem"
        }) || false,
    }),
    actions: {
        setTopMenu(data: any){
            console.log('============================')
            this.top_menu = data;
            setStore({
                name: "top_menu",
                content: this.top_menu,
                type: "session"
            });
        },
        //
        // // 获取系统菜单
        // async GetMenu({commit}) {
        //     let res: any = await GetMenu()
        //     if (res.code == 0) {
        //         commit("SET_MENU", res.data);
        //         commit("IS_GET_ROLES", true);
        //     }
        // },
        // // 获取系统菜单
        // async subSystem({commit}, subSystem: Boolean) {
        //     commit("SUB_SYSTEM", subSystem);
        // },
        // // 根据用户名登录
        // async LoginByUsername({commit}, userInfo: any) {
        //     // const user = encryption({
        //     //     data: userInfo,
        //     //     key: "secloudsecloudse",
        //     //     param: ["password"]
        //     // });
        //     // // 用户名加密，不需要请注释掉这两行
        //     // const username = usernameCropy(user.username)
        //     // user.username = username
        //     // console.log(username)
        //     // let response: any = await loginByUsername2(userInfo)
        //     // console.log(response)
        //     // const data = response;
        //     // console.log(userInfo,'---------------', data)
        //     // commit("SET_ACCESS_TOKEN", data.access_token);
        //     // commit("SET_REFRESH_TOKEN", data.refresh_token);
        //     // commit("SET_EXPIRES_IN", data.expires_in);
        //     // commit("KEY_LOGIN", false);
        //     // // commit("CLEAR_LOCK");
        //     return true
        // },
        // // 登出
        // async LogOut({commit}) {
        //     await logout()
        //     commit("SET_ACCESS_TOKEN", null);
        //     commit("SET_REFRESH_TOKEN", null);
        //     commit("SET_EXPIRES_IN", null);
        //     commit("SET_MENU", null);
        //     commit("IS_GET_ROLES", false);
        //     window.sessionStorage.clear();
        //     return true
        // }
    }
})