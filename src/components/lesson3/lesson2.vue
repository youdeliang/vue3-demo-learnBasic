<template>
  <div>lesson2</div>
  <div @click="handleClick">{{typeof content}}</div>
  <div>{{msg}}</div>
</template>

// 动态传参
// 静态传参

// 校验类型: String, Boolean,Array,Object,Function,Symbol,Number
// required 必填项
// default 默认值
// validator 深度校验 (最终返回true或者false)
<script>
export default {
  name: 'lessonTwo',
  props: {
    content: Function,
    msg: {
      type: Number,
      required: true,
      validator: function (value) {
        return value < 1000
      },
      default: function () {
        return 1234
      }
    }
  },
  setup () {

  },
  methods: {
    handleClick () {
      console.log(456)
      this.content()
    }
  }
}
</script>
