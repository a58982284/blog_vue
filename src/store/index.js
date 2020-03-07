import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {
//      // 存储token
//      Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''
//   },
//   mutations: {
//     // 修改token，并将token存入localStorage
//     changeLogin(state,user){
//       // console.log(user.Authorization)
//       state.Authorization = user.Authorization;
//       // console.log(state)
//       localStorage.setItem('Authorization', user.Authorization);
//     }
//   },
//   actions: {
//   },
//   modules: {
//   }
// })

const store = new Vuex.Store({
 
  state: {
    // 存储token
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''
  },
 
  mutations: {
    // 修改token，并将token存入localStorage
    changeLogin (state, user) {  //这里的state对应上面状态state
      state.Authorization = user.Authorization;
      localStorage.setItem('Authorization', user.Authorization);
    }
  }
});
 
export default store

