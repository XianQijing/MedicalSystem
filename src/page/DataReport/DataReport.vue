<template>
  <div class="DataReport">
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
  name: 'DataReport',
  data () {
    return {
      drop: false,
      dropList: [
        {
          text: '数据查询',
          name: 'DataSearch'
        },
        {
          text: '纵向对比',
          name: 'VerticalContrast'
        },
        {
          text: '横向对比',
          name: 'HorizontalContrast'
        },
        {
          text: '科研报表',
          name: 'ScientificResearchReport'
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
