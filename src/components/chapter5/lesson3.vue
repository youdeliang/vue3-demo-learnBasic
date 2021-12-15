<template>
  <div>
    <div>lesson1</div>
    <div
      v-pos:left="200"
      class="header"
    >
      <input
        type="text"
        v-focus
      >
    </div>
  </div>
</template>
// 开发实现Vue中的自定义指令
// 局部指令
// 全局指令
// 指令有生命周期函数，函数的参数，指令可以跟参数和参数值
<script>
export default {
  name: 'lessonThree',
  setup () {

  },
  // 局部指令
  directives: {
    focus: {
      mounted (el) {
        el.focus()
      }
    },
    pos: {
      mounted (el, binding) {
        console.log('binding :>> ', binding)
        el.style[binding.arg] = binding.value + 'px'
      }
    }
  }
}
</script>

<style scoped>
.header {
  position: absolute;
}
</style>
