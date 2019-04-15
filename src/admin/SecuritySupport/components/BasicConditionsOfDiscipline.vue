// 人才学术水平
<template>
  <div class="TalentsAchievements">
    <!--  -->
    <CTitle>发展环境</CTitle>
    <Collaspe name="医院专科建设发展规划">
      <div class="formCell">
        <p class="form-label"></p>
        <p class="form-msg">医院专科建设发展规划占位</p>
      </div>
    </Collaspe>
    <Collaspe name="医院有效扶持专科建设的政策或措施">
      <div class="formCell">
        <p class="form-label"></p>
        <p class="form-msg">医院有效扶持专科建设的政策或措施</p>
      </div>
    </Collaspe>
    <!--  -->
    <CTitle>专科规模</CTitle>
    <Collaspe name="床位设置">
      <div class="wrapper">
        <div class="author-wrapper">
          <div class="author border-1pxLeft">
            <p>床位数</p>
            <p class="num">6</p>
          </div>
          <div class="author border-1pxLeft">
            <p>每张床位净使用面积</p>
            <p class="num">6</p>
          </div>
        </div>
      </div>
    </Collaspe>
    <!--  -->
    <CTitle>支撑条件</CTitle>
    <Collaspe name="专科发展相关科室实力">
      <div class="formCell">
        <p class="form-label"></p>
        <p class="form-msg">学科名称：重点学科</p>
      </div>
    </Collaspe>
    <Collaspe name="专科设备">
      <div class="formCell">
        <p class="form-label">名称:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">数量:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">价格:</p>
        <p class="form-msg blue">预览</p>
      </div>
      <div class="formCell">
        <p class="form-label">评价:</p>
        <p class="form-msg blue">预览</p>
      </div>
    </Collaspe>
    <!--  -->
    <CTitle>科室管理</CTitle>
    <Collaspe name="开展临床路径管理">
      <span slot="blue" class="blue">预览临床路径方案</span>
      <div class="formCell">
        <p class="form-label">单病种:</p>
        <p class="form-msg">测试课题1</p>
      </div>
    </Collaspe>
    <Collaspe name="开展优质护理服务">
      <span slot="blue" class="blue">预览文档</span>
      <div class="formCell">
        <p class="form-label">实际床位与护士数比例:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">每名责任护士平均负责患者数量:</p>
        <p class="form-msg">测试课题1</p>
      </div>
    </Collaspe>
    <!--  -->
    <div class="btn">
      <button @click="show=true">审核</button>
    </div>
    <popup position="center" v-model="show" title="项目审核">
      <div class="popup-form">
        <p class="form-label">评审意见</p>
        <textarea></textarea>
      </div>
      <div class="popup-form">
        <p class="form-label">单位意见</p>
        <JInput v-model="form.pass" type="select" @click="selected = true"></JInput>
      </div>
      <div class="button-cell">
        <button class="reset">取消</button>
        <button class="complete">确认</button>
      </div>
    </popup>

    <popup position="bottom" :overlay="false" v-model="selected">
      <van-picker
        :item-height="30"
        :columns="$store.state.columns"
        show-toolbar
        @cancel="selected = false"
        @confirm="onConfirm" />
    </popup>
  </div>
</template>

<script>
import Popup from '@/components/popup/popup2'
import Collaspe from '@/components/collaspe/collaspe'
export default {
  name: 'TalentsAchievements',
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
    Collaspe
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
.TalentsAchievements
  .comTitle
    margin 0
  .formCell
    padding 0 10px
    height 30px
    background white
    margin-bottom 2px
    align-items center
    .form-label
      font-size: 14px;
      color: #333333;
    .form-msg
      font-size: 14px;
      color: #999999;
    .blue
      color #2873FF
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
      .num
        margin-top 15px
        font-size: 20px;
        color: #999999;
.btn
  text-align center
  margin-top 20px
  button
    background #2873FF
    border-radius: 6px;
    color white
    width 100px
    height 30px
.popup-form
  padding 0 15px
  display flex
  justify-content space-between
  margin-top 10px
  .form-label
    font-size: 14px;
    color: #333333
    display inline-block
    line-height 30px
  textarea
    border: 1px solid #2873FF;
    width 74%
    box-sizing border-box
    font-size: 14px
    padding 5px
    border-radius: 4px;
    height 95px
  .J-input
    border-radius: 4px;
    font-size: 14px
    border: 1px solid #2873FF;
    height 26px
    box-sizing border-box
    width 74%
.button-cell
  font-size: 14px
  margin-top 10px
</style>
