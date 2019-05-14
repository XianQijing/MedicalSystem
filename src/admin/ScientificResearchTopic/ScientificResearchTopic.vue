// 项目管理
<template>
  <div class="ScientificResearchTopic" style="height: 100%">
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
  name: 'ScientificResearchTopic',
  data () {
    return {
      drop: false,
      dropList: [
        {
          text: '项目设置',
          name: 'ProjectSettings'
        },
        {
          text: '课题指南',
          name: 'TaskGuide'
        },
        {
          text: '计划发布',
          name: 'PlanRelease'
        },
        {
          text: '形式审查',
          name: 'FormalInspection'
        },
        {
          text: '评审管理',
          name: 'ReviewManagement'
        },
        {
          text: '批准文件',
          name: 'Approval'
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
