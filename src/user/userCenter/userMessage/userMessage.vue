<template>
  <div class="userMessage">
    <div class="tabs">
      <button class="tab" v-for="(btn, i) in btnList" :key="i" :class="{'btn-active': active === i}" @click="active=i">{{btn}}</button>
    </div>
    <personal-message v-show="active === 0"></personal-message>
    <can-edit v-show="active === 1"></can-edit>
    <edit-password v-show="active === 2"></edit-password>

    <!-- <popup position="bottom" :toShow="show" @close="close">
      <van-picker
        :columns="columns"
        @cancel="close"
        @confirm="onConfirm"
        :item-height=30
        :show-toolbar="true"/>
    </popup> -->
  </div>
</template>

<script>
import PersonalMessage from './components/personalMessage'
import CanEdit from './components/canEdit'
import EditPassword from './components/editPassword'
// import Popup from '@/components/popup/popup'

export default {
  name: 'UserMessage',
  data () {
    return {
      active: 0,
      // show: false,
      btnList: ['个人信息', '修改信息', '修改密码']
      // columns: ['用户信息', '用户业绩']
    }
  },
  components: {
    PersonalMessage,
    CanEdit,
    EditPassword
    // Popup
  }
  // methods: {
  //   close () {
  //     this.show = !this.show
  //   },
  //   onConfirm (value, index) {
  //     this.$toast(value)
  //     this.close()
  //   }
  // }
}
</script>

<style lang="stylus" scoped>
.userMessage
  padding 20px 0 6px 0
  .tabs
    margin 0 6px 1px 6px
    display flex
    position relative
    z-index 1
    .tab
      margin-right 4px
      border 1px solid #2873FF
      background rgb(239, 239, 244)
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
  .drop
    position absolute
    width 100%
    text-align center
    top 20px
    z-index 0
    .drop-down
      background rgb(221, 221, 221)
      width 40px
      height 40px
      font-size 20px
      color #999999
      border-radius 50%
      // position relative
      span
        position relative
        top 7px
</style>
