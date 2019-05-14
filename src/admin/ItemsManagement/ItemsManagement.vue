<template>
  <div class="ItemsManagement">
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
  name: 'ItemsManagement',
  data () {
    return {
      drop: false,
      dropList: [
        {
          text: '参加会议',
          name: 'AttendTheMeeting'
        },
        {
          text: '出国交流',
          name: 'GoAbroad'
        },
        {
          text: '科研合作',
          name: 'ScientificResearchCooperation'
        },
        {
          text: '实验申请',
          name: 'ExperimentalApplication'
        },
        {
          text: '试剂耗材',
          name: 'ReagentConsumables'
        },
        {
          text: '仪器设备',
          name: 'EquipmentPurchase'
        },
        {
          text: '主办会议',
          name: 'HostMeeting'
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
