<template>
  <div :message="$attrs.message">counter</div>
  <div v-bind="$attrs">counter</div>
  <div>counter</div>
</template>

// Non-props
// 不适用props接受父组件参来的参数,而用其它的,
// 会默认作用于子组件根节点，
// inheritAttrs: false,  将这个默认作用取消
// 如果没有根节点，不会有默认作用，
// 1.v-bind="$attrs"
// 2.:message="$attrs.message"
// 3. this.$attrs

<script>
export default {
  name: 'lessonFive',
  data () {
    return {}
  },
  //   inheritAttrs: false,
  props: {},
  setup () {

  },
  mounted () {
    console.log('this.$attrs :>> ', this.$attrs)
  },
  methods: {

  }
}
</script>
