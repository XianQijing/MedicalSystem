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
          text: '课题指南',
          name: 'ProjectSettings'
        },
        {
          text: '课题申报',
          name: 'ProjectDeclaration'
        },
        {
          text: '评审进程',
          name: 'ReviewManagement'
        },
        {
          text: '直接评审',
          name: 'DirectAssessment'
        },
        {
          text: '课题初评',
          name: 'PreliminaryAssessment'
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
