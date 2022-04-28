import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter)

import Home from '@/views/Home'
import ConvTesting from '@/views/ConvTesting'
import GoodDetail from '@/views/GoodDetail'
import Rooms from '@/views/Rooms'
import Guide from '@/views/Guide'
export default new VueRouter({
    routes:[
        {
            path:'/',
            name:'home',
            component:Home
        },
        {
            path:'/convtesting',
            name:'convtesting',
            component:ConvTesting
        },
        {
            path:'/good',
            name:'good',
            component:GoodDetail
        },
        {
            path:'/room',
            name:'room',
            component:Rooms
        },
        {
            path:'/guide',
            name:'guide',
            component:Guide
        },
    ]
})