<template>
  <div>
    <div>lesson13</div>
    <div
      @click="handleClick"
      v-once
    >
      {{modelValue}}
    </div>
    <div ref="countString">
      {{countString}}
    </div>
    <grandson />
  </div>
</template>

// v-once:让某个元素渲染一次
// ref mounted里写,  实际上获取Dom节点用的一个语法，获取子组件的引用的语法
// provide/inject
<script>
import Grandson from './grandson.vue'
export default {
  components: { Grandson },
  name: 'lessonThir',
  data () {
    return {
      countString: 'nice'
    }
  },
  props: { modelValue: Number },
  setup () {

  },
  mounted () {
    this.$refs.countString.innerHTML = 'nice to meet you'
  },
  methods: {
    handleClick () {
      this.$emit('update:modelValue', this.modelValue + 1)
    },
    sayHello () {
      console.log('hello')
    }
  }
}
</script>
