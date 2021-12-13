// $event,这个函数参数，表示原生事件
// 事件修饰符：stop，prevent,capture,self,once,passive
// 按键修饰符：enter,tab,delete,up,down,left,right
// 鼠标修饰符: left,right,middle
// 精确修饰符：exact
<template>
  <div>{{counter}}</div>
  <!-- 绑定一个事件，执行多个函数 -->
  <button @click="handleClick1(),handleClick2()">button</button>
  <!-- 阻止冒泡：stop； -->
  <div @click="handleClick1">
    <button @click.stop="handleClick2">冒泡btn</button>
  </div>
  <!-- 点击子元素不触发父元素，且点击父元素的自己的，才起作用-->
  <div @click.self="handleClick1">
    {{counter}}
    <button @click.stop="handleClick2">冒泡btn</button>
  </div>
  <!-- 按键修饰符 -->
  <div>
    <input @keydown.enter="handleKeydown">
  </div>
  <!-- 鼠标修饰符 -->
  <div>
    <div @click.left="handleDelete">123</div>
  </div>
  <!-- 精确修饰符-->
  <div @click.ctrl.exact="handleExact"></div>
</template>

<script>
export default {
  name: 'lesson2-12',
  data () {
    return {
      counter: 0
    }
  },
  methods: {
    handleClick1 () {
      console.log('1 :>> ', 1)
    },
    handleClick2 () {
      console.log('2 :>> ', 2)
    },
    handleKeydown () {
      console.log('keydown :>> ', 'keydown')
    },
    handleDelete () {
      console.log('left :>> ', 'left')
    },
    handleExact () {
      console.log('exact')
    }
  }
}
</script>
