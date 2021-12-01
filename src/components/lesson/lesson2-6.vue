<template>
  <div>lesson-2-6</div>
  <div>{{formatString(info)}}</div>
  <div>computed：{{total}}</div>
  <div>methods：{{getTotal()}}</div>
  <div>watch：{{price}}</div>
</template>

<script>
// data methods computed watcher
// this默认指向vue的实列，不能写箭头函数，因为箭头函数的this指向外层的this，最外层的this指向window
// computed 和method都能实现的一个功能，建议使用computed，因为又缓存
// computed 和wathcer都能事项的功能，建议使用computed，因为更简洁
export default {
  name: 'lesson2-6',
  props: {},
  data () {
    return {
      info: 'hello world',
      count: 5,
      price: 2,
      newTotal: 10
    }
  },
  //  异步
  watch: {
    // 当price发生变化时，函数会执行
    price (cur) {
      this.newTotal = cur * this.count
    }
  },
  // 当计算属性依赖的内容发生变更时，才会更新执行计算
  computed: {
    total () {
      //   return this.count * this.price
      return Date.now() + this.count
    }
  },
  methods: {
    // 只要页面重新渲染，才会更新计算
    getTotal () {
      return Date.now()
    },
    formatString (string) {
      return string.toUpperCase()
    }
  }
}
</script>
