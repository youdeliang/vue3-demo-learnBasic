<template>
  <div>lesson6</div>
  <div>
    <transition-group>
      <span
        v-for="item in list"
        :key="item"
        class="item"
        @click="handleDel(item)"
      >{{item}}</span>
    </transition-group>
    <button @click="handleClick">增加</button>
  </div>
</template>

// 列表动画的实现
// transition-group
// v-move

<script>
export default {
  name: 'lessonSix',
  data () {
    return {
      list: [1, 2, 3]
    }
  },
  setup () {

  },
  methods: {
    handleClick () {
      this.list.unshift(this.list.length + 1)
    },
    handleDel (e) {
      this.list = this.list.filter(item => item !== e)
    }
  }
}
</script>

<style scoped>
.item {
  display: inline-block;
  margin-right: 15px;
}

.v-enter-from {
  opacity: 0;
  transform: translateY(30px);
}
.v-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s;
}
.v-move {
  transition: all 0.5s;
}
.v-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
