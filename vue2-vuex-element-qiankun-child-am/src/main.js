import Vue from 'vue'
import App from './App.vue'
import './permission' // 权限
import './error' // 日志
//引入VueRouter
import VueRouter from 'vue-router'
//引入路由器
import router from '@/router'
import store from "@/store/index";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import { initParentRouter } from '@/utils/tools'
Vue.config.productionTip = false

let instance = null

function render (props = {}) {
  const { container, router: parentRouter  } = props


  Vue.use(VueRouter) // 别忘了写这条，官网复制过来没有这个
  Vue.use(ElementUI);
  Vue.prototype.$parentRouter = parentRouter
  Vue.prototype.$logout = props.logout
  Vue.prototype.$mainStore = props.mainStore



  initParentRouter(parentRouter)
  console.log(parentRouter)
  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app') // 这里匹配的是public文件夹下面的index.html的id
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render()
} else {
  // eslint-disable-next-line no-undef,camelcase
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
}

export async function bootstrap () {
  console.log('[vue] vue app bootstraped')
}

export async function mount (props) {
  console.log('[vue] props from main framework', props)
  render(props)
}

export async function unmount () {
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
}
