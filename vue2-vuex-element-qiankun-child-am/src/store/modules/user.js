import { getStore, setStore } from "@/utils/store";
import {logout, GetMenu} from '@/api/login'

const user = {
  state: {
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
  },
  actions: {
    // 获取系统菜单
    async GetMenu({commit}) {
      let res = await GetMenu()
      if (res.code == 0) {
        commit("SET_MENU", res.data);
        commit("IS_GET_ROLES", true);
      }
    },
    // 获取系统菜单
    async subSystem({commit}, subSystem) {
      commit("SUB_SYSTEM", subSystem);
    },
    // 根据用户名登录
    async LoginByUsername({commit}, userInfo) {
      console.log(commit, userInfo)
      // const user = encryption({
      //     data: userInfo,
      //     key: "secloudsecloudse",
      //     param: ["password"]
      // });
      // // 用户名加密，不需要请注释掉这两行
      // const username = usernameCropy(user.username)
      // user.username = username
      // console.log(username)
      // let response = await loginByUsername2(userInfo)
      // console.log(response)
      // const data = response;
      // console.log(userInfo,'---------------', data)
      // commit("SET_ACCESS_TOKEN", data.access_token);
      // commit("SET_REFRESH_TOKEN", data.refresh_token);
      // commit("SET_EXPIRES_IN", data.expires_in);
      // commit("KEY_LOGIN", false);
      // // commit("CLEAR_LOCK");
      return true
    },
    // 登出
    async LogOut({commit}) {
      await logout()
      commit("SET_ACCESS_TOKEN", null);
      commit("SET_REFRESH_TOKEN", null);
      commit("SET_EXPIRES_IN", null);
      commit("SET_MENU", null);
      commit("IS_GET_ROLES", false);
      window.sessionStorage.clear();
      return true
    }
  },
  mutations: {
    // 是否是子系统
    SUB_SYSTEM: (state, subSystem) => {
      state.subSystem = subSystem;
      setStore({
        name: "subSystem",
        content: state.subSystem,
        type: "session"
      });
    },
    // 设置token
    SET_ACCESS_TOKEN: (state, access_token) => {
      state.access_token = access_token;
      setStore({
        name: "access_token",
        content: state.access_token,
        type: "session"
      });
    },
    // 保存用于刷新用的token
    SET_REFRESH_TOKEN: (state, rfToken) => {
      state.refresh_token = rfToken;
      setStore({
        name: "refresh_token",
        content: state.refresh_token,
        type: "session"
      });
    },
    // 设置过期时间
    SET_EXPIRES_IN: (state, expires_in) => {
      state.expires_in = expires_in;
      setStore({
        name: "expires_in",
        content: state.expires_in,
        type: "session"
      });
    },
    // commit("KEY_LOGIN", false);
    KEY_LOGIN: (state, keyLogin) => {
      state.keyLogin = keyLogin;
      setStore({
        name: "keyLogin",
        content: state.keyLogin,
        type: "session"
      });
    },
    // 保存用户基础信息
    SET_USER_INFO: (state, userInfo) => {
      state.userInfo = userInfo;
      setStore({
        name: "userInfo",
        content: state.userInfo,
        type: "session"
      });
    },
    // 保存菜单
    SET_MENU: (state, menu) => {
      state.menu = menu;
      setStore({
        name: "menu",
        content: state.menu,
        type: "session"
      });
    },
    // 顶部的菜单操作
    SET_TOP_MENU: (state, top_menu) => {
      state.top_menu = top_menu;
      setStore({
        name: "top_menu",
        content: state.top_menu,
        type: "session"
      });
    },
    IS_GET_ROLES: (state, isGetRoles) => {
      console.log(isGetRoles)
      state.isGetRoles = true;
      setStore({
        name: "isGetRoles",
        content: state.isGetRoles,
        type: "session"
      });
    },
    // 保存权限
    SET_PERMISSIONS: (state, permissions) => {
      const list = {};
      for (let i = 0; i < permissions.length; i++) {
        list[permissions[i]] = true;
      }
      state.permissions.obj = list;
      state.permissions.arr = permissions;
    },
  }
};
export default user;
