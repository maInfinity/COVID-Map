import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import * as API from '@/api'
import router from '@/router'
import './assets/css/base.css'
import store from '@/store'
import Swiper from '@/components/Swiper'
import '@/mock/mockServer'

Vue.component('Swiper', Swiper)
import { Toast,GoodsAction, GoodsActionIcon, GoodsActionButton,Icon,Grid, GridItem,Badge, Button, Tab, Tabs, Collapse, CollapseItem, Divider, Swipe, SwipeItem, Lazyload, Image as VanImage, Dialog } from "vant";
Vue.use(Badge)
Vue.use(Button)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Divider);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(VanImage);
Vue.use(Dialog);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Icon);
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.use(Toast);

new Vue({
  beforeCreate() {
    Vue.prototype.$API = API
  },
  render: h => h(App),
  router,
  store
}).$mount('#app')
