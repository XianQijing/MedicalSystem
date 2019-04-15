// 学科基本数据
<template>
  <div class="SubjectBasicData">
    <CTitle>学术梯队</CTitle>
    <Collaspe name="专业技术职称">
      <div class="wrapper">
        <div class="title">
          <span>SCI收录篇数:</span>
          <span class="float">34篇</span>
        </div>
        <div class="author-wrapper">
          <div class="author border-1pxLeft">
            <p>正高职称</p>
            <p class="num">6</p>
          </div>
          <div class="author border-1pxLeft">
            <p>副高职称</p>
            <p class="num">6</p>
          </div>
          <div class="author border-1pxLeft">
            <p>中级职称</p>
            <p class="num">6</p>
          </div>
          <div class="author border-1pxLeft">
            <p>初级职称</p>
            <p class="num">6</p>
          </div>
        </div>
        <div class="title">
          <span>中高级人员占学科团队 72%</span>
        </div>
      </div>
    </Collaspe>
    <Collaspe name="最高学历">
      <div class="wrapper">
        <div class="title">
          <span>SCI收录篇数:</span>
          <span class="float">34篇</span>
        </div>
        <div class="author-wrapper">
          <div class="author border-1pxLeft">
            <p>博士学历</p>
            <p class="num">6</p>
          </div>
          <div class="author border-1pxLeft">
            <p>硕士学历</p>
            <p class="num">6</p>
          </div>
          <div class="author border-1pxLeft">
            <p>本科学历</p>
            <p class="num">6</p>
          </div>
          <div class="author border-1pxLeft">
            <p>其他学历</p>
            <p class="num">6</p>
          </div>
        </div>
        <div class="title">
          <span>中高级人员占学科团队 72%</span>
        </div>
      </div>
    </Collaspe>
    <Collaspe name="学员结构">
      <div class="wrapper">
        <div class="title">
          <span>SCI收录篇数:</span>
          <span class="float">34篇</span>
        </div>
        <div class="author-wrapper">
          <div class="author border-1pxLeft">
            <p>中医学专业</p>
            <p class="num">6</p>
          </div>
          <div class="author border-1pxLeft">
            <p>西医学专业</p>
            <p class="num">6</p>
          </div>
          <div class="author border-1pxLeft">
            <p>中西医结合</p>
            <p class="num">6</p>
          </div>
          <div class="author border-1pxLeft">
            <p>其他专业</p>
            <p class="num">6</p>
          </div>
        </div>
        <div class="title">
          <span>学员结构是否合理</span>
          <JRadioGrounp class="float">
            <JRadio name="0">合理</JRadio>
            <JRadio name="1">不合理</JRadio>
          </JRadioGrounp>
        </div>
      </div>
    </Collaspe>
    <CTitle>科学研究</CTitle>
    <Collaspe name="学术论文">
      <div class="wrapper">
        <div class="author-wrapper">
          <div class="author border-1pxLeft">
            <p>发表<br/>学术论文</p>
            <p class="num">6</p>
          </div>
          <div class="author border-1pxLeft">
            <p>中文<br/>核心期刊</p>
            <p class="num">6</p>
          </div>
          <div class="author border-1pxLeft">
            <p>SCI<br/><br/></p>
            <p class="num">6</p>
          </div>
          <div class="author border-1pxLeft">
            <p>出版专著<br/><br/></p>
            <p class="num">6</p>
          </div>
        </div>
      </div>
    </Collaspe>
  </div>
</template>

<script>
import Popup from '@/components/popup/popup2'
import JRadio from '@/components/radio/JRadio'
import JRadioGrounp from '@/components/radio/JRadioGrounp'
import Collaspe from '@/components/collaspe/collaspe'
export default {
  name: 'SubjectBasicData',
  data () {
    return {
      show: false,
      selected: false,
      form: {
        pass: '通过'
      }
    }
  },
  components: {
    Popup,
    Collaspe,
    JRadio,
    JRadioGrounp
  },
  methods: {
    onConfirm (value) {
      this.form.pass = value
      this.selected = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.SubjectBasicData
  .comTitle
    margin 0
.wrapper
  background white
  margin-top 2px
  &:first-child
    margin 0
  .title
    padding 0 10px
    font-size: 12px
    line-height: 26px
    height 26px
    .float
      float right
  .author-wrapper
    box-shadow: 0px 1px  2px rgba(0,0,0,0.5)
    padding 10px 0
    display flex
    .author
      flex 1
      text-align center
      font-size: 14px
      border-1pxLeft(#d3d3d3)
      &:first-child
        border-none()
      p
        line-height 18px
      .num
        margin-top 15px
        font-size: 20px;
        color: #999999;
</style>
