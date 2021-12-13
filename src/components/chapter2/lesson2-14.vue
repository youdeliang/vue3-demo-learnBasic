<template>
  <div>
    {{message}}
    <input
      type="text"
      name=""
      id=""
      v-model="message"
    >
    <textarea
      name=""
      id=""
      cols="30"
      rows="10"
      v-model="msg"
    ></textarea>
    {{checkbox}}
    <input
      type="checkbox"
      name=""
      v-model="checkbox"
    >
  </div>
  <div>
    {{chkArr}}jack
    <input
      type="checkbox"
      v-model="chkArr"
      value="jack"
      name=""
      id=""
    >
    ben
    <input
      type="checkbox"
      v-model="chkArr"
      value="ben"
      name=""
      id=""
    >
    anna
    <input
      type="checkbox"
      v-model="chkArr"
      value="anna"
      name=""
      id=""
    >
  </div>
  <div>
    {{radioStr}}jack
    <input
      type="radio"
      v-model="radioStr"
      value="jack"
      name=""
      id=""
    >
    ben
    <input
      type="radio"
      v-model="radioStr"
      value="ben"
      name=""
      id=""
    >
    anna
    <input
      type="radio"
      v-model="radioStr"
      value="anna"
      name=""
      id=""
    >
  </div>
</template>
<script>
export default {
  naem: 'lessonTwoForT',
  data () {
    return {
      message: 'nice',
      msg: 'hello',
      checkbox: false,
      chkArr: [],
      radioStr: ''
    }
  },
  methods: {

  }
}
</script>
