<template>
  <div>
    <div>lesson12</div>
    <div>
      <input type="text">
    </div>
  </div>
</template>

// 动态组件和异步组件
// 动态组件：根据数据的变化，结合component这个标签，来随时动态切换组件的实现
// 异步组件：Vue 只有在这个组件需要被渲染的时候才会触发该工厂函数，且会把结果缓存起来供未来重渲染
// 异步组件：是异步执行某些组件的逻辑，叫做异步组件

<script>
export default {
  name: 'lessonTwl',
  data () {
    return {}
  },
  props: {},
  setup () {

  },
  mounted () {
  },
  methods: {
    handleClick () {
      alert(123)
    }
  }
}
</script>
