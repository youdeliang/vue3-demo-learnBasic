<template>
  <div>
    <transition
      :css="false"
      @before-enter="handleBeforeEnter"
      @enter="handleActiveEnter"
      @after-enter="handleEnterEnd"
    >
      <div v-if="show">
        <div>4-lessson2</div>
        <div>nice to meet you</div>
      </div>
    </transition>
    <button @click="handleClick">切换</button>
  </div>
</template>

// 单组件的过渡和动画
// transition  配合固定类名 如果transition标签有name属性的话(<transtion name="hello"/>)，其对应的类名从例如：v-enter-form->hello-enter-from
//修改transition的类名：(<transtion enter-active-class='hello' leave-active-calss="bye"/>)，
// 其对应的类名从例如：v-enter-active->hello,v-leave-active->bye

// 可以引用animate.css动画 (<transtion enter-active-class='animate__animated animate__backInDown'/>)
//<transtion type='transition' /> 以过渡效果为准，超过时间后，不执行
// <transtion :duration='1000' /> 以duration的值为准（duration的值可以为对象，:duration="{enter:1000,leave:3000}"）
// <transtion :css="false" /> 指的是不用css的样式，用js的样式
//after-enter 动画执行完的操作,需要enter对应的函数执行done(),这样才会执行after-enter对应的函数

<script>
export default {
  name: 'lessonTwo',
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
    },
    // 当div做入场时的动画，el是元素
    handleBeforeEnter (el) {
      el.style.color = 'red'
    },
    handleActiveEnter (el, done) {
      const animation = setInterval(() => {
        const color = el.style.color
        if (color === 'red') {
          el.style.color = 'green'
        } else {
          el.style.color = 'red'
        }
      }, 1000)
      setTimeout(() => {
        clearInterval(animation)
        done()
      }, 5000)
    },
    handleEnterEnd () {
      console.log(123)
    }
  }
}
</script>
<style scoped>
/* 过渡 */
/* .v-enter-from {
  opacity: 0;
} */
/* .v-enter-to {
  opacity: 1;
} */
/* 看transition原理 */
/* .v-leave-from {
  opacity: 1;
} */
/* .v-enter-active,
.v-leave-active {
  transition: opacity 3s ease-in;
}
.v-leave-to {
  opacity: 0;
} */

/* 动画 */
@keyframes shake {
  0%{
    transform: translateX(-100px);
  }
  50%{
    transform: translateX(-50px);
  }
  100%{
    transform: translateX(50px);
  }
}
.v-enter-from{
  color:red;
}
.v-enter-active{
  animation: shake 3s;
  transition: color 10s ease-in;
}
.v-leave-active{
  color:red;
  animation: shake 3s;
  transition: all 10s ease-in;
}
/* .v-enter-active,
.v-leave-active {
  animation: shake 3s ease-in;
} */
</style>
