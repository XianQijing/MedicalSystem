<template>
  <div class="AProjectMessageDetail">
    <CTitle>{{msg}}</CTitle>
    <div class="content">
      <span>NO：01</span>
      <div class="formCell">
        <p>场地租金</p>
        <p>300.00元/天</p>
      </div>
      <p class="border-1px">备注占位备注占位</p>
      <div class="formCell black">
        <p>数量：3</p>
        <p>总价：900.00</p>
      </div>
    </div>
  </div>
</template>

<script>
import CTitle from '@/components/title/title'
export default {
  name: 'AProjectMessageDetail',
  data () {
    return {
      msg: ''
    }
  },
  components: {
    CTitle
  },
  created () {
    this.msg = this.$route.query.msg
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.AProjectMessageDetail
  .content
    margin 0 6px 10px 6px
    padding 10px
    background white
    span
      color: #555555;
      font-size: 12px;
    p
      padding-top 15px
      font-size 14px
    .formCell
      p
        font-size 16px
    .border-1px
      border-1px(#D3D3D3)
      padding-bottom 15px
</style>
