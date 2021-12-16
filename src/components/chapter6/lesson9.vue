<template>
  <div>
    <div>lesson9</div>
    <div>
      <div>
        name:<input
          type="text"
          v-model="name"
        >
      </div>
      <div>name is {{name}}</div>
      <div>
        englishName:<input
          type="text"
          v-model="englishName"
        >
      </div>
      <div>englishName is {{englishName}}</div>
    </div>
  </div>
</template>

// watch和watchEffect的使用和差异性
// lazy具备一定的惰性,首次页面渲染不执行
// 参数可以拿到当前值和之前值
// 监听的值，当使用reactive时，监听时监听一个箭头函数
// 用一个监听器承载，可以监听多个数据

// watchEffect 立即执行，没有惰性
// 不需要传递你要监听的内容，自动感知代码依赖，不需要传递很多参数，只需要传一个回调函数
// watchEffect没法获取当前值和之前值

// ajax请求,异步操作,watchEffect比较好,

<script>
import { reactive, toRefs, watch, watchEffect } from 'vue'
export default {
  name: 'lessonNine',
  setup () {
    const nameObj = reactive({ name: 'dell', englishName: 'nice' })
    const stop1 = watch([() => nameObj.name, () => nameObj.englishName], ([currentVal, curEVal], [prevVal, prevEVal]) => {
      console.log('currentVal,prevVal :>> ', currentVal, prevVal)
      console.log('curEVal, prevEVal :>> ', curEVal, prevEVal)
      setTimeout(() => {
        stop1()
      }, 2000)
    }, {
      immediate: true// 将watch变成非惰性的监听
    })// 多个的 可以的
    // watch(() => nameObj.name, (currentVal, prevVal) => {
    //   console.log('currentVal,prevVal :>> ', currentVal, prevVal)
    // })// 单个的 可以的
    // watch(nameObj, (currentVal, prevVal) => {
    //   console.log('currentVal,prevVal :>> ', currentVal, prevVal)
    // }) //可以的
    // watch(nameObj.name, (currentVal, prevVal) => {
    //   console.log('currentVal,prevVal :>> ', currentVal, prevVal)
    // })  //会有warning，不能写成nameObj.name

    const stop = watchEffect(() => {
      console.log('watchEffect')
      console.log('nameObj.name :>> ', nameObj.name)
      setTimeout(() => {
        stop()
      }, 5000)
    })
    const { name, englishName } = toRefs(nameObj)

    return { name, englishName }
  }
}
</script>
