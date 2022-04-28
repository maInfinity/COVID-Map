import axios from "axios";
const requests = axios.create({
    baseURL: '/ncov',  	// 配置请求路径前缀
    timeout: 5000		// 配置超时时间
})
// import store from '@/store'
requests.interceptors.request.use((config) => {
    /* if (store.state.detail.uuid_token) {
        config.headers.userTempId = store.state.detail.uuid_token
    }
    if (localStorage.getItem('token')) {
        config.headers.token = localStorage.getItem('token')
    } */
    return config
})

requests.interceptors.response.use(		// 配置请求拦截器
    (res) => {
        return res.data
    },
    (err) => {
        console.log(err)
        return Promise.reject(new Error('fail'))
    }
)

export default requests