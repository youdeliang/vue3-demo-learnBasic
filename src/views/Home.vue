<template>
  <div @click="handleClick">home</div>
  <div @click="changeData">{{myName}}</div>
</template>

<script>
export default {
  name: 'Home',
  setup () {
  },
  computed: {
    myName () {
      return this.$store.state.name
    }
  },
  methods: {
    handleClick () {
      console.log('dispatch-action')
      // this.$store.commit('change')
      this.$store.dispatch('change', 'hello world')
    },
    changeData () {
      this.$store.state.name = 456
    }
  }
}
</script>
