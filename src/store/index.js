import Vue from 'vue'
import Vuex from 'vuex'
import {
  CMT_VISITED_LIST,
  CMT_POSITION_PROVINCE,
  CMT_POSITION_CITY,
  CMT_USER
} from './name.config'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    curVistedNodeList: ['北京美团', '北京火锅'],
    curPostionProvince: null,
    curPostionCity: null,
    user: ''
  },
  mutations: {
    [CMT_VISITED_LIST](state, val) {
      const arr = [];
      arr.push(`${state.curPostionCity}美团`, `${state.curPostionCity + val}`)
      state.curVistedNodeList = arr;
    },
    [CMT_POSITION_PROVINCE](state, val) {
      state.curPostionProvince = val
    },
    [CMT_POSITION_CITY](state, val) {
      state.curPostionCity = val
    },
    [CMT_USER](state, val) {
      state.user = val
    }
  },
  actions: {},
})