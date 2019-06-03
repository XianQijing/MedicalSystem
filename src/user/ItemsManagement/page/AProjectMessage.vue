// 项目信息
<template>
  <div class="AProjectMessage">
    <div class="base-message">
      <div class="base-left">
        <p class="plane">项目名称</p>
        <p class="black">
          单位级课研究20170511
        </p>
        <p class="plane">理论收费总额</p>
        <p class="black">22340.00</p>

        <p class="plane">实际收费总额</p>
        <p class="black">
          22340.00
        </p>
      </div>

      <div class="base-right">
        <div class="form-cell">
          <p class="label">专家人数:</p>
          <p class="j-input">项目负责人</p>
        </div>
        <div class="form-cell">
          <p class="label">参加人数:</p>
          <p class="j-input">参加对象</p>
        </div>
        <div class="form-cell">
          <p class="label">外省人数:</p>
          <p class="j-input">项目级别</p>
        </div>
        <div class="form-cell">
          <p class="label">外院人数:</p>
          <p class="j-input">是否收费</p>
        </div>
        <div class="form-cell">
          <p class="label">专家名单:</p>
          <p class="j-input" style="color: #2873FF">预览</p>
        </div>
        <div class="form-cell">
          <p class="label">会议总结:</p>
          <p class="j-input" style="color: #2873FF">预览</p>
        </div>
        <div class="form-cell">
          <p class="label">状态1:</p>
          <p class="j-input">理论收费总额</p>
        </div>
        <div class="form-cell">
          <p class="label">活动签到:</p>
          <p class="j-input">实际收费总额</p>
        </div>
        <div class="form-cell">
          <p class="label">活动照片:</p>
          <p class="j-input">参加人数</p>
        </div>
      </div>
    </div>
    <CTitle>主办会议预算</CTitle>
    <div class="iconList">
      <div class="wrapper" v-for="(item, index) in list" :key="index">
        <div class="icon" @click="jump(icon.name)" v-for="icon in item" :key="icon.name">
          <img :src="icon.icon.normal" alt="">
          <p>{{icon.name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AProjectMessage',
  data () {
    return {
    }
  },
  computed: {
    list () {
      const pages = []
      this.$store.state.iconList.forEach((item, index) => {
        let page = Math.floor(index / 3)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  },
  methods: {
    jump (msg) {
      this.$router.push({name: 'AProjectMessageDetail', query: {msg: msg}})
      this.$store.commit('changeTitle', msg)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.AProjectMessage
  padding 10px 6px
  .comTitle
    margin 0
  .base-message
    width 100%
    display flex
    margin-bottom 2px
    div
      // height 166px
    .base-left
      background white
      padding 10px
      box-sizing border-box
      margin-right 2px
      flex 1 1 119px
      p
        margin-bottom 10px
        text-align center
      .plane
        font-size 12px
      .black
        font-weight 700
        font-size 16px
        line-height 20px
        margin-bottom 20px
    .base-right
      flex 2 1 240px
      .form-cell
        form-cell-left(12px)
        margin-bottom 2px
        &:last-child
          margin 0
        .j-input
          width 50%
          padding 0
          max-width 181px
          color: #999999;
          height 100%
          text-align right
          font-size 12px
          line-height 26px
.iconList
  background white
  box-shadow:0px 1px 2px rgba(0,0,0,0.5);
  padding 5px 0
  .wrapper
    display flex
    justify-content space-between
    .icon
      text-align center
      padding 15px 0
      flex 1
      img
        width .34rem
        margin-bottom 10px
      p
        font-size:14px;
        color #2873FF
</style>
