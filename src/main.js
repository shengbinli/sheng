import Vue from 'vue'
import App from './App.vue'
import router from './router'

//引入vuex
import store from './store'

//引入elementui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//引入axios
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios,axios);

//引入mockjs
require('./mock/mock')

//引入懒加载
// import infiniteScroll from 'vue-infinite-scroll'
// Vue.use(infiniteScroll)


//基础样式
import '@/assets/css/basic.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
