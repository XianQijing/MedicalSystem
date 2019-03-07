<template>
  <div class="UserCenter">
    <div class="tabs">
      <button class="tab" v-for="(btn, i) in btnList" :key="i" :class="{'btn-active': active === i}" @click="active=i">{{btn}}</button>
    </div>
    <personal-message v-show="active === 0"></personal-message>
    <can-edit v-show="active === 1"></can-edit>
    <edit-password v-show="active === 2"></edit-password>
  </div>
</template>

<script>
import PersonalMessage from './components/personalMessage'
import CanEdit from './components/canEdit'
import EditPassword from './components/editPassword'
export default {
  name: 'UserCenter',
  data () {
    return {
      btnList: ['个人信息', '修改信息', '修改密码'],
      active: 0
    }
  },
  components: {
    PersonalMessage,
    CanEdit,
    EditPassword
  }
}
</script>

<style lang="stylus" scoped>
.UserCenter
  .tabs
    margin 10px 6px 1px 6px
    display flex
    .tab
      margin-right 4px
      border 1px solid #2873FF
      background none
      color #2873FF
      font-size 12px
      flex 1
      height 30px
      &:last-child
        margin-right 0
      &.btn-active
      border none
        background #2873FF
        color white
</style>
