<template>
  <div class="managementOfAchievement">
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
  name: 'ManagementOfAchievement',
  data () {
    return {
      drop: false,
      dropList: [
        {
          text: '成果转化',
          name: 'Achievement'
        },
        {
          text: '发明专利',
          name: 'Patent'
        },
        {
          text: '科技成果',
          name: 'SAndTAchievements'
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
.managementOfAchievement
  width 100%
</style>
