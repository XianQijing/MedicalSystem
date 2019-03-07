<template>
  <div class="UserCenter">
    <c-title>
      信息列表
      <div slot="float" class="">
        筛选
        <span class="screen"></span>
      </div>
    </c-title>
    <div class="card-wapper">
      <card
        v-for="(item, index) in messageList"
        :key="index"
        :messageList="item"
        >
        <checkbox v-model="item.checked"/>
      </card>
    </div>
    <div class="btn">
      <div class="checkWapper border-1pxTop"><checkbox @change="select($event)" v-model="all"/><p>全选/反选</p></div>
      <button class="start">启用</button>
      <button class="stop">停用</button>
      <button class="delete">删除</button>
    </div>
  </div>
</template>

<script>
import CTitle from '@/components/title/title'
import Checkbox from '@/components/checkbox/checkbox'
import Card from './components/card'
export default {
  name: 'UserCenter',
  data () {
    return {
      all: false,
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
      multipleList: []
    }
  },
  methods: {
    select () {
      this.all = this.all
      this.messageList.forEach(v => {
        v.checked = this.all
      })
    }
  },
  components: {
    CTitle,
    Card,
    Checkbox
  },
  watch: {
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
      background: #FD4D4D;
</style>
