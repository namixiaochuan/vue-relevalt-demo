import {createApp} from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/style/index.scss'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/permission' // 权限
import {registerMicroApps, start, setDefaultMountApp, MicroAppStateActions} from "qiankun";
import microApps from '@/utils/qiankun-micro'
import {logout} from './utils/tools'
// import './mockjs/index'

// 引入公共组件
import basicContainer from '@/components/basic-container/main.vue'

const app = createApp(App)

// 实例化公共组件
app.component('basic-container', basicContainer);

// 全局方法
app.config.globalProperties.$logout = logout

app.use(store).use(router).use(ElementPlus).mount('#app')

const apps = microApps.map((item: any) => {
    return {
        ...item
    };
});
registerMicroApps(apps, {
// @ts-ignore
    beforeLoad: [(app: any) => {
        store.dispatch('user/subSystem', true)
        console.log("before load app.name====>>>>>", app);
    }],
// @ts-ignore
    beforeMount: [(app: any) => {
        console.log("[LifeCycle] before mount %c%s", "color: green;", app.name);
    }],
// @ts-ignore
    afterMount: [(app: any) => {
        store.dispatch('user/subSystem', false)
        console.log("[LifeCycle] after mount %c%s", "color: green;", app.name);
    }],
// @ts-ignore
    afterUnmount: [(app: any) => {
        console.log("[LifeCycle] after unmount %c%s", "color: green;", app.name);
    }]
});
// setDefaultMountApp("/vue3Vite");
start();
