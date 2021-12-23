<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <div
      class="nearby__item"
      v-for="item in nearbyList"
      :key="item.id"
    >
      <img
        :src="item.imgUrl"
        class="nearby__item__img"
      >
      <div class="nearby__content">
        <div class="nearby__content__title">{{item.title}}</div>
        <div class="nearby__content__tags">
          <span
            class="nearby__content__tag"
            v-for="(innerItem,innerIndex) in item.tags"
            :key="innerIndex"
          >{{innerItem}}</span>
        </div>
        <p class="nearby__content__highlight">{{item.desc}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nearby',
  setup () {
    const nearbyList = [
      {
        id: 1,
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
        title: '沃尔玛',
        tags: ['月售1万+', '配送费0元起', '满减优惠'],
        desc: 'VIP尊享89元减4元运费'
      },
      {
        id: 2,
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
        title: '沃尔玛',
        tags: ['月售1万+', '配送费0元起', '满减优惠'],
        desc: 'VIP尊享89元减4元运费'
      },
      {
        id: 3,
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
        title: '沃尔玛',
        tags: ['月售1万+', '配送费0元起', '满减优惠'],
        desc: 'VIP尊享89元减4元运费'
      },
      {
        id: 4,
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
        title: '沃尔玛',
        tags: ['月售1万+', '配送费0元起', '满减优惠'],
        desc: 'VIP尊享89元减4元运费'
      }
    ]
    return { nearbyList }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixins.scss';
@import '../../style/viriables.scss';
.nearby {
  &__title {
    margin: 0.16rem 0 0.02rem 0;
    font-size: 0.18rem;
  }
  &__item {
    display: flex;
    padding: 0.12rem 0 0 0;
    &__img {
      margin-right: 0.16rem;
      width: 0.56rem;
      height: 0.56rem;
    }
  }
  &__content {
    flex: 1;
    padding-bottom: 0.12rem;
    border-bottom: 1px solid $content-bgcolor;
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
      color: #e93b3b;
    }
  }
}
</style>
