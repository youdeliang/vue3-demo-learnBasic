export default {
  title: 'Nice to meet you',
  data () {
    return {
      num: 2,
      count: 3
    }
  },
  created () {
    console.log('mixin created')
  },
  methods: {
    handleClick () {
      console.log('mixin handleClick')
    }
  }
}
