<template>
  <div>
    {{childCount}}
  </div>
</template>

// provide/inject

// 如果祖父组件的数据发生变化，孙子里的祖父数据不会变化，需要vue3的响应式
<script>
export default {
  name: 'grandson',
  inject: ['childCount'],
  setup () { }
}
</script>
