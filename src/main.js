import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' // 存储
// import Mixins from './mixins/common'
// import myPlugin from './plugin/common'
// import validatePlugin from './plugin/validate'

// 路由是指根据url的不同，展示不同页面
createApp(App).use(router).use(store).mount('#app')

// // 插件
// createApp(App).use(myPlugin, {
//   name: 'nice to meet you'
// }).use(validatePlugin).mount('#app')

// 全局指令
// createApp(App).directive('focus', {
//   mounted (el) {
//     el.focus()
//   }
// }).mount('#app')

// 全局mixin
// createApp(App).mixin(Mixins).mount('#app')
