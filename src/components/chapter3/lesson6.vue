<template>
  <div @click="handeItemClick">{{app}}</div>
</template>

// 父子组件如何通过事件进行通信
<script>
export default {
  name: 'lessonSix',
  data () {
    return {}
  },
  props: ['app'],
  setup () {

  },
  mounted () {
  },
  //   emits: ['add'],
  //   emits: {
  //     add: (count) => {
  //       if (count > 0) {
  //         return true
  //       } else {
  //         return false
  //       }
  //     }
  //   },
  methods: {
    handeItemClick () {
      // 向外触发addOne事件
      //   this.$emit('addOne')
      //   this.$emit('add', 2, 3)
      //   this.$emit('add', this.count + 3)
      this.$emit('update:app', this.app + 4)
    }
  }
}
</script>
