<template>
  <div>
    <div>lesson12</div>
    <div>
      <div>
        {{name}}
      </div>
      <div>{{age}}</div>
    </div>
  </div>
</template>

// provide,inject,模板Ref的用法

<script>
import { inject } from 'vue'
export default {
  name: 'lessonTwl',
  setup () {
    const name = inject('name', 'hello')
    const age = inject('hello')
    return { name, age }
  }
}
</script>
