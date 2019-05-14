<template>
  <div class="managementOfAchievement">
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
  name: 'ManagementOfAchievement',
  data () {
    return {
      drop: false,
      dropList: [
        {
          text: '成果转化',
          name: 'Achievement1'
        },
        {
          text: '发明专利',
          name: 'Patent'
        },
        {
          text: '科技奖励',
          name: 'TechnologyAward'
        },
        {
          text: '学术论文',
          name: 'AcademicPapers'
        },
        {
          text: '著作出版',
          name: 'BookPublishing'
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
