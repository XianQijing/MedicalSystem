<template>
  <div class="forget">
    <j-input placeholder="请输入邮箱地址" type="clearable" v-model="test"></j-input>
    <div class="identifying">
      <j-input placeholder="请输入邮箱验证码"></j-input>
      <div class="identifying-img">
        <button>获取邮箱验证码</button>
      </div>
    </div>
    <div class="identifying">
      <j-input placeholder="请输入系统验证码"></j-input>
      <div class="identifying-img">
        <img src="" alt="验证码">
      </div>
    </div>
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
    <div class="pass">
      <j-input v-model="form.password" placeholder="请再次输入密码" text="password" v-show="password === false">
        <div>
          <img width="18" :src="icon.normal" @click="watchPassword">
        </div>
      </j-input>
      <j-input v-model="form.password" placeholder="请再次输入密码" text="text" v-show="password === true">
        <div>
          <img width="18" :src="icon.active" @click="watchPassword">
        </div>
      </j-input>
    </div>
    <button class="btn">
      提交新密码
    </button>
  </div>
</template>

<script>
import JInput from '@/components/input/j-input'
export default {
  name: 'Forget',
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
  components: {
    JInput
  },
  methods: {
    watchPassword () {
      this.password = !this.password
    }
  }
}
</script>

<style lang="stylus" scoped>
.forget
  // padding-bottom 20px
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
  .identifying
    display flex
    justify-content space-between
    width 80%
    background none
    max-width 444px
    margin 0 auto
    .J-input
      width 100%
      flex 1
    .identifying-img
      width 109px
      margin-left 20px
      height 54px
      background white
    button
      border:1px solid rgba(71,104,243,1);
      border-radius:5px;
      color #4768F3
      width:109px;
      height:52px;
      background rgb(239, 239, 244);
.btn
  width:80%
  height:49px
  max-width 444px
  background:rgba(71,104,243,1)
  border-radius:5px
  color white
  display block
  margin 0 auto
</style>
