// import { getStore, setStore } from "@/utils/store";

const user = {
  state: {
    // faDeptInfo: getStore({
    //   name: "fadept_info"
    // }) || {},
    // userInfo: getStore({
    //   name: "userInfo_fullInfo"
    // }) || {}, // 用户信息
    // userType: '', // 系统信息
    // level: getStore({
    //   name: "level"
    // }) || '', // 是否为二级单位
    // permissions: {}, // 权限信息
    // permissionsArray: [], // 权限信息
    // deptInfo: {}, // 单位信息
    // roles: [], // 角色
    // isGetRoles: false, // 是否已经获取权限
    // planTypeStr: "", //计划类型
    // menu_children: [], // 目录子项变化记录
    // menu_children_three: [], // 目录子项变化记录
    // tabNavHeight: 0, //选项卡高度记录
    // menu: getStore({
    //   name: "menu"
    // }) || [], // 左侧菜单
    // topMenu: getStore({
    //   name: "top_menu"
    // }) || [], // 顶部菜单
    // topMenuActive: getStore({
    //   name: "topMenuActive"
    // }) || '', // 顶部菜单选中哪个,
    // menuBreadcrumb: [],
    // menuAll: [],
    // expires_in: getStore({
    //   name: "expires_in"
    // }) || "",
    // access_token: getStore({
    //   name: "access_token"
    // }) || "",
    // refresh_token: getStore({
    //   name: "refresh_token"
    // }) || ""
  },
  actions: {
    // // 获取用户信息
    // GetUserInfo({commit}) {
    //   return new Promise((resolve, reject) => {
    //     let data = JSON.parse(window.localStorage.getItem('usermess')) || {}
    //     data.guid = window.localStorage.getItem('guid')
    //     setStore({
    //       name: "userInfo_fullInfo",
    //       content: data,
    //       type: "session"
    //     });
    //     commit("SET_FA_DEPT_INFO", data || {});
    //     commit("SET_USER_INFO", data.user);
    //     commit("SET_ACCESS_TOKEN", data.certificate.token);
    //     commit("SET_REFRESH_TOKEN", data.certificate.refresh_token);
    //     commit("SET_EXPIRES_IN", data.certificate.expires_in);
    //     // window.localStorage.removeItem('usermess')
    //     resolve(data);
    //   });
    // },
    // //获取面包屑
    // GetMenuBreadcrumb({
    //                     commit
    //                   }, state) {
    //   return new Promise((resolve, reject) => {
    //     commit("SET_MENU_BREADCRUMB", state);
    //   })
    // },
    // // 退出登录
    // LogOut({
    //          commit
    //        }) {
    //   return new Promise((resolve, reject) => {
    //
    //     commit("SET_MENU", []);
    //     commit("SET_PERMISSIONS", []);
    //     commit("SET_USER_INFO", {});
    //     commit("SET_DEPT_INFO", {});
    //     commit("SET_FA_DEPT_INFO", {});
    //     commit("SET_ACCESS_TOKEN", "");
    //     commit("SET_REFRESH_TOKEN", "");
    //     commit("SET_MENU_CHILDREN", []);
    //     commit("SET_MENU_CHILDREN_THREE", []);
    //     commit("SET_TAB_NAV_HEIGHT", 0);
    //     commit("SET_EXPIRES_IN", "");
    //     commit("SET_USER_TYPE", "");
    //     commit("SET_LEVEL", "");
    //     commit("SET_ROLES_TWO", []);
    //     commit("DEL_ALL_TAG");
    //     commit("CLEAR_LOCK");
    //     window.sessionStorage.clear();
    //     window.localStorage.removeItem('usermess')
    //     window.localStorage.removeItem('guid')
    //     resolve();
    //
    //     // logout()
    //     //   .then(() => {
    //     //   })
    //     //   .catch(error => {
    //     //     reject(error);
    //     //   });
    //   });
    // },
    // // 注销session
    // FedLogOut({
    //             commit
    //           }) {
    //   return new Promise(resolve => {
    //     commit("SET_MENU", []);
    //     commit("SET_PERMISSIONS", []);
    //     commit("SET_USER_INFO", {});
    //     commit("SET_DEPT_INFO", {});
    //     commit("SET_FA_DEPT_INFO", {});
    //     commit("SET_ACCESS_TOKEN", "");
    //     commit("SET_REFRESH_TOKEN", "");
    //     commit("SET_MENU_CHILDREN", []);
    //     commit("SET_MENU_CHILDREN_THREE", []);
    //     commit("SET_TAB_NAV_HEIGHT", 0);
    //     commit("SET_ROLES_TWO", []);
    //     commit("DEL_ALL_TAG");
    //     commit("CLEAR_LOCK");
    //     window.sessionStorage.clear();
    //     window.localStorage.removeItem('usermess')
    //     window.localStorage.removeItem('guid')
    //     resolve();
    //   });
    // },
    // // 获取系统菜单
    // GetMenu({
    //           commit
    //         }) {
    //   return new Promise(resolve => {
    //     resolve([]);
    //   })
    // },
    // // 设置系统菜单
    // SetMenu({
    //           commit
    //         }, menu) {
    //   return new Promise(resolve => {
    //     commit("SET_MENU", menu);
    //     resolve(menu);
    //   });
    // }
  },
  mutations: {
  //   // 设置token
  //   SET_ACCESS_TOKEN: (state, access_token) => {
  //     state.access_token = access_token;
  //     setStore({
  //       name: "access_token",
  //       content: state.access_token,
  //       type: "session"
  //     });
  //   },
  //   // 设置过期时间
  //   SET_EXPIRES_IN: (state, expires_in) => {
  //     state.expires_in = expires_in;
  //     setStore({
  //       name: "expires_in",
  //       content: state.expires_in,
  //       type: "session"
  //     });
  //   },
  //   // 保存用于刷新用的token
  //   SET_REFRESH_TOKEN: (state, rfToken) => {
  //     state.refresh_token = rfToken;
  //     setStore({
  //       name: "refresh_token",
  //       content: state.refresh_token,
  //       type: "session"
  //     });
  //   },
  //   SET_ROLE_GROUP: (state, roleGroup) => {
  //     state.roleGroup = roleGroup;
  //   },
  //   // 系统用户
  //   SET_USER_TYPE: (state, userType) => {
  //     state.userType = userType;
  //   },
  //   // 是否为二级单位
  //   SET_LEVEL: (state, level) => {
  //     state.level = level;
  //     setStore({
  //       name: "level",
  //       content: state.level,
  //       type: "session"
  //     });
  //   },
  //   // 保存人员信息
  //   SET_USER_INFO: (state, userInfo) => {
  //     state.userInfo = userInfo;
  //   },
  //   // 保存菜单
  //   SET_MENU: (state, menu) => {
  //     state.menu = menu;
  //     setStore({
  //       name: "menu",
  //       content: state.menu,
  //       type: "session"
  //     });
  //   },
  //   // 记录子菜单
  //   SET_MENU_CHILDREN: (state, menu_children) => {
  //     state.menu_children = menu_children;
  //     setStore({
  //       name: "SET_MENU_CHILDREN",
  //       content: state.menu_children,
  //       type: "session"
  //     });
  //   },
  //   // 记录三子菜单
  //   SET_MENU_CHILDREN_THREE: (state, menu_children_three) => {
  //     state.menu_children_three = menu_children_three;
  //     setStore({
  //       name: "SET_MENU_CHILDREN_THREE",
  //       content: state.menu_children_three,
  //       type: "session"
  //     });
  //   },
  //   // 记录选项卡高度
  //   SET_TAB_NAV_HEIGHT: (state, tabNavHeight) => {
  //     state.tabNavHeight = tabNavHeight;
  //     setStore({
  //       name: "SET_TAB_NAV_HEIGHT",
  //       content: state.tabNavHeight,
  //       type: "session"
  //     });
  //   },
  //   // 保存顶部菜单
  //   SET_TOP_MENU: (state, topMenu) => {
  //     state.topMenu = topMenu;
  //     setStore({
  //       name: "top_menu",
  //       content: state.topMenu,
  //       type: "session"
  //     })
  //   },
  //   // 保存顶部菜单活跃值
  //   SET_TOP_MENU_ACTIVE: (state, topMenuActive) => {
  //     state.topMenuActive = topMenuActive
  //     setStore({
  //       name: "topMenuActive",
  //       content: topMenuActive,
  //       type: "session"
  //     })
  //   },
  //   //菜单面包屑
  //   SET_MENU_BREADCRUMB: (state, menuBreadcrumb) => {
  //     state.menuBreadcrumb = menuBreadcrumb;
  //   },
  //   // 保存全部菜单, 暂时没用到
  //   SET_MENU_ALL: (state, menuAll) => {
  //     state.menuAll = menuAll;
  //   },
  //   // 保存角色
  //   SET_ROLES: (state, roles) => {
  //     state.isGetRoles = true
  //     state.roles = roles;
  //   },
  //   SET_ROLES_TWO: (state, roles) => {
  //     state.isGetRoles = false
  //     state.roles = [];
  //   },
  //   // 保存权限
  //   SET_PERMISSIONS: (state, permissions) => {
  //     const list = {};
  //     for (let i = 0; i < permissions.length; i++) {
  //       list[permissions[i]] = true;
  //     }
  //     state.permissions = list;
  //     state.permissionsArray = permissions;
  //   },
  //   // 保存单位信息
  //   SET_DEPT_INFO: (state, deptInfo) => {
  //     state.deptInfo = deptInfo;
  //     setStore({
  //       name: "deptInfo",
  //       content: deptInfo,
  //       type: "session"
  //     });
  //   },
  //   // 保存业务需要的单位信息
  //   SET_FA_DEPT_INFO: (state, faDeptInfo) => {
  //     state.faDeptInfo = faDeptInfo;
  //   },
  //   planTypeStr(state, planTypeStr) {
  //     state.planType = planTypeStr;
  //   }
  }
};
export default user;
