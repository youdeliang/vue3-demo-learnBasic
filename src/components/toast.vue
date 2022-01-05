<template>
  <div class="toast">
    <div>{{msg}}</div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'Toast',
  props: ['msg'],
  setup () {

  }
}
export const useToastEffect = () => {
  const showData = reactive({
    msg: '',
    show: false
  })
  const showToast = (msg) => {
    showData.show = true
    showData.msg = msg
    setTimeout(() => {
      showData.show = false
    }, 2000)
  }

  const { msg, show } = toRefs(showData)

  return { msg, show, showToast }
}
</script>

<style lang="scss" scoped>
@import '../style/viriables.scss';
.toast {
  background: rgba(0, 0, 0, 0.3);
  color: $bg-color;
  text-align: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0.2rem;
  border-radius: 0.05rem;
}
</style>
