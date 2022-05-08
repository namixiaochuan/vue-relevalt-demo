import "./public-path.ts";
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';
import {createApp, toRaw} from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/style/index.scss'
import App from './App.vue'
import router from './router'
import { registerStore } from './store'
import { createPinia } from "pinia";
import '@/permission' // 权限

// 引入公共组件
import basicContainer from '@/components/basic-container/main.vue'

// const app = createApp(App)

// 实例化公共组件
// app.component('basic-container', basicContainer);
//
// app.use(store).use(router).use(ElementPlus).mount('#applyApp')

// let router:any = null;
// let instance:any = null;
// let history:any = null;


function render(props:any = {}) {
    const { container } = props;
    console.log(props, '=============23=======props')
    // instance = createApp(App);
    // instance.use(ElementPlus)
    // instance.use(store)
    // history = createWebHistory(qiankunWindow.__POWERED_BY_QIANKUN__ ? '/questionbank' : '/')
    // router = createRouter({
    //     history,
    //     routes
    // })
    //
    // instance.use(router);
    // instance.mount(container ? container.querySelector('#app') : document.getElementById("app"));

    const app = createApp(App)
    // 实例化公共组件
    app.component('basic-container', basicContainer);

    // 全局方法
    app.config.globalProperties.$logout = props.logout
    app.config.globalProperties.$mainStore = props.mainStore

    app.use(router)
    app.use(ElementPlus)
    app.use(createPinia())
    registerStore()

    // app.mount('#app')
    app.mount(container ? container.querySelector('#app') : document.getElementById("app"));
}

renderWithQiankun({
    mount(props) {
        // app.config.globalProperties
        // store.dispatch('user/LoginByUsername', loginForm)
        render(props);
        // 通讯api挂在在原型链上
        // instance.config.globalProperties.$onGlobalStateChange = props.onGlobalStateChange;
        // instance.config.globalProperties.$setGlobalState = props.setGlobalState;
        // 设置通信所需要的信息
        props.onGlobalStateChange((state:any) => {
            // store.commit('userinfo/setuserinfo', state.userinfo)
            // store.commit('paramsinfo/setparamsinfo', state.paramsinfo)
        },true)
    },
    bootstrap() {},
    unmount(props) {
        // instance.unmount();
        // instance._container.innerHTML = '';
        // history.destroy();
        // router = null;
        // instance = null;
    },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
    render({});
}
