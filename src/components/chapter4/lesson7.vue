<template>
  <div>{{num}}</div>
  <button @click="handleAdd">增加</button>
</template>

// 状态动画,svg

<script>
export default {
  name: 'lessonSeven',
  data () {
    return {
      num: 1
    }
  },
  setup () {

  },
  methods: {
    handleAdd () {
      let count = 0
      const animation = setInterval(() => {
        this.num += 1
        count += 1
        if (count === 10) {
          clearInterval(animation)
        }
      }, 100)
    }
  }
}
</script>
