import { createStore } from 'vuex'
import axios from 'axios'
// store数据管理框架
// vuex创建了一个全局唯一的仓库，用来存放全局的数据

// 1.dispatch方法，派发一个action，名字叫做change
// 2.感知到change这个action，执行store中actions下面的change方法
// 3.commit提交一个叫做change的数据改变
// 4.mutations感知提交的change改变，执行change方法改变数据

// 把第一步和第二步省略，直接第三步，this.$store.commit('change'),如果只是修改同步数据，是可以的
// 但是异步是不可以的

// mutations 里面只允许写同步代码，不允许写异步代码

// dispatch action
// mutation commit

export default createStore({
  state: {
    name: 'dell'
  },
  mutations: {
    // 数据修改
    change (state, str) {
      console.log('mutations-change')
      console.log('state :>> ', state)
      state.name = str
    },
    getData (state, data) {
      state.name = data.message
    }
  },
  actions: {
    // 异步逻辑
    change (store, str) {
      console.log('action-change')
      console.log('store :>> ', store)
      setTimeout(() => {
        store.commit('change', str)
      }, 2000)
    },
    getData (store) {
      axios.post('https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd/api/user/register')
        .then(response => {
          store.commit('getData', response.data)
        })
    }
  },
  modules: {}
})
