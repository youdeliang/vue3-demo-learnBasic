<template>
  <div>lesson-2-8</div>
  <div :class="classString">颜色string</div>
  <div :class="classObject">颜色object</div>
  <div :class="classArray">颜色array</div>
  <div>父 颜色</div>
</template>

<script>
export default {
  name: 'lesson-2-8',
  data () {
    return {
      classString: 'red',
      classObject: { red: true, green: true, pink: false },
      classArray: ['red', 'green', { brown: false }, { pink: true }]
    }
  }
}
</script>

<style>
.red {
  color: red;
}
.green {
  color: green;
}
.pink {
  color: pink;
}
</style>
