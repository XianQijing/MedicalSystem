<template>
  <div class="UserMessage">
    <c-title
      :screen="true"
      :textList="textList"
      screenText="筛选">
      信息列表
    </c-title>

    <div class="card-wapper">
      <checkall v-model="test">
        <card
          v-for="(item, index) in messageList"
          :key="index"
          :aType="item.type"
          type="selection"
          :data="item"
          >
          <div slot="time">{{item.time}}</div>
          <p class="no border-1pxLeft">NO：{{item.name}}</p>
          <div slot="type">{{item.type}}</div>
          <!-- <div class="type" :class="color">{{messageList.type}}</div> -->
          <span class="black">陈升息－眼科、副主任医师、医生</span>
          <span>15221135677、硕士研究生</span>
          <span>登录次数：362</span>
          <span class="resTime">注册时间：2018.09.23 13:51</span>
          <button slot="button" class="abtn" @click="jump">修改</button>
        </card>
        <button slot="button" class="start" @click="stop('启用')">启用</button>
        <button slot="button" class="stop" @click="stop('停用')">停用</button>
        <button slot="button" class="delete" @click="stop('删除')">删除</button>
      </checkall>
    </div>
  </div>
</template>

<script>
import Checkall from '@/components/checkbox/checkall'
import Card from '@/components/card/card'
export default {
  name: 'UserMessage',
  data () {
    return {
      test: [],
      keshi: 'sf',
      messageList: [
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '正常'
        },
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '停用'
        },
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '停用'
        },
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '停用'
        }
      ],
      textList: ['时间范围', '所属科室', '学历选择', '学位选择', '职称选择', '职称级别']
    }
  },
  methods: {
    // 路由跳转
    jump () {
      this.$router.push({name: 'EditPersonalMessage'})
    },
    stop (type) {
      if (this.test.length > 0) {
        // this.open()
        // this.toDo = type
        this.$MessageBox(`确认${type}所选任职`, '提示', {
          cancelButtonText: '取消',
          confirmButtonText: '确定'
        }).then(() => {

        }).catch(() => {

        })
      }
    }
  },
  components: {
    Card,
    Checkall
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.UserMessage
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
    .no
      padding-left 10px
      border-1pxLeft(#D3D3D3)
    .type
      height 40px
      width 30px
      position absolute
      font-size: 10px;
      color: #FFFFFF;
      top 0
      right 10px
      line-height 40px
      text-align center
    span
      display block
      font-size: 14px;
      color: #333333;
      margin-bottom 17px
    .black
      margin-top 15px
      font-weight 700
      font-size: 16px;
    .resTime
      font-size: 12px;
      color: #999999;
    .button
      // background: #2873FF;
      // border-radius: 6px;
      // font-size: 14px;
      // color: #FFFFFF;
      // width 100px
      height 30px
      // display block
      // margin 0 auto
  .delete, .start, .stop
    width 58px
    color white
    height 30px
    background: #FD4D4D
    font-size 14px
  .start
    background: #45C186;
  .stop
    background: #F9712C;
  .delete
    background: #FD4D4D
</style>
