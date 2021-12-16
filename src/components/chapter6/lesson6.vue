<template>
  <div>
    <div>lesson6</div>
    <div>
      <div><input
          type="text"
          @input="handleChange"
          :value="inputVal"
          v-focus
        ><button @click="addItem(inputVal)">提交</button></div>
      <ul>
        <li
          v-for="item in list"
          :key="item"
        >{{item}}</li>
      </ul>
    </div>
  </div>
</template>

// 使用CopositionAPI开发todoList

<script>
import { ref, reactive } from 'vue'
export default {
  name: 'lessonSix',
  directives: {
    focus: {
      mounted (el) {
        el.focus()
      },
      updated (el) {
        el.focus()
      }
    }
  },
  setup (props, context) {
    //   流程的调度
    const { list, addItem } = listReactiveEffect()
    const { inputVal, handleChange } = inputReactiveEffect()
    return {
      list, addItem, inputVal, handleChange
    }
  }
}
// 关于list的封装
const listReactiveEffect = () => {
  const list = reactive([])
  const addItem = (item) => {
    list.push(item)
  }
  return {
    list,
    addItem
  }
}
// 关于input的值
const inputReactiveEffect = () => {
  const inputVal = ref('')
  const handleChange = (e) => {
    inputVal.value = e.target.value
  }
  return {
    inputVal,
    handleChange
  }
}
</script>
