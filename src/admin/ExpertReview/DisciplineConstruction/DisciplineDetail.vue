<template>
  <div class="DisciplineDetail">
    <div class="base">
      <div class="left">
        <div>
          <p>计划名称</p>
          <p class="desc">单位级课题研究2017.05.11</p>
        </div>
        <div class="text">
          <p>发布单位</p>
          <p class="desc">闸北中心医院</p>
        </div>
      </div><div class="right">
        <div class="formCell">
          <p class="form-label">联系人:</p>
          <p class="form-msg">陈阿斌</p>
        </div>
        <div class="formCell">
          <p class="form-label">联系办公室:</p>
          <p class="form-msg">陈阿斌</p>
        </div>
        <div class="formCell">
          <p class="form-label">电子邮箱:</p>
          <p class="form-msg">陈阿斌</p>
        </div>
        <div class="formCell">
          <p class="form-label">联系电话:</p>
          <p class="form-msg">陈阿斌</p>
        </div>
        <div class="formCell">
          <p class="form-label">开始时间:</p>
          <p class="form-msg">陈阿斌</p>
        </div>
        <div class="formCell">
          <p class="form-label">截止时间:</p>
          <p class="form-msg">陈阿斌</p>
        </div>
      </div>
    </div>
    <div class="tabs">
      <button class="tab" :class="{'active': active === 0}" @click="Tabclick(0)">项目信息</button>
      <button class="tab" :class="{'active': active === 1}" @click="Tabclick(1)">经费预算</button>
      <div class="float">
        <span>审核记录</span>
        <img src="../../../common/image/shenhe.png" alt="">
      </div>
    </div>
    <div v-show="active === 0">
      <div class="formCell">
        <p class="form-label">项目名称:</p>
        <p class="form-msg">陈阿斌</p>
      </div>
      <div class="formCell">
        <p class="form-label">项目类别:</p>
        <p class="form-msg">陈阿斌</p>
      </div>
      <div class="formCell">
        <p class="form-label">关键词:</p>
        <p class="form-msg">陈阿斌</p>
      </div>
      <div class="formCell">
        <p class="form-label">研究类型:</p>
        <p class="form-msg">陈阿斌</p>
      </div>
      <div class="formCell">
        <p class="form-label">项目所在科室:</p>
        <p class="form-msg">陈阿斌</p>
      </div>
      <div class="formCell">
        <p class="form-label">其他相关学科:</p>
        <p class="form-msg">陈阿斌</p>
      </div>
      <div class="formCell">
        <p class="form-label">项目所属学科:</p>
        <p class="form-msg">陈阿斌</p>
      </div>
      <div class="formCell">
        <p class="form-label">项目开始时间:</p>
        <p class="form-msg">陈阿斌</p>
      </div>
      <div class="formCell">
        <p class="form-label">项目结束时间:</p>
        <p class="form-msg">陈阿斌</p>
      </div>
      <div class="form-cell">
        <p class="form-label">项目内容摘要:</p>
        <p class="form-msg">陈阿斌</p>
      </div>
    </div>
    <div class="table" v-show="active === 1">
      <table>
        <tr>
          <th>项目</th>
          <th>项目经费</th>
          <th>匹配经费</th>
          <th>其他经费</th>
          <th>备注</th>
        </tr>
        <tr>
          <td>直接经费</td>
          <td>2000.00</td>
          <td>2000.00</td>
          <td>2000.00</td>
          <td>2000.00</td>
        </tr>
        <tr>
          <td>设备费</td>
          <td>2000.00</td>
          <td>2000.00</td>
          <td>2000.00</td>
          <td>2000.00</td>
        </tr>
        <tr>
          <td>会议费</td>
          <td>2000.00</td>
          <td>2000.00</td>
          <td>2000.00</td>
          <td>2000.00</td>
        </tr>
        <tr>
          <td>间接经费</td>
          <td>2000.00</td>
          <td>2000.00</td>
          <td>2000.00</td>
          <td>2000.00</td>
        </tr>
        <tr>
          <td>设备费</td>
          <td>2000.00</td>
          <td>2000.00</td>
          <td>2000.00</td>
          <td>2000.00</td>
        </tr>
        <tr>
          <td class="all">总计</td>
          <td>2000</td>
          <td colspan="3"></td>
        </tr>
        <tr>
          <td class="all">合计</td>
          <td>2000</td>
          <td colspan="3"></td>
        </tr>
      </table>
    </div>
    <div class="btn">
      <button @click="show=true">评审编辑</button>
    </div>
    <popup position="center" v-model="show" title="评审编辑">
      <div class="popupForm">
        <p class="form-label">评审意见</p>
        <textarea></textarea>
      </div>
      <div class="popup-form">
        <p class="form-label">单位意见</p>
        <p class="blue" @click="jump">评分表单</p>
      </div>
      <div class="button-cell">
        <button class="reset">取消</button>
        <button class="complete">确认</button>
      </div>
    </popup>

    <popup position="center" :overlay="false" v-model="selected">
    </popup>
  </div>
</template>

<script>
import Popup from '@/components/popup/popup2'
export default {
  name: 'DisciplineDetail',
  data () {
    return {
      active: 0,
      show: false,
      selected: false,
      form: {
        pass: '通过'
      }
    }
  },
  components: {
    Popup
  },
  methods: {
    onConfirm (value) {
      this.form.pass = value
      this.selected = false
    },
    jump () {
      this.$router.push({name: 'ScoreSheet'})
    },
    Tabclick (num) {
      this.active = num
    }
  }
}
</script>

<style lang="stylus" scoped>
.DisciplineDetail
  margin 0 6px
  padding 10px 0
  .base
    display flex
    .left
      width 33.3333%
      background white
      text-align center
      vertical-align top
      padding 10px 10px 0 10px
      box-sizing border-box
      p
        font-size .12rem
        padding-bottom .1rem
      .desc
        font-size .16rem
        line-height .2rem
      .text
        margin-top .15rem
    .right
      margin-left 2px
      vertical-align top
      width calc(100% - 33.3333% - 2px)
      .formCell
        font-size .12rem
        height .26rem
  .formCell
    background white
    padding 0 10px
    height .3rem
    align-items center
    font-size .14rem
    margin-bottom 2px
    &:last-child
      margin 0
    .form-msg
      color #999
  .form-cell
    margin-top 2px
    background white
    padding 0 10px
    font-size .14rem
    .form-label
      line-height .3rem
    .form-msg
      height .57rem
      line-height .18rem
  .float
    color: #2873ff
    font-size .13rem
    display inline-block
    position absolute
    right 0
    bottom 0
    img
      width .11rem
      vertical-align middle
  .popup-form
    padding 0 15px
    margin-top 10px
    .form-label, .blue
      font-size: 14px;
      color: #333333
      display inline-block
      line-height 30px
    .blue
      color #2873ff
      font-size 12px
      margin-left 24px
  .popupForm
    padding 0 15px
    .form-label
      font-size: 14px;
      margin 10px 0
      color: #333333
    textarea
      border: 1px solid #979797;
      width 100%
      box-sizing border-box
      font-size: 14px
      padding 5px
      border-radius: 4px;
      height 226px
  .button-cell
    font-size: 14px
    margin-top 10px
  .btn
    text-align center
    margin-top 20px
    button
      background #2873FF
      border-radius: 6px;
      color white
      width 100px
      height 30px
  .tabs
    margin 10px 0
    position relative
    .tab
      height .3rem
      width .88rem
      border: 1px solid #2873ff;
      background none
      color #2873ff
      font-size .12rem
    .active
      background: #2873FF
      color white
  table
    .all
      text-align left
      padding-left 8px
    tr
      background white
      td:first-child
        color black
</style>
