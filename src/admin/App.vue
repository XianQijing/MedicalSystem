<template>
  <div id="app">
    <div class="header">
      {{$store.state.app.title}}
    </div>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus" scoped>
#app, body
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
  .content
    height calc(100vh - .43rem)
    overflow auto
</style>
