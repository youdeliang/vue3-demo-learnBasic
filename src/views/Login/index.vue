<template>
  <div class="wrapper">
    <img
      class="wrapper__img"
      src="http://www.dell-lee.com/imgs/vue3/user.png"
    >
    <div class="wrapper__input">
      <input
        class="wrapper__input__content"
        v-model="userName"
        placeholder="请输入用户名"
      >
    </div>
    <div class="wrapper__input">
      <input
        class="wrapper__input__content"
        type="password"
        v-model="password"
        placeholder="请输入密码"
        autocomplete="new-password"
      >
    </div>
    <div
      class="wrapper__login-btn"
      @click="handleLogin"
    >登录</div>
    <div class="wrapper__relogin">
      <span @click="handleRegister">立即注册</span>
    </div>
    <Toast
      v-if="show"
      :msg="msg"
    />
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { post } from '../../utils/request'
import { reactive, toRefs } from 'vue'
import Toast, { useToastEffect } from '../../components/toast.vue'

const useLoginEffect = (showToast) => {
  const router = useRouter()
  const data = reactive({
    userName: '',
    password: ''
  })
  const handleLogin = async () => {
    try {
      const result = await post('/api/user/login', {
        userName: data.password,
        password: data.password
      })
      if (result?.errno === 0) {
        localStorage.isLogin = true
        router.push({ name: 'Home' })
      } else {
        showToast('请求失败')
      }
    } catch (err) { showToast('发送失败') }
  }
  const { userName, password } = toRefs(data)
  return { userName, password, handleLogin }
}

export default {
  name: 'Login',
  components: {
    Toast
  },
  // 职责：代码执行流程
  setup () {
    const router = useRouter()
    const { msg, show, showToast } = useToastEffect()
    const { userName, password, handleLogin } = useLoginEffect(showToast)
    const handleRegister = () => {
      router.push({ name: 'Register' })
    }
    return { userName, password, handleLogin, handleRegister, msg, show }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  &__img {
    width: 0.66rem;
    height: 0.66rem;
    display: block;
    margin: 0 auto 0.4rem auto;
  }
  &__input {
    background: #f9f9f9;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.06rem;
    margin: 0 0.4rem 0.16rem;
    height: 0.48rem;
    &__content {
      width: 100%;
      padding: 0 0.16rem;
      box-sizing: border-box;
      line-height: 0.48rem;
      border: none;
      background: none;
      outline: none;
      font-style: 0.16rem;
      color: rgba(0, 0, 0, 0.5);
      &::placeholder {
        color: rgba(0, 0, 0, 0.5);
      }
    }
  }
  &__login-btn {
    margin: 0.32rem 0.4rem 0.16rem 0.4rem;
    background: $btn-bgcolor;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 145, 155, 0.32);
    border-radius: 0.04rem;
    color: $bg-color;
    line-height: 0.48rem;
    text-align: center;
    font-size: 0.16rem;
  }
  &__relogin {
    text-align: center;
    font-style: 0.14rem;
    color: #777;
  }
}
</style>
