<template>
  <div class="tab" v-if="show === name">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'tab',
  props: {
    title: {
      type: String
    },
    name: {
      type: [Number, String]
    }
  },
  methods: {
    updateNav () {
      this.$parent.updateNav()
    }
  },
  computed: {
    show () {
      return this.$parent.currentValue
    }
  },
  mounted () {
    this.updateNav()
  }
}
</script>
