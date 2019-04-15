// 事项申请
<template>
  <div class="ApplicationForMatters">
    <CTitle>出国交流申请</CTitle>
    <div class="wrapper">
      <p class="title">交流信息</p>
      <div class="item-wrapper border-1px">
        <p class="item-title">学术会议名称：</p>
        <JInput placeholder="下拉选择"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">学术会议名称（英文）：</p>
        <JInput placeholder="下拉选择"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">会议地点：</p>
        <JInput placeholder="下拉选择"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">年内出国次数：</p>
        <JInput placeholder="下拉选择" type="select"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">离院时间：</p>
        <JInput placeholder="下拉选择"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">返院日期：</p>
        <JInput placeholder="下拉选择" type="select"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">参会论文题目：</p>
        <JInput placeholder="下拉选择" type="select"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">参会论文题目（英文）：</p>
        <JInput placeholder="下拉选择"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">出国培训名称：</p>
        <JInput placeholder="下拉选择"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">出国培训名称（英文）：</p>
        <JInput placeholder="下拉选择"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">组织单位名称：</p>
        <JInput placeholder="下拉选择"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">经费来源证明：</p>
        <JInput placeholder="下拉选择"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">经费资助方名称：</p>
        <JInput placeholder="下拉选择"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">论文报告形式：</p>
        <JInput placeholder="下拉选择" type="select"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title a">上传出国学习、培训、交流计划：</p>
        <div class="upload">
          <input type="file" class="tem">
          <div class="text"><img :src="icon" alt="">上传文件</div>
        </div>
      </div>
    </div>

    <div class="check">
      <Checkbox v-model="checked"/>
      <span class="red">经费资助接受者承诺</span>
      <span class="blue" @click="show = true">承诺内容</span>
    </div>
    <div class="button-cell">
      <button class="reset">重置</button>
      <button class="complete">确认提交</button>
    </div>

    <Popup position="center" title="承诺内容" v-model="show">
      <ol type="1">
        <li>1<p>此表仅供教学管理部审核专用，不代表请假手续及院部专用申请表。</p></li>
        <li>2<p>申请时提供：（1）会议通知，论文交流、特邀代表、担任大会或分会执行主席（主持）的证明；（2）国际会议组织者的正式邀请函；（3）参加会议相关经费来源的书面证明。</p></li>
        <li>3<p>出国（境）学术交流原则上要求副高职称以上，每人每年1次，年内第2次出国需有论文大会交流或担任大会职务；其他人员出国（境）学术交流必须有论文大会交流（限第一作者或通讯作者），否则不予审批；如为培训交流必须有院部批准的学习计划。（均需附相关证明）</p></li>
      </ol>
      <p class="desc">此项资助是为了促进医疗事业发展，不附带任何附加条件，受赠人不给于资助方任何与商品（服务）购销有关的承诺。如有违反，愿意承担相应法律责任。</p>
    </Popup>
  </div>
</template>

<script>
import Checkbox from '@/components/checkbox/checkbox'
import Popup from '@/components/popup/popup2'
export default {
  namw: 'ApplicationForMatters',
  data () {
    return {
      checked: true,
      show: false,
      icon: require('../../../common/image/upload.png')
    }
  },
  components: {
    Checkbox,
    Popup
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl';
.ApplicationForMatters
  .wrapper
    background: #FFFFFF;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.50);
    padding 10px 10px 0 10px
    position relative
    .title
      font-size 14px;
      color: #333333;
      div
        float right
        font-size: 14px;
        color: #2873FF;
        span
          margin-left 10px
    .item-wrapper
      border-1px(#D3D3D3)
      padding 15px 10px
      position relative
      &:last-child
        border-none()
      .item-title
        display inline-block
        font-size: 16px;
        color: #FD4D4D;
        vertical-align top
      .a
        display block
      .JRadioGrounp
        display inline-block
        float right
      .J-input
        border: 1px solid #FD4D4D;
        border-radius: 6px;
        width 1rem
        min-width 100px
        height 30px
        position absolute
        right 0
        top 8px
      textarea
        border: 1px solid #FD4D4D;
        border-radius: 6px;
        display block
        width 100%
        margin-top 10px
        padding 10px
        box-sizing border-box
        height 80px
    .upload
      border none
      // display inline-block
      width 100%
      text-align center
      height 37px
      position relative
      input
        border none
        position absolute
        bottom 0
        margin 0
        padding 0
        height 14px
        width 75px
        opacity 0
        left 50%
        margin-left -37.5px
      .text
        position absolute
        font-size 14px
        color: #2873FF;
        bottom 0
        vertical-align bottom
        width 100%
        text-align center
        img
          width 19px
          height 19px
          vertical-align bottom
          margin-right 10px
.button-cell
  position fixed
  width 100%
  bottom 0
  left 0
.check
  margin 10px 10px 30px 10px
  .red
    vertical-align middle
    font-size: 12px;
    color: #FD4D4D;
    margin-left 5px
  .checkbox
    vertical-align: middle;
    width 14px
    height 14px
  .blue
    float right
    vertical-align: middle;
    font-size: 12px;
    color: #206EFF;
    text-decoration underline
ol
  margin 0 20px
  margin-top 15px
  p
    display inline-block
    font-size: 12px;
    color: #555555;
    width 85%
    vertical-align top
    margin-left 2em
    line-height 16px
.popup
  .desc
    margin 0 20px
    font-size: 12px;
    color: #555555;
    line-height 16px
    margin-top 20px
    padding-bottom 15px
</style>
