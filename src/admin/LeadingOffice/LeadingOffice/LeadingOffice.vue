<template>
  <div class="LeadingOffice">
    <CTitle>院长办公</CTitle>
    <div class="icon-wrapper">
      <div @click="jump(item.path)" class="icon" v-for="item in $store.state.LeadingOffice" :key="item.name">
        <IconSvg :iconClass="item.icon"></IconSvg>
        <p>{{item.name}}</p>
        <span>新增：0</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeadingOffice',
  methods: {
    jump (path) {
      this.$router.push({name: path})
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.LeadingOffice
  .icon-wrapper
    margin 0 .28rem
    .icon
      width calc(100% / 3 - 7px)
      display inline-block
      background white
      height: 1.20rem;
      background: #ffffff;
      border-radius: .06rem;
      margin-right 10px
      box-shadow: 0px 1px  2px rgba(0,0,0,0.5);
      text-align center
      margin-bottom .1rem
      &:nth-of-type(3n)
        margin-right 0
      .svg-icon
        height .4rem
        font-size .4rem
        color $blue
        margin .16rem 0 .1rem 0
      p
        font-size .14rem
        margin-bottom .12rem
        color $blue
      span
        font-size .12rem
</style>
