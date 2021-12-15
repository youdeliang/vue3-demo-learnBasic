<template>
  <div>4-lessson1</div>
  <div :class="animate">hello world</div>
  <div :class="trans">nice to meet you</div>
  <div
    class="transition"
    :style="styleObj"
  >nice a day</div>
  <button @click="handleClick">切换</button>
</template>

// 过渡，从一个状态缓慢变成另一个状态
// 动画：一个元素运动的状态

<script>
export default {
  name: 'lessonOne',
  data () {
    return {
      animate: {
        animation: true
      },
      trans: {
        transition: true,
        blue: true,
        green: false
      },
      styleObj: {
        color: 'green'
      }
    }
  },
  setup () {

  },
  methods: {
    handleClick () {
      this.animate.animation = !this.animate.animation
      this.trans.blue = !this.trans.blue
      this.trans.green = !this.trans.green
      if (this.styleObj.color === 'blue') {
        this.styleObj.color = 'green'
      } else {
        this.styleObj.color = 'blue'
      }
    },
    handleBeforeEnter (el) {
      el.style.color = 'red'
    },
    handleActiveEnter (el, down) {
      setInterval(() => {
        const color = el.style.color
        if (color === 'red') {
          el.style.color = 'green'
        } else {
          el.style.color = 'red'
        }
      }, 1000);
    }
  }
}
</script>

<style scoped>
/* 动画 */
@keyframes leftToRight {
  0% {
    transform: translateX(-100px);
  }
  50% {
    transform: translateX(-50px);
  }
  0% {
    transform: translateX(0px);
  }
}
.animation {
  animation: leftToRight 3s;
}
/* 过渡 */
.transition {
  transition: 3s color ease;
}
.blue {
  color: blue;
}
.green {
  color: green;
}
</style>
