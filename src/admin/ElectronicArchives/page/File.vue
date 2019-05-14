<template>
  <div class="File">
    <div class="list-wrapper border-1px" v-for="(item, index) in list" :key="index">
      <div class="border-1pxLeft" @click="linkTo(icon)" v-for="icon in item" :key="icon.name">
        <IconSvg border="#2873ff" :weight="icon.weight" :iconClass="icon.icon"/>
        <p>{{icon.name}}</p>
      </div>
    </div>

    <div class="link" v-if="now.colums">
      <div class="white" v-for="item in xunHuan" :key="item" @click="jump(item)">
        <span>{{item}}</span>
        <span class="iconfont">&#xe7eb;</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'File',
  data () {
    return {
      now: {
        name: '科研课题',
        path: 'FileScientificTopic',
        colums: 'base'
      }
    }
  },
  computed: {
    list () {
      const pages = []
      this.$store.state.ElectronicArchives.forEach((item, index) => {
        const page = Math.floor(index / 3)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    },
    xunHuan () {
      return this.$store.state.xunHuan[this.now.colums].map(item => {
        return `${item}${this.now.name}`
      })
    }
  },
  methods: {
    jump (msg) {
      this.$router.push({name: this.now.path, query: {msg: msg}})
    },
    linkTo (msg) {
      this.now = msg
      if (!msg.colums) {
        this.$router.push({name: msg.path})
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.File
  .list-wrapper
    border-1px(#d3d3d3)
    margin 0 6px
    &:nth-of-type(4)
      border-none()
    div
      // flex 1
      width calc(100%/3)
      display inline-block
      text-align center
      position relative
      &:after
        content ' '
        width 0
        height .49rem
        border-right 1px solid #d3d3d3
        position absolute
        top 50%
        right 0
        margin-top -.245rem
      &:last-child
        border-none()
      .svg-icon
        font-size .4rem
        margin-top .23rem
        color $blue
        margin-bottom 0.06rem
      p
        font-size .12rem
        margin-bottom .1rem
  .link
    margin 0 6px
    margin-top .21rem
    .white
      background white
      padding .1rem
      padding-right 0
      margin-bottom .04rem
      box-shadow: 0px 1px  2px rgba(0,0,0,0.5);
      span
        font-size .16rem
      .iconfont
        float right
        font-size .21rem
        font-weight 700
</style>
