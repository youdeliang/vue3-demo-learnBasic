//更加底层的render函数
// template=>render=>h()=>虚拟Dom(JS对象)=>真实Dom=>展示到页面上

<script>

import { h } from 'vue'
export default {
  name: 'lessonSix',
  props: ['level'],
  setup () {

  },
  render () {
    // h()函数是返回虚拟Dom的 虚拟Dom
    return h('h' + this.level, {}, this.$slots.default())
    // 第一个参数是标签，第二个参数是属性，第三个参数是子节点或者内容  (数组嵌套)
  }
}
</script>
