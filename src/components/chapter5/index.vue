<template>
  <div>
    <div>chapter5</div>
    <div>
      <!-- <lesson-one /> -->
      <!-- <lesson-three /> -->
      <!-- <lesson-five /> -->
      <!-- <lesson-six :level='1'>
        hello world
      </lesson-six> -->
      <lesson-seven></lesson-seven>
      <lesson-eghit></lesson-eghit>
    </div>
  </div>
</template>
// vue中的高级语法（知识点）
// mixin混入:(优先级):组件,生命周期
//  teleport传送门功能

<script>
// import LessonOne from './lesson1.vue'
// import LessonThree from './lesson3.vue'
// import LessonFive from './lesson5.vue'
// import LessonSix from './lesson6.vue'
import LessonSeven from './lesson7.vue'
import LessonEghit from './lesson8.vue'

export default {
  name: 'chapterFive',
  components: {
    // LessonOne,
    // LessonThree,
    // LessonFive,
    // LessonSix,
    LessonSeven,
    LessonEghit
  },
  setup () {

  }
}
</script>
