<template>
  <div class="login">
    <j-input placeholder="请输入账号" type="clearable" v-model="test"></j-input>
    <div class="pass">
      <j-input v-model="form.password" placeholder="请输入密码" text="password" v-show="password === false">
        <div>
          <img width="18" :src="icon.normal" @click="watchPassword">
        </div>
      </j-input>
      <j-input v-model="form.password" placeholder="请输入密码" text="text" v-show="password === true">
        <div>
          <img width="18" :src="icon.active" @click="watchPassword">
        </div>
      </j-input>
    </div>

    <button class="btn">
      登陆
    </button>
    <div class="select">
      <router-link :to="{name: 'Register'}" tag="span">立即注册</router-link>
      <router-link :to="{name: 'Rorget'}" tag="span">忘记密码?</router-link>
    </div>
  </div>
</template>

<script>
import JInput from '@/components/input/j-input'
export default {
  name: 'Login',
  data () {
    return {
      test: '',
      password: false,
      icon: {
        normal: require('../image/closeEyes.png'),
        active: require('../image/openEyes.png')
      },
      form: {
        password: ''
      }
    }
  },
  methods: {
    watchPassword () {
      this.password = !this.password
    }
  },
  components: {
    JInput
  }
}
</script>

<style lang="stylus" scoped>
.login
  padding-bottom 20px
  .btn
    width:80%
    height:49px
    max-width 444px
    background:rgba(71,104,243,1)
    border-radius:5px
    color white
    display block
    margin 0 auto
  .J-input
    width 80%
    height 54px
    border:1px solid rgba(215,215,215,1)
    border-radius:5px
    margin 0 auto 20px auto
    max-width 444px
    font-size:15px;
    font-weight:500
  .pass
    .J-input
      position relative
      div
        position absolute
        top 0
        right 0
        padding-right 10px
        display flex
        align-items center
        height 100%
  .select
    width 80%
    max-width 444px
    display flex
    justify-content space-between
    margin 20PX auto 0 auto
    font-size:15px;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(182,182,182,1);
</style>
