import { createApp } from 'vue'
import App from './App.vue'
// import Mixins from './mixins/common'

createApp(App).mount('#app')

// 全局指令
// createApp(App).directive('focus', {
//   mounted (el) {
//     el.focus()
//   }
// }).mount('#app')

// 全局mixin
// createApp(App).mixin(Mixins).mount('#app')
