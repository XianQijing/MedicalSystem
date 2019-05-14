<template>
  <div class="home">
    <div class="drop">
      <button class="drop-down" @click="dropDown">
        <span class="iconfont" v-show="!drop">&#xe7ee;</span>
        <span class="iconfont" v-show="drop">&#xe7ed;</span>
      </button>
    </div>
    <div class="tabs">
      <button
        :class="{'active': item.name === active}"
        v-for="(item, index) in list"
        :key="index"
        @click="jump(item)"
      >
      {{item.name}}
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
  name: 'LeadingOffice',
  data () {
    return {
      drop: false,
      list: [
        {
          name: '院长办公',
          path: 'LeadingOffice'
        },
        {
          name: '项目审批',
          path: 'ProjectApproval1'
        },
        {
          name: '事项审批',
          path: 'MattersApproval'
        },
        {
          name: '经费审批',
          path: 'FundingApproval1'
        }
      ],
      dropList: ['课题审批', '学科审批', '人才审批', '奖励审批']
    }
  },
  computed: {
    active () {
      return this.$store.state.LeadingOfficeActive
    }
  },
  components: {
    Popup
  },
  methods: {
    jump (msg) {
      this.$store.commit('changeActive', msg.name)
      this.$router.push({name: msg.path})
    },
    dropDown () {
      this.drop = !this.drop
    },
    dropConfirm (value, index) {
      this.dropDown()
      // this.$router.push({name: value.name})
      this.$store.commit('changeTitle', value)
    }
  },
  mounted () {
    this.$store.commit('changeTitle', '课题审批')
  }
}
</script>

<style lang="stylus" scoped>
.home
  padding-top 10px
  .tabs
    margin 0 6px 0 6px
    button
      width calc(100% / 4 - 3px)
      height .3rem
      border: 1px solid #2873ff
      margin-right 4px
      background none
      color #2873ff
      font-size .12rem
      &:last-child
        margin-right 0
    .active
      background #2873ff
      color white
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
