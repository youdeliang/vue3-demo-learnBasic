<template>
  <div>数据类型判断：{{b}}</div>
  <div>数组去重{{d}}</div>
  <div>ES6 实现 :数组去重{{e}}</div>
  <div>ES5 实现 :数组扁平化{{f}}</div>
  <div>ES6 实现 :数组扁平化{{g}}</div>
  <div>浅拷贝{{m}}</div>
  <div>深拷贝{{n}}</div>
</template>

<script>
export default {
  data () {
    return {
      a: {},
      b: '',
      c: [1, 32, 45, 656, 767, 34, 45, 1, 54, 656, '656'],
      d: '',
      e: '',
      f: '',
      g: '',
      h: { a: 1, b: { b: 100 }, c: Symbol(3), d: new Date() },
      m: null,
      n: null
    }
  },
  name: 'ten',
  mounted () {
    this.b = this.type_of(this.a)
    this.d = this.unique(this.c)
    this.e = [...new Set(this.c)]
    this.f = this.flaten([1, [2, 3]])
    this.g = this.flatten6([1, [2, 3]])
    this.m = this.shallowCopy(this.h)
    this.n = this.deepClone(this.h)
    this.m.b.b = 2
    this.m.c = Symbol(5)
    console.log('h :>> ', this.h.b, this.h.c)
    console.log('this.m :>> ', this.m.b, this.m.c)
  },
  methods: {
    //   数据类型判断
    type_of (obj) {
      return Object.prototype.toString.call(obj)
    },
    // 数组去重
    unique (arr) {
      const res = []
      for (let i = 0; i < arr.length; i++) {
        if (res.indexOf(arr[i]) === -1) {
          res.push(arr[i])
        }
      }
      return res
    },
    // 数组扁平化
    // ES5 实现：
    flaten (arr) {
      let res = []
      if (!arr.length) return res
      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          res = res.concat(this.flaten(arr[i]))
        } else {
          res.push(arr[i])
        }
      }
      return res
    },
    // ES6 实现：
    flatten6 (arr) {
      while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr)
      }
      return arr
    },
    //   浅拷贝
    shallowCopy (obj) {
      if (typeof obj !== 'object') return obj
      const newObj = obj instanceof Array ? [] : {}
      for (const key in obj) {
        newObj[key] = obj[key]
      }
      return newObj
    },

    // 深拷贝
    deepClone (target, map = new Map()) {

    }
  }
}
</script>
