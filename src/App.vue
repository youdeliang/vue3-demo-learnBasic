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
  <!-- header -->
  <div class="wrapper">
    <div class="position">
      <span class="iconfont position__icon">&#xe619;</span>
      北京理工大学国防科技圆2号楼10层
      <span class="iconfont position__notice">&#xe60a;</span>
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
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0.49rem;
  right: 0;
  padding: 0 0.12rem;
  color: $content-fontcolor;
  @include ellipsis;
  .position {
    padding: 0.18rem 0;
    &__icon {
      position: relative;
      top: 0.01rem;
      font-size: 0.2rem;
    }
    &__notice {
      position: absolute;
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
  border-top: 0.01rem solid #f1f1f1;
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
