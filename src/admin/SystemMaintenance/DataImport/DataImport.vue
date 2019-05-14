<template>
  <div class="DataImport">
    <CTitle>数据类型</CTitle>
    <div class="icon">
      <div class="wrapper" @click="jump(item.path)" v-for="item in $store.state.SystemMaintenanceDataImport" :key="item.icon">
        <IconSvg :iconClass="item.icon" :weight="item.weight" border="#2873FF"/>
        <p>{{item.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DataImport',
  methods: {
    jump (msg) {
      this.$router.push({name: msg})
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl';
.DataImport
  margin 0 .06rem
  .icon
    margin 0 .18rem
    .wrapper
      display inline-block
      width calc(100%/3 - .2rem/3)
      margin-right .1rem
      height 1.04rem
      background white
      margin-top .1rem
      box-shadow:0px 0.01rem 0.02rem rgba(0,0,0,0.5);
      border-radius .06rem;
      text-align center
      &:nth-of-type(3n)
        margin-right 0
      .svg-icon
        font-size .37rem
        color $blue
        margin-top .18rem
        margin-bottom .16rem
      p
        font-size .14rem
</style>
