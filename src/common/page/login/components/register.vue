<template>
  <div class="register">
    <div class="cell">
      <span>登陆账号:</span>
      <j-input placeholder="请填写" type="clearable" v-model="form.phone"></j-input>
    </div>
    <!-- <div class="identifying">
      <j-input placeholder="请输入验证码"></j-input>
      <div class="identifying-img">
        <img src="" alt="验证码">
      </div>
    </div> -->
    <div class="cell">
      <!-- <div class="pass"> -->
        <span>登陆密码:</span>
        <j-input v-model="form.password" placeholder="请填写" text="password" v-show="password === false">
          <!-- <div>
            <img width="18" :src="icon.normal" @click="watchPassword">
          </div> -->
        </j-input>
        <!-- <j-input v-model="form.password" placeholder="请输入密码" text="text" v-show="password === true">
          <div>
            <img width="18" :src="icon.active" @click="watchPassword">
          </div>
        </j-input>
      </div> -->
    </div>
    <div class="cell">
      <span>确认密码:</span>
      <j-input placeholder="请填写" text="password"></j-input>
    </div>
    <div class="cell">
      <span>真实姓名:</span>
      <j-input placeholder="请填写" type="clearable" v-model="form.realname"></j-input>
    </div>
    <div class="cell">
      <span>邮箱:</span>
      <j-input placeholder="请填写" type="clearable" v-model="form.email"></j-input>
    </div>
    <div class="cell">
      <span>手机:</span>
      <j-input placeholder="请填写" type="clearable"></j-input>
    </div>
    <div class="cell">
      <span>科室:</span>
      <j-input placeholder="请选择" @click="open" type="select" v-model="form.select"></j-input>
    </div>
    <div class="cell">
      <span>职称:</span>
      <j-input placeholder="请选择" @click="open" type="select" v-model="form.select"></j-input>
    </div>
    <div class="cell">
      <span>职称级别:</span>
      <j-input placeholder="请选择" @click="open" type="select" v-model="form.select"></j-input>
    </div>
    <div class="cell">
      <span>学历:</span>
      <j-input placeholder="请选择" @click="open" type="select" v-model="form.select"></j-input>
    </div>
    <div class="cell">
      <span>学位:</span>
      <j-input placeholder="请选择" @click="open" type="select" v-model="form.select"></j-input>
    </div>
    <div class="cell">
      <span>出生年月:</span>
      <j-input placeholder="请选择" @click="open" type="select" v-model="form.select"></j-input>
    </div>
    <div class="cell">
      <div class="identifying-img">
        <img src="" alt="验证码">
      </div>
        <j-input placeholder="请输入验证码"></j-input>
    </div>
    <div class="cell">
      <button class="btn">
        重置
      </button>
      <button class="btn">
        注册
      </button>
    </div>

    <popup position="bottom" :toShow="show" @close="open">

    </popup>
  </div>
</template>

<script>
import JInput from '@/components/input/j-input'
import Popup from '@/components/popup/popup'
export default {
  name: 'Register',
  data () {
    return {
      test: '',
      password: false,
      show: false,
      icon: {
        normal: require('../image/closeEyes.png'),
        active: require('../image/openEyes.png')
      },
      form: {
        password: '',
        phone: '',
        username: '',
        realname: '',
        email: '',
        select: ''
      }
    }
  },
  components: {
    JInput,
    Popup
  },
  methods: {
    watchPassword () {
      this.password = !this.password
    },
    open () {
      this.show = !this.show
    }
  }
}
</script>

<style lang="stylus" scoped>
.register
  .cell
    margin 0 auto 20px auto
    max-width 444px
    width 80%
    display flex
    justify-content space-between
    align-items center
    color red
  .J-input
    width: 180px;
    height 30px
    border 1px solid #FD4D4D
    // border:1px solid rgba(215,215,215,1)
    border-radius:5px
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
  // .identifying
  //   display flex
  //   justify-content space-between
  //   margin 0 auto
    // .J-input
    //   width 100%
    //   flex 1
  .identifying-img
    // width 80%
    // max-width 444px
    background green
    width 70px
    height 30px
    color black
.btn
  height:49px
  // flex 1
  width 44%
  // margin-left 10px
  // max-width 444px
  background:rgba(71,104,243,1)
  border-radius:5px
  color white
  display block
  &:first-child
    border: 1px solid black
    background white
    color black
</style>
