<template>
  <div class="tabs">
    <div class="tabs-bar">
      <div
        v-for="(item,index) in navList"
        :key="index"
        class="tab-pane"
        :class="{'active': item.name === currentValue}"
        @click="handleChange(index)">
        {{item.title}}
      </div>
    </div>
    <div class="tabs-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  data () {
    return {
      currentValue: '',
      navList: []
    }
  },
  props: {
    value: {
      type: [Number, String]
    }
  },
  methods: {
    handleChange (index) {
      let nav = this.navList[index]
      let name = nav.name
      this.currentValue = name
      this.$emit('input', name)
      this.$emit('click', name)
    },
    getTab () {
      let qq = this.$children.filter(item => {
        return item.$options.name === 'tab'
      })
      return qq
    },
    updateNav () {
      this.navList = []
      this.getTab().forEach((item, index) => {
        this.navList.push({title: item.title, name: item.name || index})
        if (!this.currentValue) {
          this.currentValue = item.name || index
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.tabs
  font-size 12px
  .tabs-bar
    width 100%
    display flex
    flex-wrap wrap
    justify-content space-between
    .tab-pane
      // width 31.5%
      height .3rem
      text-align center
      border: 1px solid #2873FF;
      color #2873FF
      line-height .3rem
      font-size .12rem
    .active
      background #2873FF
      color white
</style>
