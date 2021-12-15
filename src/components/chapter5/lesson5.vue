<template>
  <div>
    <div>lesson5</div>
    <div class="area">
      <button @click="handleClick">按钮</button>
      <teleport to="#app">
        <div class="mask" v-show="show">
          {{message}}
        </div>
        </teleport>
    </div>
  </div>
</template>
// teleport传送门功能
// 可以挂载到其它dom节点上
<script>
export default {
  name: 'lessonFive',
  data () {
    return {
      show: false,
      message: 'hello'
    }
  },
  setup () {

  },
  methods: {
    handleClick () {
      this.show = !this.show
    }
  }
}
</script>

<style scoped>
.area{
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
background: green;
height: 400px;
width: 200px;
}
.mask{
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: #333;
  opacity: .5;
  color:#fff;
}
</style>
