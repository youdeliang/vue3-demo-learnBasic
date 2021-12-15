<template>
  <div>
    <div>lesson5-1</div>
    <transition mode="out-in" appear>
      <div v-if="show">hello</div>
      <div v-else>bye</div>
    </transition>
    <button @click="handleClick">切换</button>
  </div>
</template>

// 组件和元素切换动画的实现
// 多个单元素的切换
// <transition mode="out-in"></transition>实现单个元素的切换
// <transition appear></transition>刚进入页面要有动画
// 多组件切换
// 可以使用v-if
// 或者可以使用component标签,动态组件来实现

<script>
export default {
  name: 'lessonFive',
  data () {
    return {
      show: true
    }
  },
  setup () {

  },
  methods: {
    handleClick () {
      this.show = !this.show
    }
  }
}
</script>

<style scoped>
.v-enter-from {
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 2s ease;
}
.v-leave-to {
  opacity: 0;
}
</style>
