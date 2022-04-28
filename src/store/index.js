import Vue from'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import { reqConv, reqConv2 } from '@/api'
const state = {
    news:[],
    news2:{}
}
const actions = {
    async getNews({commit}) {
        let res = await reqConv();
        if(res.code == 200){
            commit('GETNEWS', res.newslist[0])
        }
    },
    async getNews2({commit}) {
        let res = await reqConv2();
        if(res.showapi_res_code == 0){
            commit('GETNEWS2', res.showapi_res_body)
        }
    }
}
const mutations = {
    GETNEWS(state, news) {
        state.news = news
    },
    GETNEWS2(state, news2) {
        state.news2 = news2
    },
}
const getters = {
    news(state) {
        return state.news.news 
    },
    desc(state) {
        return state.news.desc 
    },
    riskarea(state) {
        return state.news.riskarea 
    },
    todayDetailList(state) {
        return state.news2.todayDetailList
    },
    todayStatictic(state) {
        return state.news2.todayStatictic
    },
}

export default new Vuex.Store({
    state, actions, mutations,getters
})