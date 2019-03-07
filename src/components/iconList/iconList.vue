<template>
  <div class="iconList">
    <div class="iconWrapper border-1px" v-for="item in icons" :key="item.title">
      <common-title>{{item.title}}</common-title>
      <div class="menu">
        <router-link tag="div" :to="icon.path" class="icon border-1pxLeft" v-for="(icon, index) in item.children" :key="index">
          <span class="spot">{{index}}</span>
          <div :class="icon.icon" class="iconName"></div>
          <p class="name">
            {{icon.name}}
          </p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import CommonTitle from '../title/title'
export default {
  name: 'iconList',
  props: {
    icons: {
      type: Array
    }
  },
  components: {
    CommonTitle
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/style/mixin.styl'
.iconList
  .iconWrapper
    border-1px(#D3D3D3)
    &:last-child
      border-none()
    .menu
      margin 0 6px
      display flex
      .icon
        flex 1
        position relative
        height 83px
        // background-position-y 10px
        &:after
          content ''
          height 49px
          font-size 49px
          position absolute
          width 0
          top 17px
          left 0
          border-left 1px solid rgba(211,211,211,1)
        &:first-child:after
          display none
        .name
          text-align center
          margin-top 12px
          font-family: PingFangSC-Regular
          font-size: 12px
          color: #333333
          letter-spacing: -0.07px
        .spot
          display inline-block
          width 20px
          position absolute
          right 7px
          height 12px
          background: #F9712C;
          border-radius: 6px;
          color white
          font-size: 8px;
          text-align: center;
          line-height 13px
        .iconName
          background-position bottom center
          height 45px
          width 100%
        .boss
          bg-image(boss)
          background-size: 35px
        .expert
          bg-image(expert)
          background-size: 35px
        .maintenance
          bg-image(maintenance)
          background-size: 35px
        .log
          bg-image(log)
          background-size: 35px
        .center
          bg-image(center)
          background-size: 35px
        .notic
          bg-image(notic)
          background-size: 35px
        .policy
          bg-image(policy)
          background-size: 35px
        .service
          bg-image(service)
          background-size: 35px
        .topic
          bg-image(topic)
          background-size: 35px
        .subject
          bg-image(subject)
          background-size: 35px
        .personnel
          bg-image(personnel)
          background-size: 35px
        .base
          bg-image(base)
          background-size: 35px
        .project
          bg-image(project)
          background-size: 35px
        .matter
          bg-image(matter)
          background-size: 35px
        .funds
          bg-image(funds)
          background-size: 35px
        .result
          bg-image(result)
          background-size: 35px
        .support
          bg-image(support)
          background-size: 35px
        .decisions
          bg-image(decisions)
          background-size: 35px
        .report
          bg-image(report)
          background-size: 35px
        .archives
          bg-image(archives)
          background-size: 35px
</style>
