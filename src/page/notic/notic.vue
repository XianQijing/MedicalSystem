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
  name: 'Notic',
  data () {
    return {
      drop: false,
      dropList: [
        {
          text: '科研通知',
          name: 'UserMessage'
        },
        {
          text: '科研文件',
          name: 'Achievement'
        },
        {
          text: '科研制度',
          name: 'Resume'
        },
        {
          text: '相关幻灯片',
          name: 'Scientific'
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
