import {Module} from "vuex";
import {loginByUsername, logout, GetMenu} from '../../api/login'
import {getStore, setStore} from "@/utils/store";
import {
    deepClone,
    encryption,
    usernameCropy
} from "@/utils/tools";

interface StoreUser {
    text: string
}

const state = () => ({
    access_token: getStore({
        name: "access_token"
    }) || "",
    refresh_token: getStore({
        name: "refresh_token"
    }) || "",
    expires_in: getStore({
        name: "expires_in"
    }) || "",
    keyLogin: getStore({
        name: "keyLogin"
    }) || false,
    // 菜单
    menu: getStore({
        name: "menu"
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
})

const getters = {}

const mutations = {
    // 是否是子系统
    SUB_SYSTEM: (state: any, subSystem: Boolean) => {
        state.subSystem = subSystem;
        setStore({
            name: "subSystem",
            content: state.subSystem,
            type: "session"
        });
    },
    // 设置token
    SET_ACCESS_TOKEN: (state: any, access_token: string) => {
        state.access_token = access_token;
        setStore({
            name: "access_token",
            content: state.access_token,
            type: "session"
        });
    },
    // 保存用于刷新用的token
    SET_REFRESH_TOKEN: (state: any, rfToken: string) => {
        state.refresh_token = rfToken;
        setStore({
            name: "refresh_token",
            content: state.refresh_token,
            type: "session"
        });
    },
    // 设置过期时间
    SET_EXPIRES_IN: (state: any, expires_in: string) => {
        state.expires_in = expires_in;
        setStore({
            name: "expires_in",
            content: state.expires_in,
            type: "session"
        });
    },
    // commit("KEY_LOGIN", false);
    KEY_LOGIN: (state: any, keyLogin: string) => {
        state.keyLogin = keyLogin;
        setStore({
            name: "keyLogin",
            content: state.keyLogin,
            type: "session"
        });
    },
    // 保存菜单
    SET_MENU: (state: any, menu: any) => {
        state.menu = menu;
        setStore({
            name: "menu",
            content: state.menu,
            type: "session"
        });
    },
    IS_GET_ROLES: (state: any, isGetRoles: Boolean) => {
        state.isGetRoles = true;
        setStore({
            name: "isGetRoles",
            content: state.isGetRoles,
            type: "session"
        });
    },
    // 保存权限
    SET_PERMISSIONS: (state: any, permissions: any) => {
        const list: any = {};
        for (let i = 0; i < permissions.length; i++) {
            list[permissions[i]] = true;
        }
        state.permissions.obj = list;
        state.permissions.arr = permissions;
    },
}

const actions = {
    // 获取系统菜单
    async GetMenu({commit}) {
        let res: any = await GetMenu()
        if (res.code == 0) {
            commit("SET_MENU", res.data);
            commit("IS_GET_ROLES", true);
        }
    },
    // 获取系统菜单
    async subSystem({commit}, subSystem: Boolean) {
        commit("SUB_SYSTEM", subSystem);
    },
    // 根据用户名登录
    async LoginByUsername({commit}, userInfo: any) {
        console.log(userInfo)
        const user = encryption({
            data: userInfo,
            key: "secloudsecloudse",
            param: ["password"]
        });
        // 用户名加密，不需要请注释掉这两行
        const username = usernameCropy(user.username)
        user.username = username
        console.log(username)
        let response: any = await loginByUsername(user.username, user.password, user.code, user.randomStr, true)
        const data = response;
        commit("SET_ACCESS_TOKEN", data.access_token);
        commit("SET_REFRESH_TOKEN", data.refresh_token);
        commit("SET_EXPIRES_IN", data.expires_in);
        commit("KEY_LOGIN", false);
        // commit("CLEAR_LOCK");
        return true
    },
    // 登出
    async LogOut({commit}) {
        await logout()
        commit("SET_MENU", []);
        commit("SET_PERMISSIONS", []);
        commit("SET_USER_INFO", {});
        commit("SET_DEPT_INFO", {});
        commit("SET_FA_DEPT_INFO", {});
        commit("SET_ACCESS_TOKEN", "");
        commit("SET_REFRESH_TOKEN", "");
        commit("SET_EXPIRES_IN", "");
        commit("DEL_ALL_TAG");
        window.sessionStorage.clear();
        return true
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
