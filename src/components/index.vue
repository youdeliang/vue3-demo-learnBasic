<template>
  <js-practice />
  <!-- <chapter-two /> -->
  <chapter-three />
  <chapter-four />
</template>

<script>
import JsPractice from './JSpractice'
// import ChapterTwo from './chapter2'
import ChapterThree from './chapter3'
import ChapterFour from './chapter4'
export default {
  name: 'components',
  components: {
    // ChapterTwo,
    ChapterThree,
    ChapterFour,
    JsPractice
  }
}
</script>
