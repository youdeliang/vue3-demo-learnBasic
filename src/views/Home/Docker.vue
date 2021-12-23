<template>
  <div class="docker">
    <div
      v-for="(item,index) in dockerList"
      :key="item.icon"
      :class="{'docker__item':true,'docker__item--active':index===0?true:false}"
    >
      <div
        class="iconfont"
        v-html="item.icon"
      ></div>
      <div class="docker__title">{{item.text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Docker',
  setup () {
    const dockerList = [
      { icon: '&#xe867;', text: '首页' },
      { icon: '&#xe638;', text: '购物车' },
      { icon: '&#xe723;', text: '订单' },
      { icon: '&#xe600;', text: '我的' }
    ]

    return { dockerList }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixins.scss';
@import '../../style/viriables.scss';
.docker {
  display: flex;
  height: 0.49rem;
  padding: 0 0.18rem;
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-top: 0.01rem solid $content-bgcolor;
  text-align: center;
  color: $content-fontcolor;
  &__item {
    flex: 1;
    .iconfont {
      margin: 0.07rem 0 0.02rem 0;
      font-size: 0.18rem;
    }
    .docker__title {
      font-size: 0.2rem;
      transform: scale(0.5, 0.5);
      transform-origin: center top;
    }
    &--active {
      color: #1fa4fc;
    }
  }
}
</style>
