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
  name: 'UserCenter',
  data () {
    return {
      drop: false,
      dropList: [
        {
          text: '用户信息',
          name: 'UserMessage'
        },
        {
          text: '用户业绩',
          name: 'Achievement'
        },
        {
          text: '学术简历',
          name: 'Resume'
        },
        {
          text: '科研对标',
          name: 'Scientific',
          from: 'admin'
        },
        {
          text: '继续学分',
          name: 'Credit'
        },
        {
          text: '修改密码',
          name: 'ChangePassword'
        },
        {
          text: '社会任职',
          name: 'Sociology'
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
</style>
