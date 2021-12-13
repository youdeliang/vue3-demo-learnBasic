<template>
  <div class="hello">
    <!-- 可以写表达式 -->
    <h1 v-once>{{ msg }}</h1>
    <div @[event]="handleClick">{{Math.max(1,2)}}</div>
    <h2 v-html="message" :title="title"></h2>
    <input v-if="show" :[name]="title" type="text" :disabled="disabled">
    <form action="https://www.baidu.com" @click.prevent="handleSubmit">
      <button type="submit">提交</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      message: '<strong>nice to meet you </strong>',
      title: 'title-title',
      disabled: false,
      show: true,
      name: 'title',
      event: 'click'
    }
  },
  methods: {
    handleClick () {
      console.log('click')
    },
    handleSubmit () {}
  },
  // 在实列生成之前会自动执行的函数
  beforeCreate () {
    console.log('beforeCreate')
  },
  // 在实例生成之后会自动执行的函数
  created () {
    console.log('created')
  },
  // 在模板已经被编程函数之后立即执行的函数  --- 在组件内容被渲染到页面之前自动执行的函数
  beforeMount () {
    console.log(document.getElementById('app').innerHTML, 'beforeMount')
    console.log('beforeMount')
  },
  // 在组件内容被渲染到页面之后自动执行的函数
  mounted () {
    console.log(document.getElementById('app').innerHTML, 'mounted')
    console.log('mounted')
  },
  // data中数据发生变化时会立即自动执行的函数
  beforeUpdate () {
    console.log(document.getElementById('app').innerHTML, 'beforeUpdate')
    console.log('beforeUpdate')
  },
  // 当data中的数据发生变化,页面会重新渲染后,会自动执行的函数
  updated () {
    console.log(document.getElementById('app').innerHTML, 'updated')
    console.log('updated')
  },
  // 当vue实列销毁时，会自动执行的函数
  beforeUnmount () {
    console.log(document.getElementById('app').innerHTML, 'beforeUnmount')
    console.log('beforeUnmount')
  },
  // 当vue应用失效时，且dom完全销毁之后，会立即执行函数
  unmounted () {
    console.log(document.getElementById('app').innerHTML, 'unmounted')
    console.log('unmounted')
  }
}
</script>
