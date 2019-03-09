<template>
  <div class="UserCenter">
    <c-title>
      信息列表
      <div slot="float" @click="screen(true)">
        筛选
        <span class="screen"></span>
      </div>
    </c-title>

    <div class="drop">
      <button class="drop-down" @click="dropDown">
        <span class="iconfont" v-show="!drop">&#xe7ee;</span>
        <span class="iconfont" v-show="drop">&#xe7ed;</span>
      </button>
    </div>

    <div class="card-wapper">
      <card
        v-for="(item, index) in messageList"
        :key="index"
        :messageList="item"
        >
        <checkbox v-model="item.checked"/>
        <button slot="button" class="abtn" @click="jump">修改</button>
      </card>
    </div>

    <div class="btn">
      <div class="checkWapper border-1pxTop"><checkbox @change="select($event)" v-model="all"/><p>全选/反选</p></div>
      <button class="start">启用</button>
      <button class="stop" @click="stop('停用')">停用</button>
      <button class="delete" @click="stop('删除')">删除</button>
    </div>
    <!--  -->
    <popup :toShow="popShow" @close="screen">
      <popup-data :selectList="selectList"></popup-data>
    </popup>
    <popup position="center" :toShow="warning" @close="open">
      <div class="warning">
        <p class="waring-title border-1px">提示</p>
        <div class="warning-content">
          <p class="icon"></p>
          <p class="text">确认{{toDo}}所选用户！</p>
        </div>
      <div class="button-cell">
        <button class="complete" @click="open">取消</button>
        <button class="reset" @click="open">确认</button>
      </div>
      </div>
    </popup>
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
import CTitle from '@/components/title/title'
import Checkbox from '@/components/checkbox/checkbox'
import Popup from '@/components/popup/popup'
// import JInput from '@/components/input/j-input'
import Card from './components/card'
import PopupData from './components/popupData'
export default {
  name: 'UserCenter',
  data () {
    return {
      all: false,
      popShow: false,
      overlay: false,
      warning: false,
      drop: false,
      keshi: 'sf',
      toDo: '删除',
      messageList: [
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '正常',
          checked: false
        },
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '停用',
          checked: false
        },
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '停用',
          checked: false
        },
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '停用',
          checked: false
        }
      ],
      multipleList: [],
      selectList: {
        time: [5],
        belong: ['眼科', '普通外科', '肝胆外科', '心胸外科'],
        eduation: [7],
        degree: [4],
        titles: [8],
        levels: [0],
        search: [1]
      },
      dropList: ['用户信息', '用户业绩', '学术简历', '科研对标']
    }
  },
  methods: {
    // 全选事件
    select () {
      this.messageList.forEach(v => {
        v.checked = this.all
      })
    },
    // 弹出层显隐
    screen (type) {
      this.popShow = type
    },
    // 路由跳转
    jump () {
      this.$router.push('/editPersonalMessage')
    },
    stop (type) {
      if (this.multipleList.length > 0) {
        this.open()
        this.toDo = type
      }
    },
    open () {
      this.warning = !this.warning
    },
    dropDown () {
      this.drop = !this.drop
    },
    dropConfirm (value, index) {
      this.$toast(value)
      this.dropDown()
    }
  },
  components: {
    CTitle,
    Card,
    Checkbox,
    Popup,
    // JInput,
    PopupData
  },
  watch: {
    // 深度监听messageList，对比新旧变量的checked，不一样时加入multipleList
    messageList: {
      handler (newValue, oldValue) {
        let data = []
        for (let i = 0; i < newValue.length; i++) {
          if (newValue[i].checked === true) {
            data.push(newValue[i])
          }
        }
        this.multipleList = data
      },
      deep: true
    },
    // 监听多选数组，设置全选按钮状态
    multipleList (value) {
      if (value.length === this.messageList.length) {
        this.all = true
      } else {
        this.all = false
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/style/mixin.styl'
.UserCenter >>> .float
  font-size: 13px;
  color: #2873FF;
  .screen
    display inline-block
    width 13px
    height 13px
    background-size 13px
    vertical-align top
    bg-image(screen)
.UserCenter
  padding-bottom 30px
  .card-wapper
    margin 0 6px
    .abtn
      background: #2873FF;
      border-radius: 6px;
      font-size: 14px;
      color: #FFFFFF;
      width 100px
      height 30px
      display block
      margin 0 auto
  .btn
    background: #FAFAFA;
    width 100%
    height 30px
    position fixed
    bottom 0
    left 0
    display flex
    .checkWapper
      flex 2
      border-1pxTop(rgb(196, 196, 198))
      font-size: 14px;
      color: #333333;
      line-height 30px
      text-align center
      p
        display inline-block
        vertical-align top
      .checkbox
        // vertical-align top
        height 12px
        display inline-block
        margin-right 10px
    .start, .stop, .delete
      flex 1
      color white
      font-size: 14px;
    .start
      background: #45C186;
    .stop
      background: #F9712C;
    .delete
      background: #FD4D4D
.warning
  width 80%
  max-width 300px
  margin 0 auto
  padding-top 10px
  background white
  .waring-title
    margin 0 10px
    padding 15px 0
    text-align center
    font-size: 16px;
    color: #333333;
    font-weight 700
    border-1px(#D3D3D3)
  .warning-content
    padding 37px 0
    text-align center
    .icon
      bg-image(tips)
      height 28.7px
      width 28.7px
      background-size 28.7px
      margin 0 auto
      margin-bottom 20px
    .text
      font-weight 700
      font-size: 16px
.drop
  position absolute
  width 100%
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
