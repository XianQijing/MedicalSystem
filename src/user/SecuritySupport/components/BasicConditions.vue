<template>
  <div class="BasicConditions">
    <CTitle>
      发展环境
      <span slot="float" style="color: #555555;">1/3</span>
    </CTitle>
    <div class="wrapper">
      <p class="title">医院专科建设发展规划</p>
      <Upload/>
    </div>
    <div class="wrapper top">
      <p class="title">医院有效扶持专科建设的政策或措施</p>
      <Upload/>
    </div>
    <CTitle>
      专科规模
    </CTitle>
    <div class="wrapper">
      <p class="title">床位设置</p>
      <div class="formCell border-1px">
        <p class="form-label">正高职称(人):</p>
        <JInput/>
      </div>
      <div class="formCell border-1px">
        <p class="form-label">每张床位净使用面积(平方米):</p>
        <JInput/>
      </div>
    </div>

    <div class="btn">
      <button class="butto" @click="change">下一项</button>
    </div>
  </div>
</template>

<script>
import CTitle from '@/components/title/title'
import Upload from '@/components/upload/upload'
import JInput from '@/components/input/j-input'
export default {
  name: 'BasicConditions',
  data () {
    return {
    }
  },
  components: {
    CTitle,
    JInput,
    Upload
  },
  methods: {
    change (msg) {
      this.$router.push({name: 'BasicConditions'})
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.BasicConditions
  .wrapper
    background: #ffffff;
    box-shadow: 0px 1px  2px rgba(0,0,0,0.5);
    padding .15rem .1rem 0 .1rem
    &.top
      margin-top .1rem
    .title
      margin-bottom .02rem
      font-size: .14rem
    .formCell
      height .42rem
    .formCell, .form-Cell
      padding 0 .1rem
      align-items center
      .form-label
        font-size .16rem
        color: #fd4d4d;
      .J-input
        border: 1px solid #fd4d4d;
        border-radius: .06rem
        height .3rem
        width 1rem
        font-size .14rem
    .border-1px
      border-1px(#d3d3d3)
  .btn
    button
      width 1rem
      height .3rem
      border-radius .06rem
      margin-top: 15px;
      font-size .14rem
  .upload
    padding-top .22rem
    padding-bottom .12rem
    font-size .14rem
</style>
