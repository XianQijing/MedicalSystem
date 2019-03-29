// 实验申请--事项申请
<template>
  <div class="Experimental">
    <CTitle>实验室使用申请 <span slot="float" style="color: #555555;">{{page}}/2</span></CTitle>
    <div v-show="page === 1">
      <div class="wrapper">
        <p class="title">使用申请信息</p>
        <div class="item-wrapper border-1px">
          <p class="item-title">实验名称：</p>
          <JInput placeholder="下拉选择"/>
        </div>
        <div class="item-wrapper border-1px">
          <p class="item-title">支付费用：</p>
          <JInput placeholder="下拉选择"/>
        </div>
        <div class="item-wrapper border-1px">
          <p class="item-title">课题名称：</p>
          <JInput placeholder="下拉选择"/>
        </div>
        <div class="item-wrapper border-1px">
          <p class="item-title">项目经费：</p>
          <JInput placeholder="下拉选择"/>
        </div>
        <div class="item-wrapper border-1px">
          <p class="item-title">使用时间：</p>
          <JInput placeholder="下拉选择" type="select"/>
        </div>
      </div>

      <div class="wrapper margin">
        <div class="title">
          参与实验人员
          <div>
            <span>新增</span>
            <span>删除</span>
          </div>
        </div>
        <div class="item-wrapper border-1px">
          <p class="item-title">姓名：</p>
          <JInput placeholder="下拉选择"/>
        </div>
        <div class="item-wrapper border-1px">
          <p class="item-title">科室：</p>
          <JInput placeholder="下拉选择"/>
        </div>
        <div class="item-wrapper border-1px">
          <p class="item-title">职称：</p>
          <JInput placeholder="下拉选择"/>
        </div>
        <div class="item-wrapper border-1px">
          <p class="item-title">实验分工：</p>
          <JInput placeholder="下拉选择"/>
        </div>
      </div>
    </div>

    <div v-show="page === 2">
      <div class="wrapper">
        <div class="item-wrapper">
          <p class="item-title">实验内容：</p>
          <textarea></textarea>
        </div>
      </div>
      <div class="wrapper margin">
        <div class="item-wrapper">
          <p class="item-title">实验流程：</p>
          <textarea></textarea>
        </div>
      </div>
      <div class="wrapper margin">
        <div class="item-wrapper">
          <p class="item-title">实验计划：</p>
          <textarea></textarea>
        </div>
      </div>
    </div>

    <div class="btn">
      <button class="butto" v-show="page === 1" @click="pageChange('next')">下一项</button>
      <button class="butto up" v-show="page === 2" @click="pageChange('up')">上一项</button>
    </div>
    <div class="check" v-show="page === 2">
      <Checkbox v-model="checked"/>
      <span class="red">经费资助接受者承诺</span>
      <span class="blue" @click="show = true">承诺内容</span>
    </div>
    <div class="button-cell" v-show="page === 2">
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
import CTitle from '@/components/title/title'
import JInput from '@/components/input/j-input'
import Checkbox from '@/components/checkbox/checkbox'
import Popup from '@/components/popup/popup2'
export default {
  namw: 'Experimental',
  data () {
    return {
      page: 2,
      checked: true,
      show: false,
      icon: require('../../../common/image/upload.png')
    }
  },
  components: {
    CTitle,
    JInput,
    Checkbox,
    Popup
  },
  methods: {
    pageChange (msg) {
      if (msg === 'next') {
        this.page++
      } else {
        this.page--
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl';
.Experimental
  .wrapper
    background: #FFFFFF;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.50);
    padding 0 10px 0 10px
    position relative
    .title
      font-size 14px;
      color: #333333;
      padding-top 10px
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
.margin
  margin-top 10px
.up
  background: #C6DAFF;
  color: #2873FF;
</style>
