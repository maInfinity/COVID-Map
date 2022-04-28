import requests from './requests'
export const reqConv = () => requests({
    url:`/index?key=54d04128bc396a5bd142f792ee76f25a`,
    method:'get'
})
export const reqConv2 = () => requests({
    url:'http://route.showapi.com/2217-2?showapi_appid=982726&showapi_sign=5529b202a6a044bf879c7a6d4b6d6564',
    method:'get'
})
export const reqConvForeign = () => requests({
    url:'http://route.showapi.com/2217-5?showapi_appid=982726&showapi_sign=5529b202a6a044bf879c7a6d4b6d6564'
})


import mockAjax from './mockAjax'
export const reqArticles = () => mockAjax.get('/articles')
export const reqTests = () => mockAjax.get('/tests')
export const reqGoodDetail = () => mockAjax.request({
    url:'/good',
    method:'get',
})
export const reqRooms = () => mockAjax.get('/rooms')
