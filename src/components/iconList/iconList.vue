<template>
  <div class="iconList">
    <div class="iconWrapper border-1px" v-for="item in icons" :key="item.title">
      <CTitle>{{item.title}}</CTitle>
      <div class="menu">
        <router-link tag="div" :to="icon.path" class="icon border-1pxLeft" v-for="(icon, index) in item.children" :key="index">
          <span class="spot">{{index}}</span>
          <IconSvg :iconClass="icon.icon"></IconSvg>
          <p class="name">
            {{icon.name}}
          </p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// import CTitle from '../title/title'
export default {
  name: 'iconList',
  props: {
    icons: {
      type: Array
    }
  },
  components: {
    // CTitle
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/style/mixin.styl'
.iconList
  .comTitle
    padding-top 0
  .iconWrapper
    border-1px(#D3D3D3)
    margin-bottom .16rem
    &:last-child
      border-none()
    .menu
      margin 0 6px
      display flex
      .icon
        flex 1
        position relative
        height .7rem
        box-sizing border-box
        // background-position-y 10px
        &:after
          content ''
          height .49rem
          // font-size 49px
          position absolute
          width 0
          top .05rem
          left 0
          border-left 1px solid rgba(211,211,211,1)
        &:first-child:after
          display none
        .name
          text-align center
          margin-top .12rem
          font-family: PingFangSC-Regular
          font-size: .12rem
          color: #333333
          // letter-spacing: -0.07px
        .spot
          display inline-block
          top: -0.1rem;
          z-index 0
          width .22rem
          position absolute
          right .07rem
          height .22rem
          background: #e82121;
          border-radius: 50%;
          color white
          font-size: .1rem;
          text-align: center;
          line-height .22rem
        .svg-icon
          font-size .35rem
          color $blue
          width 100%
          text-align center
</style>
