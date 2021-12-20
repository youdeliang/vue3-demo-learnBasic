<template>
  <div>
    <div>chapter 6</div>
    <div>
      <!-- <lesson-one></lesson-one> -->
      <!-- <lesson-two></lesson-two> -->
      <!-- <lesson-four
        app="app"
        @change="handleChange"
      >
        <div>nice to meet you son</div>
      </lesson-four> -->
      <!-- <lesson-six></lesson-six> -->
      <!-- <lesson-eghit></lesson-eghit> -->
      <!-- <lesson-nine></lesson-nine> -->
      <!-- <lesson-elven></lesson-elven> -->
      <lesson-twl></lesson-twl>
    </div>
  </div>
</template>

<script>
import { provide } from 'vue'
// import LessonOne from './lesson1.vue'
// import LessonTwo from './lesson2.vue'
// import LessonFour from './lesson4.vue'
// import LessonSix from './lesson6.vue'
// import LessonEghit from './lesson8.vue'
// import LessonNine from './lesson9.vue'
// import LessonElven from './lesson11.vue'
import LessonTwl from './lesson12.vue'
export default {
  name: 'chapterSix',
  components: {
    // LessonOne,
    // LessonTwo,
    // LessonFour,
    // LessonSix,
    // LessonEghit,
    // LessonNine,
    // LessonElven,
    LessonTwl
  },
  setup () {
    provide('name', 'dell')
  },
  methods: {
    handleChange () {
      console.log('123')
    }
  }
}
</script>
