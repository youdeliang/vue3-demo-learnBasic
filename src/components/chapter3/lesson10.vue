<template>
  <div>lesson10 -lesson11</div>
  <div>
    <slot name="header"></slot>
    <slot
      name="content"
      v-for="item in list"
      :key="item"
      :item="item"
    ></slot>
    <slot name="footer"></slot>
  </div>
  <div
    v-for="item in list"
    :key="item"
  >{{item}}</div>
</template>

// 具名插槽
// 插槽简写 #header
// 作用域插槽，传递数据，#content="slotProps"
// vue组件插件用的比较多。

<script>
export default {
  name: 'lessonTen',
  data () {
    return {
      list: [1, 2, 3]
    }
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
