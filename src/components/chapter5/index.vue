<template>
  <div>
    <div>chapter5</div>
    <div>
      <!-- <lesson-one /> -->
      <lesson-three />
    </div>
  </div>
</template>
// vue中的高级语法（知识点）
// mixin混入:(优先级):组件,生命周期

<script>
// import LessonOne from './lesson1.vue'
import LessonThree from './lesson3.vue'
export default {
  name: 'chapterFive',
  components: {
    // LessonOne,
    LessonThree
  },
  setup () {

  }
}
</script>
