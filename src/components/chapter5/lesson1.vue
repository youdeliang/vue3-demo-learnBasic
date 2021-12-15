<template>
  <div>
    <div>lesson1</div>
    <div>
      <div>{{this.$options.title}}</div>
      <div>{{num}}</div>
      <div>{{count}}</div>
      <button @click="handleClick">点击</button>
    </div>
  </div>
</template>

// Mixin混入的基础的语法(vue3推荐使用composition接口或者插件)
// 组件data,methods的优先级高于mixin data,methods的优先级,(有相同的会被覆盖)
// 生命周期函数先执行mixin里面的,再执行自己的
// 局部mixin,要引入才能在该组件使用的,其子组件使用是不行的,除非在子组件也因引用了mixin
// 全局的mixin(一般不推荐使用 ),(在main.js文件中添加)
// 自定义属性,组件自定义属性优先级高于mixin属性的优先级,(通过mixins的合并策略修改优先级???)
// this.$options.title,获取mixin的title

<script>
import myMixin from '../../mixins/common'
export default {
  name: 'lessonOne',
  title: 'hello world',
  data () {
    return {
      num: 1
    }
  },
  mixins: [myMixin],
  setup () {

  },
  created () {
    console.log('created')
  },
  methods: {
    handleClick () {
      console.log('handleClcik')
    }
  }
}
</script>
