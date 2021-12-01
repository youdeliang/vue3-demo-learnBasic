<template>
  <!-- <hello-world msg="Welcome to Your Vue.js App" /> -->
  <!-- <lesson-two-six></lesson-two-six> -->
  <lesson-two-eghit class="blue"/>
</template>

<script>
// import HelloWorld from './components/lesson/HelloWorld.vue'
// import LessonTwoSix from './components/lesson/lesson2-6.vue'
import LessonTwoEghit from './components/lesson/lesson2-8.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // LessonTwoSix,
    LessonTwoEghit
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.blue{
  color: blue;
}
</style>
