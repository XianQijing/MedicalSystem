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
.ExpertReview
  width 100%
</style>
