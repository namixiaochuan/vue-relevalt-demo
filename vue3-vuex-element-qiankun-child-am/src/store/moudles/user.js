
const user = {
    state: {
    },
    actions: {
        // //根据用户名登录
        // LoginByUsername ({ commit }, userInfo = {}) {
        //     const user = encryption({
        //         data: userInfo,
        //         type: 'Aes',
        //         key: 'avue',
        //         param: ['useranme', 'password']
        //     });
        //
        //     return new Promise((resolve) => {
        //         loginByUsername(user.username, user.password, userInfo.code, userInfo.redomStr).then(res => {
        //             const data = res.data.data;
        //             commit('SET_TOKEN', data);
        //             commit('DEL_ALL_TAG', []);
        //             commit('CLEAR_LOCK');
        //             resolve();
        //         })
        //     })
        // },
    },
    mutations: {
        // SET_TOKEN: (state, token) => {
        //     setToken(token)
        //     state.token = token;
        //     setStore({ name: 'token', content: state.token })
        // },
    }

}
export default user