// 专家评审
<template>
  <div class="ExpertReview">
    <div class="drop">
      <button class="drop-down" @click="dropDown">
        <span class="iconfont" v-show="!drop">&#xe7ee;</span>
        <span class="iconfont" v-show="drop">&#xe7ed;</span>
      </button>
    </div>
    <router-view/>
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
  name: 'ExpertReview',
  data () {
    return {
      drop: false,
      dropList: [
        {
          text: '科研课题',
          name: 'ScientificResearchTopic2'
        },
        {
          text: '学科建设',
          name: 'DisciplineConstruction'
        },
        {
          text: '人才培养',
          name: 'personnelTraining'
        },
        {
          text: '科技奖励',
          name: 'TechnologyAward'
        },
        {
          text: '项目管理',
          name: 'ProjectManagement1'
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
      this.$router.push({name: value.name, params: {from: value.from}})
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
.ExpertReview
  width 100%
</style>
