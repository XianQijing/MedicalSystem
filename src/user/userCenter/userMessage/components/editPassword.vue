<template>
  <div class="editPassword">
    <c-title>修改密码</c-title>
    <div class="password">
      <p class="account">登录账号：陈阿斌</p>
      <div class="cell border-1px">
        <span class="label">旧密码:</span>
        <j-input placeholder="输入密码" v-model="oldPassword"/>
      </div>
      <div class="cell border-1px">
        <span class="label">新密码:</span>
        <j-input placeholder="输入新密码" v-model="newPassword"/>
      </div>
      <div class="cell border-1px">
        <span class="label">确认密码:</span>
        <j-input @blur="blur" placeholder="确认密码" v-model="confirmPassword"/>
      </div>
    </div>
    <p class="warning" v-show="show">
      密码不一致
    </p>
    <div class="button-cell">
      <button class="reset">取消</button>
      <button class="complete">确认修改</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'editPassword',
  data () {
    return {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
      show: false
    }
  },
  methods: {
    blur () {
      if (this.confirmPassword !== this.oldPassword) {
        this.show = true
      } else {
        this.show = false
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../../common/style/mixin.styl'
.editPassword
  .password
    margin 0 6px
    background white
    padding 15px 10px
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.50);
    .account
      margin 0 10px 0 0
      font-size: 12px;
      color: #555555;
    .cell
      width 100%
      display flex
      justify-content space-between
      border-1px(#D3D3D3)
      align-items center
      color red
      padding 15px 0
      &:last-child
        border-none()
      .J-input
        width 160px
        height 30px
        border 1px solid #FD4D4D
        border-radius: 6px
      span
        padding-left 10px
  .warning
    font-size: 16px;
    color: #FD4D4D;
    padding-top 20px
    text-align center
  .button-cell
    position fixed
    bottom 0
    left 0
</style>
