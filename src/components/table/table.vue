<template>
  <div class="j-table">
    <table>
      <tr>
        <th v-for="s in prop" :key="s.prop">{{s.label}}</th>
      </tr>
      <tr v-for="(item, index) in data" :key="index">
        <td v-for="s in prop" :key="s.prop">{{item[s.prop]}}</td>
      </tr>
        <slot></slot>
    </table>
  </div>
</template>

<script>
export default {
  name: 'J-table',
  data () {
    return {
      prop: []
    }
  },
  props: {
    data: {
      type: Array
    }
  },
  methods: {
    getColums () {
      let colums = this.$children.filter(v => {
        return v.$options.name === 'Table-colums'
      })
      return colums
    },
    getProp () {
      let list = this.getColums().map(v => {
        return {label: v.label, prop: v.prop}
      })
      this.prop = list
    }
  },
  mounted () {
    this.getProp()
  }
}
</script>

<style lang="stylus" scoped>
.j-table
  width 100%
  border-collapse:collapse
  table
    width 100%
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.50);
    tr
      width 100%
      text-align center
      th
        color white
        font-weight 400
        background: #003BAA;
        height 40px
      td
        font-size: 14px;
        color: #999999;
        background: #FFFFFF;
        height 26px
</style>
