<template>
  <div class="card">
    <div class="check">
      <div class="check__icon">
        <img
          src="http://www.dell-lee.com/imgs/vue3/basket.png"
          class="check__icon__img"
        >
        <div class="check__icon__tag">{{total}}</div>
      </div>
      <div class="check__info">
        总计：<span class="check__info__price">&yen; {{totalPrice}}</span>
      </div>
      <div class="check__btn">去结算</div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

// 获取购物车信息
const useCardInfoEffect = () => {
  const shopId = useRoute().params.id
  const store = useStore()
  const cardList = store.state.cardList
  const total = computed(() => {
    const productList = cardList[shopId]
    let count = 0
    if (productList) {
      Object.keys(productList).forEach(item => {
        const product = productList[item]
        count += product.count
      })
    }
    return count
  })
  const totalPrice = computed(() => {
    const productList = cardList[shopId]
    let price = 0
    if (productList) {
      Object.keys(productList).forEach(item => {
        const product = productList[item]
        price += product.price * product.count
      })
    }
    return price
  })
  return { total, totalPrice }
}
export default {
  name: 'card',
  setup () {
    const { total, totalPrice } = useCardInfoEffect()
    return { total, totalPrice }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.card {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  line-height: 0.49rem;
}
.check {
  display: flex;
  width: 100%;
  line-height: 0.49rem;
  height: 0.49rem;
  border-top: 1px solid $content-bgcolor;
  &__icon {
    width: 0.84rem;
    position: relative;
    &__img {
      display: block;
      width: 0.26rem;
      height: 0.24rem;
      margin: 0.12rem auto;
    }
    &__tag {
      position: absolute;
      width: 0.4rem;
      height: 0.2rem;
      line-height: 0.2rem;
      padding: 0 0.02rem;
      background: $highLight-fontcolor;
      border-radius: 0.1rem;
      top: 0.02rem;
      left: 0.5rem;
      text-align: center;
      font-size: 0.12rem;
      color: $bg-color;
      transform: scale(0.5);
      transform-origin: left center;
    }
  }
  &__info {
    flex: 1;
    color: $content-fontcolor;
    font-size: 0.12rem;
    &__price {
      color: $highLight-fontcolor;
      font-size: 0.18rem;
    }
  }
  &__btn {
    width: 0.98rem;
    background: #4fb0f9;
    color: $bg-color;
    font-size: 0.14rem;
    text-align: center;
  }
}
</style>
