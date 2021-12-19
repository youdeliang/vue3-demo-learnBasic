<template>
  <div @click="handleClick">login</div>
  <button @click="handleData">修改</button>
  <div>{{name}}</div>
</template>

<script>
import { toRefs } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'Login',
  setup () {
    const store = useStore()
    const { name } = toRefs(store.state)
    const handleClick = () => {
      // store.dispatch('change', 'nice to meet you')
      store.commit('change', 'nice to meet you')
    }
    const handleData = () => {
      store.dispatch('getData')
    }
    return { name, handleClick, handleData }
  }
}
</script>
