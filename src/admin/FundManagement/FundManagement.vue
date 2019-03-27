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
          name: 'ReimbursementAudit'
        },
        {
          text: '经费管理',
          name: 'FundManagement1'
        },
        {
          text: '绩效管理',
          name: 'FundManagement1'
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
          text: '经费预算',
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
  left: 50%;
  margin-left: -20px;
  top -20px
  text-align center
  .drop-down
    width 40px
    height 40px
    font-size 20px
    background rgb(221, 221, 221)
    color #999999
    border-radius 50%
    span
      position relative
      top 7px
</style>
