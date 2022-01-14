<template>
  <div class="content">
    <div class="category">
      <div
        :class="{'category__item':true,'category__item--active': currentTab===item.tab? true:false }"
        v-for="item in tabList"
        :key="item"
        @click="()=>handleTabClick(item.tab)"
      >{{item.name}}</div>
    </div>
    <div class="product">
      <div
        class="product__item"
        v-for="item in list"
        :key="item._id"
      >
        <img
          class="product__item__img"
          :src="item.imgUrl"
          alt=""
        >
        <div class="product__item__content">
          <h4 class="product__item__title">{{item.name}}</h4>
          <p class="product__item__sales">月售 {{item.sales}} 件</p>
          <div class="product__item__price">
            <span class="product__item__yen">&yen;{{item.price}}</span>
            <span class="product__item__origin">&yen;{{item.oldPrice}}</span>
          </div>
        </div>
        <div class="product__num">
          <span
            class="product__num__minus"
            @click="()=>changeCardItemInfo(shopId,item._id,item,-1)"
          >-</span>
          {{cardList?.[shopId]?.[item._id]?.count || 0}}
          <span
            class="product__num__add"
            @click="()=>changeCardItemInfo(shopId,item._id,item,1)"
          >+</span>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { reactive, toRefs, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { get } from '../../utils/request'

const tabList = [{
  name: '全部商品',
  tab: 'all'
}, {
  name: '秒杀',
  tab: 'secskill'
}, {
  name: '水果',
  tab: 'fruit'
}]

// 与内容相关的逻辑
const useContentEffect = (currentTab, shopId) => {
  const data = reactive({ list: [] })
  const getList = async () => {
    const result = await get(`/api/shop/${shopId}/products`, { tab: currentTab.value })
    if (result?.errno === 0 && result?.data) {
      data.list = result.data
    }
  }
  watchEffect(() => getList())
  const { list } = toRefs(data)
  return { list }
}
// 与tab相关的逻辑
const useTabEffect = () => {
  const currentTab = ref(tabList[0].tab)
  const handleTabClick = (tab) => {
    currentTab.value = tab
  }

  return { handleTabClick, currentTab }
}

// 结算
const useCardEffect = () => {
  const store = useStore()
  const { cardList } = toRefs(store.state)
  const changeCardItemInfo = (shopId, productId, item, number) => {
    store.commit('changeCardItemInfo', { shopId, productId, item, number })
  }
  return { cardList, changeCardItemInfo }
}

export default {
  name: 'content',
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const { handleTabClick, currentTab } = useTabEffect()
    const { list } = useContentEffect(currentTab, shopId)
    const { cardList, changeCardItemInfo } = useCardEffect()

    return {
      handleTabClick, changeCardItemInfo, list, tabList, currentTab, cardList, shopId
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.content {
  position: absolute;
  top: 1.34rem;
  bottom: 0.5rem;
  display: flex;
  left: 0;
  right: 0;
}
.category {
  overflow-y: scroll;
  width: 0.76rem;
  height: 100%;
  &__item {
    line-height: 0.4rem;
    font-size: 0.14rem;
    text-align: center;
    background: $search-bacolor;
    color: $content-fontcolor;
    &--last {
      border-bottom-right-radius: 0.1rem;
    }
    &--active {
      background: $bg-color;
    }
    &--next {
      border-top-right-radius: 0.1rem;
    }
  }
}
.product {
  flex: 1;
  overflow-y: scroll;
  &__item {
    position: relative;
    display: flex;
    padding: 0.12rem 0;
    margin: 0 0.16rem;
    border-bottom: 1px solid $content-bgcolor;
    &__img {
      width: 0.68rem;
      height: 0.68rem;
      margin-right: 0.16rem;
    }
    &__content {
      flex: 1;
      overflow: hidden;
    }
    &__title {
      margin: 0;
      line-height: 0.2rem;
      font-style: 0.14rem;
      @include ellipsis;
    }
    &__sales {
      margin: 0.06rem 0;
      line-height: 0.16rem;
      font-style: 0.12rem;
      color: $content-fontcolor;
    }
    &__price {
      margin: 0.06rem 0;
      line-height: 0.16rem;
      font-style: 0.12rem;
      color: $highLight-fontcolor;
    }
    &__yen {
      font-size: 0.12rem;
    }
    &__origin {
      margin-left: 0.06rem;
      line-height: 0.2rem;
      font-style: 0.12rem;
      color: $light-fontcolor;
      text-decoration: line-through;
    }
  }
  &__num {
    position: absolute;
    right: 0;
    line-height: 0.16rem;
    bottom: 0.12rem;
    &__minus,
    &__add {
      display: inline-block;
      height: 0.2rem;
      width: 0.2rem;
      text-align: center;
      font-size: 0.25rem;
      border-radius: 50%;
    }
    &__minus {
      border: 1px solid $medium-fontcolor;
      color: $medium-fontcolor;
      margin-right: 0.05rem;
    }
    &__add {
      color: $bg-color;
      background: $btn-bgcolor;
      margin-left: 0.05rem;
    }
  }
}
</style>
