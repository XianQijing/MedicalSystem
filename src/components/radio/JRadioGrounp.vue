<template>
  <div class="JRadioGrounp">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'JRadioGrounp',
  props: {
    value: {
      type: [Number, String]
    }
  },
  methods: {
    getRadio () {
      return this.$children.filter(item => {
        return item.$options.name === 'JRadio'
      })
    },
    getRadioVal (val) {
      this.getRadio().forEach(item => {
        item.value = val
      })
    },
    grounp (val) {
      this.$emit('input', val)
    }
  },
  mounted () {
    this.getRadioVal(this.value)
  }
}
</script>

<style lang="stylus" scoped>
.JRadioGrounp
  .JRadio
    margin-left 10px
</style>
