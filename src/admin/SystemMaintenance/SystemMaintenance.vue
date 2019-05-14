// 系统维护
<template>
  <div class="SystemMaintenance" style="height: 100%">
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
  name: 'SystemMaintenance',
  data () {
    return {
      drop: false,
      dropList: [
        {
          name: 'BasicSetup',
          text: '基本设置'
        },
        {
          name: 'Privilege',
          text: '权限设置'
        },
        {
          name: 'ExpertSetup',
          text: '专家设置'
        },
        {
          name: 'PeriodicalSetup',
          text: '期刊设置'
        },
        {
          name: 'FundsSetting',
          text: '预算设置'
        },
        {
          name: 'Assessment',
          text: '考核设置'
        },
        {
          name: 'CoreSetup',
          text: '核心设置'
        },
        {
          name: 'DailySetup',
          text: '日常设置'
        },
        {
          name: 'DeanAccount',
          text: '院长账号'
        },
        {
          name: 'DataImport',
          text: '数据导入'
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
