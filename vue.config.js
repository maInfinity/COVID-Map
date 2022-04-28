module.exports = {
    devServer: {
        proxy: {
            /* '': {// 匹配所有以 '/api'开头的请求路径
                target: 'http://route.showapi.com',// 代理目标的基础路径（根据实际接口写）
                changeOrigin: true,
            }, */
            '/ncov': {// 匹配所有以 '/api'开头的请求路径
                target: 'http://api.tianapi.com',// 代理目标的基础路径（根据实际接口写）
                changeOrigin: true,
            },
        }
    }
}