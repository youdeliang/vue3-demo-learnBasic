<template>
  <div class="shop">
    <img
      :src="item.imgUrl"
      class="shop__img"
    >
    <div :class="{'shop__content':true,'shop__content--border':hideBorder?false:true}">
      <div class="shop__content__title">{{item.name}}</div>
      <div class="shop__content__tags">
        <span class="shop__content__tag">销量{{item.sales}}</span>
        <span class="shop__content__tag">售价{{item.expressPrice}}</span>
        <span class="shop__content__tag">￥{{item.expressLimit}}起送</span>
      </div>
      <p class="shop__content__highlight">{{item.slogan}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shopInfo',
  props: ['item', 'hideBorder'],
  setup (props, context) {
  }
}
</script>

<style lang="scss" scoped>
@import '../style/mixins.scss';
@import '../style/viriables.scss';
.shop {
  display: flex;
  padding: 0.12rem 0 0 0;
  &__img {
    margin-right: 0.16rem;
    width: 0.56rem;
    height: 0.56rem;
  }

  &__content {
    flex: 1;
    padding-bottom: 0.12rem;
    &--border {
      border-bottom: 1px solid $content-bgcolor;
    }
    &__title {
      color: $content-fontcolor;
      line-height: 0.22rem;
      font-size: 0.16rem;
    }
    &__tags {
      margin-top: 0.08rem;
      font-size: 0.13rem;
      line-height: 0.18rem;
      color: $content-fontcolor;
      &__tag {
        margin-right: 0.16rem;
      }
    }
    &__highlight {
      margin: 0.08rem 0 0 0;
      line-height: 0.18rem;
      font-size: 0.13rem;
      color: $highLight-fontcolor;
    }
  }
}
</style>
