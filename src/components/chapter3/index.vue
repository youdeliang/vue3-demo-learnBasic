<template>
  <div>
    <!-- <lesson-one />
    <lesson-two
      :content="num"
      :msg="msg"
      v-bind="params"
      :content-abc="msg"
      :count="count"
    /> -->
    <!-- <lesson-five
      :message="message"
      style="color:red"
    /> -->
    <!-- <lesson-six
      :count="count"
      @add-one="handleAddOne"
    /> -->
    <!-- <lesson-six
      :count="count"
      @add="handleAdd"
    /> -->
    <!-- <lesson-six v-model:app="count" /> -->
    <!-- <lesson-egiht v-model.nice="message" /> -->
    <!-- <lesson-nine>
      <div>{{text}}</div>
    </lesson-nine>
    <lesson-nine>
      <button>{{text}}</button>
    </lesson-nine>
    <lesson-nine>
      <lesson-egiht v-model.nice="message" />
    </lesson-nine>
    <lesson-nine>
    </lesson-nine> -->
    <!-- <lesson-ten>
      <template #header>header</template>
      <template #content="slotProps">
        <span>{{slotProps.item}}</span>
      </template>
      <template #footer>footer</template>
    </lesson-ten> -->
    <!--keep-alive有缓存的特性 -->
    <!-- <keep-alive>
      <component :is="currentItem" />
    </keep-alive>
    <button @click="handleClick">切换</button> -->
    <lesson-thir
      v-model="count"
      ref="common"
    />
    <button @click="handleAddOne">增加</button>
  </div>
</template>

<script>
// import LessonOne from './lesson1.vue'
// import LessonTwo from './lesson2.vue'
// import LessonFive from './lesson5.vue'
// import LessonSix from './lesson6.vue'
// import LessonEgiht from './lesson8.vue'
// import LessonNine from './lesson9.vue'
// import LessonTen from './lesson10.vue'
// import LessonTwl from './lesson12.vue'
// import LessonTwlTwo from './lesson1202.vue'
import LessonThir from './lesson13.vue'
export default {
  name: 'chapterThree',
  data () {
    return {
      num: () => { console.log(123) },
      msg: 678,
      params: {
        a: 123,
        b: 456,
        c: 789
      },
      count: 1,
      message: 'nice to meet you',
      text: '提交',
      currentItem: 'lesson-twl-two'
    }
  },
  components: {
    // LessonOne,
    // LessonTwo,
    // LessonFive,
    // LessonSix,
    // LessonEgiht,
    // LessonNine,
    // LessonTen,
    // LessonTwl,
    // LessonTwlTwo,
    LessonThir
  },
  setup () {

  },
  // provide: {
  //   childCount: 4
  // },
  // 如果要接受data里面的数据
  provide () {
    return {
      childCount: this.count
    }
  },
  mounted () {
    this.$refs.common.sayHello()
  },
  methods: {
    handleAddOne () {
      this.count += 1
    },
    handleAdd (params1, params2) {
      this.count = params1
    },
    handleClick () {
      if (this.currentItem === 'lesson-twl') {
        this.currentItem = 'lesson-twl-two'
      } else {
        this.currentItem = 'lesson-twl'
      }
    }
  }
}
</script>
