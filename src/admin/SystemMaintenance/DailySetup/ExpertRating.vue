// 专家评分表设置
<template>
  <div class="ExpertRating">
    <CTitle :screen="true" :textList="textList">信息列表</CTitle>
    <checkall v-model="multiple">
      <card
        v-for="(item, index) in messageList"
        :key="index"
        :aType="item.type"
        type="selection"
        :data="item"
        :time="false"
        >
        <p class="no border-1pxLeft">NO：{{item.name}}</p>
        <p slot="type" style="height:100%">{{item.type}}</p>
        <span class="black">申请人-所属单位</span>
        <span>项目类别</span>
        <span>项目类别</span>
        <div class="icon">
          <div @click="toQuota('一级指标')">
            <p class="iconfont">&#xe612;</p>
            <p class="desc">一级指标</p>
          </div>
          <div @click="toQuota('二级指标')">
          <p class="iconfont">&#xe613;</p>
            <p class="desc">二级指标</p>
          </div>
          <div @click="toQuota('三级指标')">
          <p class="iconfont">&#xe615;</p>
            <p class="desc">三级指标</p>
          </div>
          <div @click="toQuota('四级指标')">
          <p class="iconfont">&#xe614;</p>
            <p class="desc">四级指标</p>
          </div>
        </div>
        <div style="text-align:center">
          <button slot="button" class="abtn" @click="jump">修改</button>
          <button slot="button" class="abtn" @click="jump">复制并修改</button>
        </div>
      </card>
      <button slot="button" class="delete">删除</button>
    </checkall>
    <div class="edit-button" @click="addType('添加专家评分表')"></div>
    <Popup v-model="add" position="center" :title="title">\
      <div class="formCell">
        <p class="form-label">评分表名称</p>
        <JInput/>
      </div>
      <div class="formCell">
        <p class="form-label">评分表类别</p>
        <JInput/>
      </div>
      <div class="formCell">
        <p class="form-label">评分表类型</p>
        <JInput type="select"/>
      </div>
      <div class="button-cell">
        <button class="reset">重置</button>
        <button class="complete">完成</button>
      </div>
    </Popup>
  </div>
</template>

<script>
import Card from '@/components/card/card'
import Checkall from '@/components/checkbox/checkall'
import Popup from '@/components/popup/popup2'
export default {
  name: 'ExpertRating',
  data () {
    return {
      add: false,
      title: '新增期刊',
      textList: ['时间范围', '选择学历', '选择职称'],
      messageList: [
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '通过',
          dayin: '未打印'
        },
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '通过',
          dayin: '已打印'
        }
      ],
      multiple: []
    }
  },
  components: {
    Card,
    Checkall,
    Popup
  },
  methods: {
    jump () {
      this.$router.push({name: 'DailySetting'})
    },
    addType (msg) {
      this.title = msg
      this.add = true
    },
    toQuota (msg) {
      this.$router.push({name: 'Quota', query: {msg: msg}})
      document.title = msg
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.ExpertRating >>> .card
  margin 0
  margin-bottom 10px
  .card-content
    margin 0
    border none
    padding 0
    .card-white
      margin 0
.ExpertRating
  padding-bottom 20px
  .comTitle
    margin 0
  .checkAll
    .abtn
      background: #2873FF;
      border-radius: .06rem
      font-size: .14rem;
      color: #FFFFFF;
      width 1rem
      height .3rem
      margin 0 auto
      &:last-child
        margin-left 10px
        background: #c6daff;
        color #2873FF
    .no, .user
        font-size: 12px;
        color: #555555;
        display inline-block
        vertical-align top
    .no
      border-1pxLeft(#D3D3D3)
      padding-left 10px
    span
      display block
      font-size: 14px;
      color: #333333;
      margin-bottom 15px
    .black
      margin-top 15px
      font-size: 16px
    .border-1px
      border-1px(#d3d3d3)
      padding-bottom 15px
    .icon
      display flex
      justify-content space-around
      div
        text-align center
      .desc
        font-size .12rem
        margin-top 8px
        line-height .15rem
        margin-bottom 15px
      .iconfont
        color #2873FF
        font-size .3445rem
        font-weight 600
  .delete
    width 58px
    color white
    height 30px
    font-size 14px
    background: #FD4D4D
  .edit-button
    width .4rem
    box-sizing border-box
    height .4rem
    background-image url('../../../common/image/newDetail.png')
    background-size .45rem
    background-position center
    border-radius 50%
    box-shadow: 0px 1px  3px rgba(51,51,51,0.5);
    position fixed
    right .3rem
    bottom .39rem
  .popup
    .button-cell
      margin-top 34px
  .formCell
    padding 0 15px
    // height 35px
    font-size:14px;
    align-items center
    margin-top 10px
    color #fd4d4d
    .J-input
      width 66.67%
      border:1px solid #fd4d4d;
      border-radius:4px;
      height 26px
</style>
