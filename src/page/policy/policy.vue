<template>
  <div>
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
  name: 'Policy',
  data () {
    return {
      drop: false,
      dropList: [
        {
          text: '国务院',
          name: 'UserMessage'
        },
        {
          text: '国家卫健委',
          name: 'Achievement'
        },
        {
          text: '教育部',
          name: 'Resume'
        },
        {
          text: '科技部',
          name: 'Scientific'
        },
        {
          text: '省市自治区',
          name: 'provinceOfPolicy'
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
      if (value.name === 'provinceOfPolicy') {
        this.$router.push({name: 'ProvinceOfPolicy'})
      }
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
