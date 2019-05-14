<template>
  <div class="UserMsg">
    <CTitle>用户信息</CTitle>
    <div class="white">
      <p>导出匹配信息表</p>
      <div class="main">
        <div class="item" v-for="item in list" :key="item">
          {{item}}
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
        <li>1.用户昵称、手机号码、邮箱字段请保持唯一性，不可重复。</li>
        <li>2.学历、学位、学科、职称请按照匹配信息表中的id填入。</li>
        <li>3.表中的数据不要留空，按照格式填写。</li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserMsg',
  data () {
    return {
      list: ['学历编码表', '学位编码表', '学科编码表', '职称编码表', '职称级别编码表']
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
.UserMsg
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
      .item
        box-shadow:0px .01rem .02rem rgba(0,0,0,0.5);
        border-radius:.06rem;
        height .58rem
        display inline-block
        width calc(100%/3 - .2rem/3)
        margin-right .1rem
        margin-top .1rem
        line-height .58rem
        text-align center
        font-size .14rem
        color #2873FF
        &:nth-of-type(3)
          margin-right 0
        &:last-child
          margin-right 0
          width calc(100%/3*2 - .1rem/3)
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
