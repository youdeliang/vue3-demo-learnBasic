<template>
  <div>
    <div>lesson2</div>
    <div>
      <div>{{name}}</div>
      <div>{{nameObj.say}}</div>
      <div @click="handleClick">{{say}}</div>
    </div>
  </div>
</template>

// ref,reactive响应式引用的用法和原理
// 原理：通过proxy对数据进行封装，当数据变化时，触发模板等内容的更新
// ref 处理基础数据类型
// reactive

<script>
import { ref, reactive, readonly, toRefs } from 'vue'
export default {
  name: 'lessonTwo',
  setup (props, context) {
    //   proxy，'dell'变成proxy({value:'dell})这样一个响应式引用
    // 值不具有响应式特性
    const name = ref('dell')
    setTimeout(() => {
      name.value = 'lee'
    }, 2000)
    const nameObj = reactive({ say: 'nicee' })
    setTimeout(() => {
      nameObj.say = 'hello~'
    }, 2000)
    // toRefs:proxy({name:'dell',age:26})  =>  {name:proxy({value:'dell'}),age:proxy({value:'26})}
    const { say } = toRefs(nameObj)
    const copyNameObj = readonly(nameObj)
    setTimeout(() => {
      copyNameObj.say = 'hello~'
    }, 2000)
    return { name, nameObj, copyNameObj, say }
  },
  methods: {
    handleClick () {
      console.log('this.$options :>> ', this.$options.setup())
    }
  }
}
</script>
