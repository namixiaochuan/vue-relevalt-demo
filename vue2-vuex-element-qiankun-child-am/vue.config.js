const packageName = require("./package.json").name;
const url = 'http://localhost:8080/'
module.exports = {
    // 服务配置
    devServer: {
        port: 9006, //端口号
        //   允许跨域
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
        proxy: {
            '/auth': {
                target: url,
                ws: true,
                // logLevel: 'debug', // 打印代理指向
                pathRewrite: {
                    '^/auth': 'auth'
                }
            },
            '/admin': {
                target: url,
                ws: true,
                // logLevel: 'debug', // 打印代理指向
                pathRewrite: {
                    '^/admin': 'admin'
                }
            },
        }
    },
    // webpack 配置
    configureWebpack: {
        output: {
            library: `${packageName}-child`,
            libraryTarget: "umd",
        },
    },
};
