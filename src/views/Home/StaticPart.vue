<template>
  <div class="position">
    <span class="iconfont position__icon">&#xe619;</span>
    北京理工大学国防科技圆2号楼10层
    <span class="iconfont position__notice">&#xe60a;</span>
  </div>
  <!-- search -->
  <div class="search">
    <span class="iconfont">&#xe65c;</span>
    <input class="search__text" placeholder="山脉酒店">
  </div>
  <!-- banner -->
  <div class="banner">
    <img
      class="banner__img"
      src="http://www.dell-lee.com/imgs/vue3/banner.jpg"
    />
  </div>
  <!-- icon -->
  <div class="icon">
    <div
      class="icon__item"
      v-for="item in iconList"
      :key="item.iconName"
    >
      <img
        class="icon__item__img"
        :src="`http://www.dell-lee.com/imgs/vue3/${item.iconName}.png`"
      >
      <p class="icon__item__text">{{item.desc}}</p>
    </div>
  </div>
  <!-- gap -->
  <div class="
        gap"
      >
    </div>
</template>

<script>
export default {
  name: 'StaticPart',
  setup () {
    const iconList = [
      { iconName: '超市', desc: '超市便利' },
      { iconName: '菜市场', desc: '菜市场' },
      { iconName: '水果店', desc: '水果店' },
      { iconName: '鲜花', desc: '鲜花绿植' },
      { iconName: '医药健康', desc: '医药健康' },
      { iconName: '家居', desc: '家居时尚' },
      { iconName: '蛋糕', desc: '烘培蛋糕' },
      { iconName: '签到', desc: '签到' },
      { iconName: '大牌免运', desc: '大牌免运' },
      { iconName: '红包', desc: '红包包裹' }
    ]

    return { iconList }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixins.scss';
@import '../../style/viriables.scss';
.position {
  padding: 0.16rem 0.24rem 0.16rem;
  position: relative;
  @include ellipsis;
  &__icon {
    position: relative;
    top: 0.01rem;
    font-size: 0.2rem;
  }
  &__notice {
    position: absolute;
    font-size: 0.2rem;
    right: 0;
    top: 0.17rem;
  }
}
.search {
  margin-bottom: 0.12rem;
  background: $search-bacolor;
  color: $search-fontcolor;
  border-radius: 0.16rem;
  line-height: 0.32rem;
  display: flex;
  .iconfont {
    padding: 0 0.08rem 0 0.16rem;
    font-size: 0.16rem;
    // display: inline-block;
  }
  // 不知道为啥这里要加inline-block
  &__text {
    font-size: 0.14rem;
    display: inline-block;
    outline: none;
    border: none;
    background: $search-bacolor;
    width: 100%;
     border-radius: 0.16rem;
  }
}
.banner {
  //   因为图片加载,会使下方内容有抖动，所以使用hack？为啥不能使用height为25.4%？？？？
  height: 0;
  overflow: hidden;
  padding-bottom: 25.4%;
  &__img {
    width: 100%;
  }
}
.icon {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.16rem;
  &__item {
    width: 20%;
    &__img {
      display: block;
      width: 0.4rem;
      height: 0.4rem;
      margin: 0 auto;
    }
    &__text {
      text-align: center;
      color: $content-fontcolor;
      margin: 0.06rem 0 0.16rem 0;
    }
  }
}
.gap {
  background: $content-bgcolor;
  height: 0.1rem;
  margin: 0 -0.18rem;
}
</style>
