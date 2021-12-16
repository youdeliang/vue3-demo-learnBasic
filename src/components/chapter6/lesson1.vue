<template>
  <div>
    <div>lesson1</div>
    <div>
      <div>{{name}}</div>
    </div>
  </div>
</template>

// Setup函数的使用

<script>
export default {
  name: 'lessonOne',
  //   在created 实列被完全初始化之前执行; return的对象会暴露在外面，template模板可以使用
  //   在setup不能使用this语法，但是实列能调用它
  //   props：，context：
  setup (props, context) {
    return {
      name: 'dell'
    }
  }
}
</script>
