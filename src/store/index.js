import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    loginName: '',
    arr: [1, 2, 3, 4],
    stack:[]
  },
  mutations: {
    add: function(state, val) {
      state.res += val;
    },
    yibu(state, val) {
      state.res -= val;
    },
  },
  actions: {
    yibu(context) {
      setTimeout(() => {
        context.commit("yibu", 2);
        console.info("异步操作完成");
      }, 1000);
    },
  },
  getters: {
    wath(state) {
      return state.res;
    },
    getarr(state) {
      return state.arr;
    },
  },
});
