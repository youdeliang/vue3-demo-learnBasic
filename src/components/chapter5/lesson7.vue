<template>
  <div>
    <div>lesson7</div>
    <div>
      <div>{{name}}</div>
      <input type="text" v-focus>
    </div>
  </div>
</template>

// 插件的定义和使用

<script>
export default {
  name: 'lessonSeven',
  inject: ['name'],
  setup () {

  },
  mounted () {
    console.log('object :>> ', this.$sayhello)
  }
}
</script>
