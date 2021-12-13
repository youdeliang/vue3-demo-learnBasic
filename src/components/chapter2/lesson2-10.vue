<template>
  <!-- 循环和判断尽量不在一个标签里 可以用template的标签 -->
  <!-- 数组循环 -->
  <div
    v-for="(item,index) in listArray"
    :key="index"
  >{{item}}</div>
  <button @click="handleAdd">新增</button>
  <!-- 对象循环 -->
  <div
    v-for="(value,key,index) in listObject"
    :key="value"
  >{{value}}--{{key}}--{{index}}</div>
  <div @click="handleAddObj">新增对象</div>
  <!-- 循环数字 -->
  <div
    v-for="item in 10"
    :key="item"
  >{{item}}</div>
</template>
<script>
export default {
  name: 'lesson2-10',
  data () {
    return {
      listArray: ['hello', 'world'],
      listObject: {
        firstName: 'dell',
        lastNmae: 'lee',
        job: 'teacher'
      }
    }
  },
  methods: {
    handleAdd () {
      // 1.数组的变更函数 push ,pop,unshift,shift,splice,sort,reverse
      // 2.直接替换数组
      // 3.直接更新数组的内容
      this.listArray[1] = 'nice'
    },
    handleAddObj () {
      // 直接添加对象的内容，也可以自动的展示出来
      console.log('1 :>> ', 1)
    }
  }
}
</script>
