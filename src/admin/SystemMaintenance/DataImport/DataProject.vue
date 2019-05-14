<template>
  <div class="DataProject">
    <CTitle>用户信息</CTitle>
    <div class="white">
      <p>导出匹配信息表</p>
      <div class="main">
        <div class="item" v-for="item in list" :key="item">
          <p v-html="item">{{item}}</p>
        </div>
      </div>
    </div>
    <div class="formCell">
      <span>数据导入标准模版</span>
      <span class="blue">预览</span>
    </div>
    <div class="formCell">
      <span>导入数据</span>
      <span class="blue">导入</span>
    </div>
    <div class="formCell">
      <span>导入数据</span>
      <span class="blue" @click="jump">查看</span>
    </div>
    <div class="desc">
      <h2>说明：</h2>
      <ol>
        <li>1.用户ID、申报计划ID、研究类型ID、其他学科ID、相关学科ID请按照匹配信息表中的id填入。</li>
        <li>2.项目类别(1:科研课题、2.学科建设、3.人才培养、4科研奖励)填入对应的数字。 </li>
        <li>3.添加项目计划时流程请选择直接评审。</li>
        <li>4.计划ID获取（请先到相应的模块项目设置中添加项目计划-》计划发布-》导出相应的计划编码表）。</li>
        <li>5.表中的数据不要留空，按照格式填写</li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DataProject',
  data () {
    return {
      list: ['用户编码表', '科室编码表', '研究类型<br/>编码表', '学科计划<br/>编码表', '人才计划<br/>编码表', '课题计划<br/>编码表', '奖励计划<br/>编码表']
    }
  },
  methods: {
    jump () {
      this.$router.push({name: 'WatchData'})
    }
  }
}
</script>

<style lang="stylus" scoped>
.DataProject
  margin 0 .06rem
  .white, .formCell
    background white
    padding .1rem .07rem
    margin-bottom .02rem
  .white
    p
      font-size .14rem
    .main
      margin 0 .1rem
      display flex
      flex-wrap wrap
      justify-content space-between
      .item
        box-shadow:0px .01rem .02rem rgba(0,0,0,0.5);
        border-radius:.06rem;
        vertical-align top
        height .58rem
        display flex
        justify-content center
        align-items center
        width calc(100%/3 - .2rem/3)
        margin-top .1rem
        text-align center
        font-size .14rem
        color #2873FF
        line-height .18rem
  .formCell
    span
      font-size .14rem
      &.blue
        color #2873FF
  .desc
    color #999999
    font-size .12rem
    margin .1rem
    line-height .16rem
</style>
