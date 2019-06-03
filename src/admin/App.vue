<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    getChildList () {
      let menu = {}
      const router = this.$router.options.routes
      router.forEach(item => {
        if (item.children) {
          if (!menu[item.path]) {
            menu[item.path] = []
          }
          menu[item.path] = item.children
        }
      })
      this.$store.commit('getMenu', menu)
    }
  },
  created () {
    this.getChildList()
  }
}
</script>

<style lang="stylus" scoped>
#app
  height: 100%
  .header
    background rgba(51,51,51,0.9)
    box-shadow: 0px 0.5px #b2b2b2
    height .43rem
    color white
    width 100%
    font-size .17rem
    line-height .43rem
    box-sizing border-box
    padding-left .2rem
</style>
