import axios from "axios";

// 数据转换
import qs from "qs";
// 进度提示组件
import NProgress from 'nprogress';
//加载
import {Loading} from 'element-ui';
// 数据组件
import store from "@/store";
// 消息提示组件
import {Message} from 'element-ui';
// 错误代码
import errorCode from '@/utils/errorCode';
import {getStore} from '@/utils/store'
// 序列化工具
import {serialize} from '@/utils/tools';
// eslint-disable-next-line no-unused-vars
let loadingInstance = null;
let qsTypeList = [
    "application/x-www-form-urlencoded"
]

// ajax请求超时时间
axios.defaults.timeout = 120000
axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8'
// 不再范围中的返回码进行过滤
axios.defaults.validateStatus = function (status) {
    return status >= 200 && status <= 500 // 默认的
}

// HTTPrequest拦截
axios.interceptors.request.use(config => {
    // removePending(config) // 在请求开始前，对之前的请求做检查取消操作
    // addPending(config) // 将当前请求添加到 pending 中
    // 启动进度条
    NProgress.start()
    // loading
    loadingInstance = Loading.service({fullscreen: true, background: 'hsla(0,0%,100%,.2)'});
    // 获取租户
    const TENANT_ID = getStore({name: 'tenantId'})
    // 判断是否存在token
    const isToken = (config.headers || {}).isToken === false
    let token = store.getters.access_token
    if (token && !isToken) {
        config.headers['Authorization'] = 'Bearer ' + token// token
    }
    if (TENANT_ID) {
        config.headers['TENANT_ID'] = TENANT_ID // 租户ID
    }
    // headers中配置serialize为true开启序列化
    if (config.method === 'post' && config.headers.serialize) {
        config.data = serialize(config.data)
        delete config.data.serialize
    }
    // 上面的序列化不会序列化中文 所以另外写一套序列化 用来处理qs引入的问题 将qs引入公共提出
    if (config.headers.qsType !== undefined && typeof (config.headers.qsType) == "number") {
        config.headers["Content-Type"] = qsTypeList[config.headers.qsType];
        // 给每个请求增加时间缀
        config.data = {
            ...(config.data || {}),
            // _t: +new Date()
        }
        config.data = qs.stringify(config.data)
        delete config.headers.qsType
    }
    return config
})

// HTTPresponse拦截
axios.interceptors.response.use(res => {
    // removePending(res) // 在请求结束后，移除本次请求
    NProgress.done()
    const status = Number(res.status) || 200
    const message = res.data.msg || errorCode[status] || errorCode['default']
    if (status !== 200) {
        // res.data.code === 1
        loadingInstance.close();
        Message({
            message: message,
            type: 'error'
        })
        return Promise.reject(message)
        // 后台判断填表字段有变，进行验证是否清空附件
    } else if (status === 200) {
        loadingInstance.close();
    } else {
        let timer = setTimeout(() => {
            loadingInstance.close();
        }, 3000)
        this.$once('hook:beforeDestroy', function () {
            clearInterval(timer)
        })
    }
    // 返回干掉多层data
    return res.data
}, error => {
    loadingInstance.close();
    NProgress.done()
    return Promise.reject(new Error(error))
})

export default axios
