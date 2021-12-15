<template>
  <div>
    <div>lesson8</div>
    <div>name:{{nameString}}
      <button @click="handleAddLength">增加</button>
    </div>
    <div>
      age:{{age}}
      <button @click="handleAddAge">增加</button>
    </div>
  </div>
</template>
// 数据校验插件开发实列

<script>
export default {
  name: 'lessonEghit',
  data () {
    return {
      nameString: 'chen',
      age: 24
    }
  },
  rules: {
    nameString: {
      validate: name => name.length < 6,
      message: 'your name is too long'
    },
    age: {
      validate: age => age < 26,
      message: 'we need younger partener'
    }

  },
  setup () {

  },
  methods: {
    handleAddLength () {
      this.nameString += 'b'
    },
    handleAddAge () {
      this.age += 3
    }
  }

}
</script>
