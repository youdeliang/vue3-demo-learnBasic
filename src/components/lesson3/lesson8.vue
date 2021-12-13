<template>
  <div @click="handeItemClick">{{modelValue}}</div>
  <div>123</div>
</template>

// v-model  添加修饰符
// 自定义修饰符

<script>
export default {
  name: 'lessonEgiht',
  data () {
    return {}
  },
  props: {
    modelValue: String,
    modelModifiers: {
      default: () => ({
        nice: true
      })
    }
  },
  setup () {

  },
  mounted () {
  },
  methods: {
    handeItemClick () {
      let newValue = this.modelValue + 'b'
      if (this.modelModifiers.nice) {
        newValue = newValue.toUpperCase()
      }
      this.$emit('update:modelValue', newValue)
    }
  }
}
</script>
