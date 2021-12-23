<template>
  <div class="wrapper">
    <StaticPart />
    <Nearby />
  </div>
  <Docker />
</template>

<script>
import StaticPart from './StaticPart.vue'
import Docker from './Docker.vue'
import Nearby from './Nearby.vue'
export default {
  name: 'Home',
  components: {
    StaticPart,
    Docker,
    Nearby
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
.wrapper {
  overflow-y: scroll;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0.49rem;
  right: 0;
  padding: 0 0.18rem 0.1rem 0.18rem;
  color: $content-fontcolor;
}
</style>
