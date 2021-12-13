<template>
  <div>lesson9</div>
  <div>
    <input />
    <span @click="handleClick">
      <slot>default value</slot>
    </span>
  </div>
</template>

//slot 插槽
// slot中使用的数据的作用域问题
// slot 无法绑定事件，可以在外层加个span标签，事件绑定在span里
// 可以传标签、字符串、子组件
// 父模板里调用的数据属性，使用的都是父模板里的数据
// 子模板里调用的数据属性，使用的都是子模板里的数据
// 没传东西的话，就会显示默认值<slot>default value</slot>

<script>
export default {
  name: 'lessonNine',
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
