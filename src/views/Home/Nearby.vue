<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <router-link
      v-for="item in nearbyList"
      :key="item.id"
      :to="`/shop/${item._id}`"
    >
      <ShopInfo
        :item="item"
        v-show="item.imgUrl"
      />
    </router-link>
  </div>
</template>

<script>
import { get } from '../../utils/request'
import { ref } from 'vue'
import ShopInfo from '../../components/shopInfo.vue'
const useNearByListEffect = () => {
  const nearbyList = ref([])
  const getNearbyList = async () => {
    const result = await get('/api/shop/hot-list')
    nearbyList.value = result.data
  }
  return { nearbyList, getNearbyList }
}
export default {
  name: 'Nearby',
  components: { ShopInfo },
  setup () {
    const { nearbyList, getNearbyList } = useNearByListEffect()
    getNearbyList()

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
  a {
    text-decoration: none;
  }
}
</style>
