<template>
  <div class="layout">
    <div class="menu" v-show="show"></div>
    <div class="sideBar" v-show="show">
        <router-link :to="{name: item.name}" v-for="(item, index) in $store.state.Layout.sideBar" :key="index" tag="span">{{item.meta.title}}</router-link>
    </div>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  data () {
    return {
    }
  },
  mounted () {
    this.$store.commit('thisMenu', `/${this.$route.path.split('/')[1]}`)
  },
  computed: {
    show () {
      if (this.$route.meta.hideInMenu) {
        return false
      } else if (this.$store.state.Layout.sideBar.length < 2) {
        return false
      } else {
        return true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../common/style/mixin.styl'
.sideBar
  font-size .14rem
  overflow scroll
  // width 100%
  height .44rem
  overflow-y: hidden;
  overflow-x: auto;
  white-space: nowrap;
  line-height .44rem
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  position fixed
  left 0
  background: #EFEFF4;
  top 0
  right 0
  z-index 3
  span
    margin 0 .1rem
  .router-link-exact-active
    color $blue
.menu
  height .44rem
  width 100%
// .layout
//   height 100%
</style>
