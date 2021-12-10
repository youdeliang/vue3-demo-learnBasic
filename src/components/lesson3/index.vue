<template>
  <lesson-one />
  <lesson-two
    :content="num"
    :msg="msg"
  />
</template>

<script>
import LessonOne from './lesson1.vue'
import lessonTwo from './lesson2.vue'
export default {
  name: 'lessonThree',
  data () {
    return {
      num: () => { console.log(123) },
      msg: 678
    }
  },
  components: {
    LessonOne,
    lessonTwo
  },
  setup () {

  }
}
</script>
