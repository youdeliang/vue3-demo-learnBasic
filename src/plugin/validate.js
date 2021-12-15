export default (app, options) => {
  app.mixin({
    created () {
      for (const key in this.$options.rules) {
        const item = this.$options.rules[key]
        // 通过this获取app的实例，
        this.$watch(key, (value) => {
          // key是属性名，value是属性值
          console.log('value :>> ', value, key)
          const result = item.validate(value)
          if (!result) console.log('warning message :>> ', item.message)
        })
      }
    }
  })
}
