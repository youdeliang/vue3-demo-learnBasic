<template>
  <div class="wrapper">
    <img
      class="wrapper__img"
      src="http://www.dell-lee.com/imgs/vue3/user.png"
    >
    <div class="wrapper__input">
      <input
        class="wrapper__input__content"
        type="text"
        placeholder="请输入手机号"
      >
    </div>
    <div class="wrapper__input">
      <input
        class="wrapper__input__content"
        type="text"
        placeholder="请输入密码"
      >
    </div>
    <div
      class="wrapper__login-btn"
      @click="handleLogin"
    >登录</div>
    <div class="wrapper__relogin">
      <span>立即注册</span>
      <span class="wrapper__relogin__interval">|</span>
      <span>忘记密码</span>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: 'Login',
  setup () {
    const router = useRouter()
    const handleLogin = () => {
      localStorage.isLogin = true
      router.push('/home')
      console.log('router111 :>> ', router)
    }
    return { handleLogin }
  }
}
</script>

<style lang="scss" scoped>
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
    background: #0091ff;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 145, 155, 0.32);
    border-radius: 0.04rem;
    color: #fff;
    line-height: 0.48rem;
    text-align: center;
    font-size: 0.16rem;
  }
  &__relogin {
    text-align: center;
    font-style: 0.14rem;
    color: #777;
    &__interval {
      margin: 0 0.16rem;
    }
  }
}
</style>
