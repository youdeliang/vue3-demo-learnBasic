<template>
  <!-- <Components /> -->
  <div>
    <!-- router-link 是跳转路由的标签 -->
    <router-link to='/'>home</router-link> |
    <router-link to='/login'>login</router-link>
  </div>
  <!-- router-view负责展示当前路由对应的组件的内容 -->
  <router-view></router-view>
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.blue {
  color: blue;
}
</style>
