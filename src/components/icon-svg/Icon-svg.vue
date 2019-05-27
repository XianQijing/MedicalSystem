<template>
  <svg class="svg-icon" @click="$emit('click')" aria-hidden="true">
    <use :xlink:href="iconName" :stroke-width="weight" :stroke="border"></use>
  </svg>
</template>

<script>
export default {
  name: 'icon-svg',
  props: {
    iconClass: {
      type: String,
      required: true
    },
    weight: {
      type: Number,
      default: 0
    },
    border: {
      type: String
    }
  },
  computed: {
    iconName () {
      return `#${this.iconClass}`
    }
  }
}
</script>

<style>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  font-weight: 400;
  stroke: black;
  stroke-width:2;
}
</style>
