import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    taks: [],
    user: {}
  },
  mutations: {},
  actions: {
    async getTaks(){
      let response = await axios.get("http://localhost:8001/user/", {headers: {"Access-Control-Allow-Origin": "*"}})
      console.log(response.data[0])
      this.state.taks = response.data[0]
    }
  },
  modules: {}
})
