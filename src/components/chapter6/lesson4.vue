<template>
  <div>
    <div>lesson4</div>
    <div>
      <div @click="handleClick">dsfsdafas</div>
      <!-- <div @click="handleClick">{{data.name}}</div>
      <div>{{name}}</div>
      <div>{{age}}</div> -->
      <slot></slot>
    </div>
  </div>
</template>

// toRef以及context参数

<script>
// import { reactive, toRefs, toRef, h } from 'vue'
export default {
  name: 'lessonFour',
  setup (props, context) {
    // const data = reactive({ name: 'dell' })
    // const { name } = toRefs(data)
    // 如果一开始data没有age属性，，toRefs从data里面找数据，如果找不到，会给个undefined,
    // toRef从data里面找数据，如果找不到，会给个空数据
    // const age = toRef(data, 'age')
    // setTimeout(() => {
    //   name.value = 'lee'
    //   age.value = 26
    // }, 2000)

    // attrs None-Props属性
    // slots  slots.default() 打印的虚拟dom
    // emit
    const { attrs, slots, emit } = context
    console.log('attrs :>> ', attrs)
    console.log('slots :>> ', slots.default())
    console.log('emit :>> ', emit)

    // return { data, name, age }
    // return () => h('div', {}, [slots.default()])

    function handleClick () {
      emit('change')
    }
    return { handleClick }
  }
}
</script>
