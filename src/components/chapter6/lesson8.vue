<template>
  <div>
    <div>lesson8</div>
    <div>
      <span @click="handleAdd">{{count}}--{{countFive}}</span>
    </div>
  </div>
</template>

// computed方法生成计算属性

<script>
import { ref, computed } from 'vue'
export default {
  name: 'lessonEghit',
  setup () {
    const count = ref(0)
    const handleAdd = () => {
      count.value += 1
    }
    // const countFive = computed(() => {
    //   return count.value + 5
    // })
    const countFive = computed({
      get: () => {
        return count.value + 5
      },
      set: (params) => {
        count.value = params - 4
      }
    })
    setTimeout(() => {
      countFive.value = 100
    }, 2000)
    return { count, handleAdd, countFive }
  }
}
</script>
