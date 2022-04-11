import axios from "axios";
import store from '@/store'
import {ElNotification} from 'element-plus'
import {serialize} from './tools'
// 数据转换
import qs from "qs";

// console.log('==================', store)
const service = axios.create({
    timeout: 5000 // request timeout
});
// 发起请求之前的拦截器
service.interceptors.request.use(
    (config:any) => {
        console.log('==================', store)
        // 判断是否存在token
        const isToken = (config.headers || {}).isToken === false
        let token = store.getters.access_token
        if (token && !isToken) {
            config.headers['Authorization'] = 'Bearer ' + token// token
        }
        // headers中配置serialize为true开启序列化
        if (config.method === 'post' && config.headers.serialize) {
            config.data = serialize(config.data)
            delete config.data.serialize
        }
        // 上面的序列化不会序列化中文 所以另外写一套序列化 用来处理qs引入的问题 将qs引入公共提出
        if (config.headers.qsType !== undefined && typeof (config.headers.qsType) == "number") {
            config.headers["Content-Type"] = [
                "application/x-www-form-urlencoded"
            ];
            // 给每个请求增加时间缀
            config.data = {
                ...(config.data || {}),
                _t: +new Date()
            }
            config.data = qs.stringify(config.data)
            delete config.headers.qsType
        }
        return config;
    },
    error => Promise.reject(error)
);
// 响应拦截器
service.interceptors.response.use(
    response => {
        const res = response.data;
        if (response.status !== 200) {
            return Promise.reject(new Error(res.message || "Error"));
        } else {
            return res;
        }
    },
    error => {
        let res = JSON.parse(JSON.stringify(error))
        if (res.status === 401 && res.config.url==='/auth/oauth/token'){
            ElNotification({
                title: "提示",
                message: '用户名不存在或者密码错误',
                type: "error",
                duration: 15000
            });
        }
        return Promise.reject(res);
    }
);
export default service;
