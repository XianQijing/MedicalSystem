<template>
  <div class="FundManagement">
    <div class="drop">
      <button class="drop-down" @click="dropDown">
        <span class="iconfont" v-show="!drop">&#xe7ee;</span>
        <span class="iconfont" v-show="drop">&#xe7ed;</span>
      </button>
    </div>
    <router-view></router-view>
    <popup position="bottom" :toShow="drop" @close="dropDown">
      <van-picker
        :columns="dropList"
        @cancel="dropDown"
        @confirm="dropConfirm"
        :item-height=30
        :show-toolbar="true"/>
    </popup>
  </div>
</template>

<script>
import Popup from '@/components/popup/popup'
export default {
  name: 'FundManagement',
  data () {
    return {
      drop: false,
      dropList: [
        {
          text: '报销审核',
          name: 'ApplicationForReimbursement'
        },
        {
          text: '经费决算',
          name: 'FundsFinalAccounts'
        },
        {
          text: '经费明细',
          name: 'FundingDetails'
        },
        {
          text: '经费审批',
          name: 'FundingApproval'
        },
        {
          text: '经费余额',
          name: 'BalanceOfFunds'
        },
        {
          text: '项目预算',
          name: 'ProjectBudget'
        },
        {
          text: '项目经费',
          name: 'ProjectFunds'
        }
      ]
    }
  },
  components: {
    Popup
  },
  methods: {
    dropDown () {
      this.drop = !this.drop
    },
    dropConfirm (value, index) {
      this.dropDown()
      this.$router.push({name: value.name})
    }
  }
}
</script>

<style lang="stylus" scoped>
.drop
  position absolute
  left .9rem
  text-align center
  top 0
  height .43rem
  .drop-down
    font-size 20px
    color white
    background none
    height 100%
</style>
