<template>
  <div>
    <div>lesson11</div>
    <div>
      <div @click="handleClick">hello world</div>
      <div>{{name}}</div>
    </div>
  </div>
</template>

// 生命周期函数的新写法
// beforeCreated,created没有,是因为setup函数在这期间执行,所以直接写在setup里面就可以了
// beforeMounted => onBeforeMount
// mounted => onMounted
// beforeUpdate => onBeforeUpdate
// updated => onUpdated
// beforeUnmount => onBeforeUnmount
// unmounted => onUnmounted
// 新的生命周期函数
// onRenderTracked 每次渲染后重新收集响应式依赖
// onRenderTriggered 每次触发页面重新渲染时自动执行

<script>
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onRenderTracked, onRenderTriggered, onUnmounted, onUpdated, ref } from 'vue'
export default {
  name: 'lessonElven',
  setup () {
    const name = ref('dell')
    onBeforeMount(() => {
      console.log('onbeforeMounted')
    })
    onMounted(() => {
      console.log('onMounted')
    })
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate')
    })
    onUpdated(() => {
      console.log('onUpdated')
    })
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount')
    })
    onUnmounted(() => {
      console.log('onUnmounted')
    })

    onRenderTracked(() => {
      console.log('onRenderTracked')
    })
    onRenderTriggered(() => {
      console.log('onRenderTriggered')
    })
    const handleClick = () => {
      name.value = 'lee'
    }
    return {
      name, handleClick
    }
  }
}
</script>
