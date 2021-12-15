// plugin插件，也是把通用性功能封装起来
export default {
  install (app, options) {
    app.provide('name', 'dell lee')
    app.directive('focus', {
      mounted (el) {
        el.focus()
      }
    })
    app.config.globalProperties.$sayhello = 'hello world'
    console.log('app,options :>> ', app, options)
  }
}
