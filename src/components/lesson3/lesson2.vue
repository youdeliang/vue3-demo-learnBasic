<template>
  <div>lesson2</div>
  <div @click="handleClick">{{typeof content}}</div>
  <div>{{msg}}</div>
  <div @click="counter += 1">单项数据流{{counter}}</div>
</template>

// 动态传参
// 静态传参

// 校验类型: String, Boolean,Array,Object,Function,Symbol,Number
// required 必填项
// default 默认值
// validator 深度校验 (最终返回true或者false)

// lesson 3-4
// v-bind="params"
// :content="params.content" :a="params.a" :b="params.b" :c="params.c"
// 属性传的时候,使用content-abc  这种命名时候,使用contentAbc命名
// 单项数据流:子组件可以使用父组件传过来的数据,但是绝对不能修改传递过来的数据
// 可以避免数据耦合
<script>
export default {
  name: 'lessonTwo',
  //   props: {
  //     content: Function,
  //     msg: {
  //       type: Number,
  //       required: true,
  //       validator: function (value) {
  //         return value < 1000
  //       },
  //       default: function () {
  //         return 1234
  //       }
  //     },
  //     a: Number,
  //     contentAbc: Number,
  //     count: Number
  //   },
  props: ['content', 'msg', 'a', 'contentAbc', 'count'],
  data () {
    return {
      counter: this.count
    }
  },
  setup () {

  },
  methods: {
    handleClick () {
      console.log(456)
      console.log('a :>> ', this.a)
      console.log('contentAbc :>> ', this.contentAbc)
      console.log('count :>> ', this.count)
      //   this.content()
    }
  }
}
</script>
