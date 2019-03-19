<template>
  <div class="I">
    <c-title
      :screen="true"
      screenText="筛选"
      :textList="textList">
      学分列表
    </c-title>

    <div class="card-wapper">
      <card
        :time="false"
        v-for="(item, index) in messageList"
        :key="index"
        :aType="item.type"
        >
        <p class="no border-1pxLeft">NO：{{item.name}}</p>
        <p slot="type" style="height:100%">{{item.type}}</p>
        <!-- <div class="type" :class="color">{{messageList.type}}</div> -->
        <span class="black">陈升息－眼科、副主任医师、医生</span>
        <span>闸北中心医院、主任医师</span>
        <p style="padding: 15px 0" class="black border-1pxTop">项目名称</p>
        <div class="two">
          <span>项目编号：283746283</span>
          <span>证书编号：283746283</span>
        </div>
        <div class="two">
          <span>学分属性：省市级</span>
          <span>I类学分：12</span>
        </div>
        <span class="resTime">项目主办单位：闸北中心医院</span>
        <button slot="button" class="abtn" @click="jump('查看详情')">查看</button>
      </card>
    </div>
  </div>
</template>

<script>
import CTitle from '@/components/title/title'
import Card from '@/components/card/card'
export default {
  name: 'I',
  data () {
    return {
      keshi: 'sf',
      textList: ['时间范围', '学分属性', '所属科室', '性别选择', '职称选择', '审核状态'],
      messageList: [
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '通过',
          checked: false
        },
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '审核中',
          checked: false
        },
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '审核中',
          checked: false
        },
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '通过',
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
      }
    }
  },
  methods: {
    // 路由跳转
    jump (name) {
      this.$router.push({name: 'CreditDetail', params: {name: '查看详情'}})
    },
    stop (type) {
      if (this.multipleList.length > 0) {
        this.open()
        this.toDo = type
      }
    }
  },
  components: {
    CTitle,
    Card
    // JInput,
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../../common/style/mixin.styl'
.I >>> .card
  margin 0
  .card-content
    border none
    margin 0
    padding 0
    padding-bottom 10px
    .card-white
      margin 0
      .no
        padding 0!important
        border-none()
.I
  // padding-bottom 30px
  .comTitle
    margin 0
  .card-wapper
    .abtn
      background: #2873FF;
      border-radius: 6px;
      font-size: 14px;
      color: #FFFFFF;
      width 100px
      height 30px
      display block
      margin 0 auto
    .back
      font-size: 14px;
      color: #2873FF;
      background: #C6DAFF;
      border-radius: 6px;
      width 100px
      height 30px
      margin-left 10px
    .no, .user
        font-size: 12px;
        color: #555555;
        display inline-block
        vertical-align top
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
    .border-1pxTop
      border-1pxTop(#D3D3D3)
    .resTime
      font-size: 12px;
      color: #999999;
    .button
      height 30px
    .two
      display flex
      justify-content space-between
      font-size: 14px;
      color: #333333;
</style>
