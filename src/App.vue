<template>
  <!-- <Components /> -->
  <!-- <div> -->
  <!-- router-link 是跳转路由的标签 -->
  <!-- <router-link to='/'>home</router-link> |
    <router-link to='/login'>login</router-link> -->
  <!-- </div> -->
  <!-- router-view负责展示当前路由对应的组件的内容 -->
  <!-- <router-view></router-view> -->
  <!-- 京东首页 -->
  <!-- BEM block__element--Modifier -->
  <!-- header content-->
  <div class="wrapper">
    <div class="position">
      <span class="iconfont position__icon">&#xe619;</span>
      北京理工大学国防科技圆2号楼10层
      <span class="iconfont position__notice">&#xe60a;</span>
    </div>
    <!-- search -->
    <div class="search">
      <span class="iconfont">&#xe65c;</span>
      <span class="search__text">山姆酒店</span>
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
      <div class="icon__item">
        <img
          class="icon__item__img"
          src="http://www.dell-lee.com/imgs/vue3/超市.png"
        >
        <p class="icon__item__text">超市便利</p>
      </div>
      <div class="icon__item">
        <img
          class="icon__item__img"
          src="http://www.dell-lee.com/imgs/vue3/菜市场.png"
        >
        <p class="icon__item__text">菜市场</p>
      </div>
      <div class="icon__item">
        <img
          class="icon__item__img"
          src="http://www.dell-lee.com/imgs/vue3/水果店.png"
        >
        <p class="icon__item__text">水果店</p>
      </div>
      <div class="icon__item">
        <img
          class="icon__item__img"
          src="http://www.dell-lee.com/imgs/vue3/鲜花.png"
        >
        <p class="icon__item__text">鲜花绿植</p>
      </div>
      <div class="icon__item">
        <img
          class="icon__item__img"
          src="http://www.dell-lee.com/imgs/vue3/医药健康.png"
        >
        <p class="icon__item__text">医药健康</p>
      </div>
      <div class="icon__item">
        <img
          class="icon__item__img"
          src="http://www.dell-lee.com/imgs/vue3/家居.png"
        >
        <p class="icon__item__text">家居时尚</p>
      </div>
      <div class="icon__item">
        <img
          class="icon__item__img"
          src="http://www.dell-lee.com/imgs/vue3/蛋糕.png"
        >
        <p class="icon__item__text">烘培蛋糕</p>
      </div>
      <div class="icon__item">
        <img
          class="icon__item__img"
          src="http://www.dell-lee.com/imgs/vue3/签到.png"
        >
        <p class="icon__item__text">签到</p>
      </div>
      <div class="icon__item">
        <img
          class="icon__item__img"
          src="http://www.dell-lee.com/imgs/vue3/大牌免运.png"
        >
        <p class="icon__item__text">大牌免运</p>
      </div>
      <div class="icon__item">
        <img
          class="icon__item__img"
          src="http://www.dell-lee.com/imgs/vue3/红包.png"
        >
        <p class="icon__item__text">红包包裹</p>
      </div>
    </div>
    <!-- gap -->
    <div class="gap"></div>
    <!-- nearby -->
    <div class="nearby">
      <h3 class="nearby__title">附近店铺</h3>
      <div class="nearby__item">
        <img
          src="http://www.dell-lee.com/imgs/vue3/near.png"
          class="nearby__item__img"
        >
        <div class="nearby__content">
          <div class="nearby__content__title">沃尔玛</div>
          <div class="nearby__content__tags">
            <span class="nearby__content__tag">月售1万+</span>
            <span class="nearby__content__tag">月售1万+</span>
            <span class="nearby__content__tag">月售1万+</span>
          </div>
          <p class="nearby__content__highlight">VIP尊享89元减4元运费</p>
        </div>
      </div>
      <div class="nearby__item">
        <img
          src="http://www.dell-lee.com/imgs/vue3/near.png"
          class="nearby__item__img"
        >
        <div class="nearby__content">
          <div class="nearby__content__title">沃尔玛</div>
          <div class="nearby__content__tags">
            <span class="nearby__content__tag">月售1万+</span>
            <span class="nearby__content__tag">月售1万+</span>
            <span class="nearby__content__tag">月售1万+</span>
          </div>
          <p class="nearby__content__highlight">VIP尊享89元减4元运费</p>
        </div>
      </div>
      <div class="nearby__item">
        <img
          src="http://www.dell-lee.com/imgs/vue3/near.png"
          class="nearby__item__img"
        >
        <div class="nearby__content">
          <div class="nearby__content__title">沃尔玛</div>
          <div class="nearby__content__tags">
            <span class="nearby__content__tag">月售1万+</span>
            <span class="nearby__content__tag">月售1万+</span>
            <span class="nearby__content__tag">月售1万+</span>
          </div>
          <p class="nearby__content__highlight">VIP尊享89元减4元运费</p>
        </div>
      </div>
       <div class="nearby__item">
        <img
          src="http://www.dell-lee.com/imgs/vue3/near.png"
          class="nearby__item__img"
        >
        <div class="nearby__content">
          <div class="nearby__content__title">沃尔玛</div>
          <div class="nearby__content__tags">
            <span class="nearby__content__tag">月售1万+</span>
            <span class="nearby__content__tag">月售1万+</span>
            <span class="nearby__content__tag">月售1万+</span>
          </div>
          <p class="nearby__content__highlight">VIP尊享89元减4元运费</p>
        </div>
      </div>
    </div>
  </div>
  <!-- footer -->
  <div class="docker">
    <div class="docker__item docker__item--active">
      <div class="iconfont">&#xe867;</div>
      <div class="docker__title">首页</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe638;</div>
      <div class="docker__title">购物车</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe723;</div>
      <div class="docker__title">订单</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe600;</div>
      <div class="docker__title">我的</div>
    </div>
  </div>
</template>

<script>
// import Components from './components'

export default {
  name: 'App'
  // components: {
  //   Components
  // }
}
</script>

<style lang="scss" scoped>
@import './style/mixins.scss';
@import './style/viriables.scss';
.wrapper {
  overflow-y: hidden;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0.49rem;
  right: 0;
  padding: 0 0.18rem 0.1rem 0.18rem;
  color: $content-fontcolor;
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
    background: #f5f5f5;
    color: #b7b7b7;
    border-radius: 0.16rem;
    line-height: 0.32rem;
    .iconfont {
      padding: 0 0.08rem 0 0.16rem;
      font-size: 0.16rem;
      // display: inline-block;
    }
    // 不知道为啥这里要加inline-block
    &__text {
      font-size: 0.14rem;
      // display: inline-block;
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
    margin: 0 -0.12rem;
  }
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
}
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
