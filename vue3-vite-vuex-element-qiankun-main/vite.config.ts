import {defineConfig} from 'vite'
import vue from "@vitejs/plugin-vue"

const {resolve} = require('path')
// const innerUrlUi = `http://111.62.12.163:${process.env.VUE_APP_PORT}`
const url = `http://111.62.12.163:21680`

// https://vitejs.dev/config/
export default defineConfig({
    base: '',
    //1.别名配置
    resolve: {
        alias: [
            {find: '@', replacement: resolve(__dirname, 'src')},
        ],
    },
    plugins: [vue()],
    server: {
        open: true,
        /* 设置为0.0.0.0则所有的地址均能访问 */
        host: '0.0.0.0',
        port: 9001,
        https: false,
        proxy: {
            '/auth': url,
            '/admin': url,
            //   '/auth': {
            //   target: url, // 所要代理的目标地址
            //   rewrite: path => path.replace(/^\/auth/, '/auth'), // 重写传过来的path路径，比如 `/api/index/1?id=10&name=zs`（注意:path路径最前面有斜杠（/），因此，正则匹配的时候不要忘了是斜杠（/）开头的；选项的 key 也是斜杠（/）开头的）
            //   changeOrigin: true,  // true/false, Default: false - changes the origin of the host header to the target URL
            // }
        }
    },
    define: {
        'process.env': {}
    },
})
