import { createApp } from 'vue'
import App from './App.vue'
// import Mixins from './mixins/common'
// import myPlugin from './plugin/common'
// import validatePlugin from './plugin/validate'

createApp(App).mount('#app')

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
