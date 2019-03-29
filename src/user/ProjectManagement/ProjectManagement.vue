// 项目管理
<template>
  <div class="ProjectManagement" style="height: 100%">
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
  name: 'ProjectManagement',
  data () {
    return {
      drop: false,
      dropList: [
        {
          text: '立项管理',
          name: 'ProjectApproval'
        },
        {
          text: '项目合同',
          name: 'ProjectContract'
        },
        {
          text: '项目变更',
          name: 'ProjectChange'
        },
        {
          text: '日常考核',
          name: 'Daily'
        },
        {
          text: '中期检查',
          name: 'IntermediateInspection'
        },
        {
          text: '结题鉴定',
          name: 'Concluding'
        },
        {
          text: '结转项目',
          name: 'CarryForward'
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
