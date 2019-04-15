<template>
  <div class="home">
    <div class="tabs">
      <button
        :class="{'active': item.name === active}"
        v-for="(item, index) in list"
        :key="index"
        @click="jump(item)"
      >
      {{item.name}}
      </button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'LeadingOffice',
  data () {
    return {
      list: [
        {
          name: '院长办公',
          path: 'LeadingOffice'
        },
        {
          name: '项目审批',
          path: 'ProjectApproval1'
        },
        {
          name: '事项审批',
          path: 'MattersApproval'
        },
        {
          name: '经费审批',
          path: 'FundingApproval1'
        }
      ]
    }
  },
  computed: {
    active () {
      return this.$store.state.LeadingOfficeActive
    }
  },
  methods: {
    jump (msg) {
      this.$store.commit('changeActive', msg.name)
      this.$router.push({name: msg.path})
    }
  }
}
</script>

<style lang="stylus" scoped>
.home
  padding-top 10px
  .tabs
    margin 0 6px 0 6px
    button
      width calc(100% / 4 - 3px)
      height .3rem
      border: 1px solid #2873ff
      margin-right 4px
      background none
      color #2873ff
      font-size .12rem
      &:last-child
        margin-right 0
    .active
      background #2873ff
      color white
</style>
