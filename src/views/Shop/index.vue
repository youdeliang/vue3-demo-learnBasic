<template>
  <div class="wrapper">
    <div class="search">
      <div
        class="search__back iconfont"
        @click="handleBack"
      >&#xe679;</div>
      <div class="search__content">
        <span class="search__content__icon iconfont">&#xe65c;</span>
        <input
          class="search__content__input"
          placeholder="请输入商品名称"
        />
      </div>
    </div>
    <shopInfo
      :hideBorder="true"
      :item="item"
      v-show="item.imgUrl"
    />
    <Content />
    <Card />
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { get } from '../../utils/request'
import ShopInfo from '../../components/shopInfo.vue'
import Content from './Content.vue'
import Card from './Card.vue'

const useShopInfoEffect = () => {
  const route = useRoute()
  const data = reactive({ item: {} })
  const getItemData = async () => {
    const result = await get(`/api/shop/${route.params.id}`)
    if (result?.errno === 0 && result?.data) {
      data.item = result.data
    }
  }
  const { item } = toRefs(data)
  return { item, getItemData }
}

const useHandleBack = () => {
  const router = useRouter()
  const handleBack = () => {
    router.back()
  }
  return handleBack
}
export default {
  name: 'shop',
  components: {
    ShopInfo,
    Content,
    Card
  },
  setup () {
    const { item, getItemData } = useShopInfoEffect()
    const handleBack = useHandleBack()

    getItemData()

    return { handleBack, item }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
.wrapper {
  padding: 0 0.18rem;
}
.search {
  margin: 0.14rem 0 0.04rem 0;
  display: flex;
  &__back {
    font-size: 0.24rem;
    width: 0.3rem;
    color: #b6b6b6;
  }
  &__content {
    flex: 1;
    display: flex;
    background: $search-bacolor;
    border-radius: 0.16rem;
    line-height: 0.32rem;
    height: 0.32rem;
    &__icon {
      width: 0.44rem;
      text-align: center;
      color: $search-fontcolor;
    }
    &__input {
      width: 100%;
      background: $search-bacolor;
      outline: none;
      border: none;
      border-radius: 0.16rem;
      color: $content-fontcolor;
      font-size: 0.14rem;
      &::placeholder {
        color: $content-fontcolor;
      }
    }
  }
}
</style>
