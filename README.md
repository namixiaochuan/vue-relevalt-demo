## 该项目主要是整理了vue相关项目的框架，<br>
### 一、其中使用的技术、插件、依赖等有：<br>
> 1、vue3 vue2：前段框架<br>
> 2、webpack vite：前端开发与构建工具，代码编译工具<br>
> 3、vuex pinia：缓存<br>
> 4 、element-plus(vue3) element-ui(vue2)：ui库<br>
> 5、mockjs：模拟请求，生成随机数据<br>
> 6、qiankun：前段微服务应用<br>
> 7、node：基于 Chrome V8 引擎的 JavaScript 运行时<br>
> 8、express：后台框架

### 二、环境使用
> node 14.16.1<br>
> npm 6.14.12<br>
> 启动 npm run dev<br>
> 使用微服务的话，先启动 vue3-vite-vuex-element-qiankun-main，再启动其他服务<br>

### 三、目录梗概
>├─ vue3-vite-vuex-element-qiankun-main  // qiankun微服务主应用 <br>
>├─ vue3-vite-vuex-element-qiankun-child-apply // vue3 history 模式子乾坤应用 目录在上面 <br>
>├─ vue3-vite-vuex-element-qiankun-child-am // vue3 history 模式子乾坤应用 目录在侧面 <br>
>├─ vue3-vite-pinia-hash-element-qiankun-child-am //vue3 hash 模式子乾坤应用 目录在上面 <br>
>├─ vue3-vite-pina-hash-element-qiankun-child-apply //vue3 hash 模式子乾坤应用 目录在侧面<br>
>├─ h5-app-wx-another-frame // 手机端应用 app 小程序等 <br>
>├─ node-express // node 做的 后台系统 <br>