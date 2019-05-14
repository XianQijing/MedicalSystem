<template>
  <div class="ProjectApproval">
    <CTitle :screen="true" :textList="textList">课题列表</CTitle>
    <!--  -->
    <card
      v-for="(item, index) in $store.state.messageList"
      :key="index"
      >
      <p class="no border-1pxLeft">NO：{{item.name}}</p>
      <span class="black">负责人－所属科室</span>
      <p class="black border-1pxTop">项目名称</p>
      <span>项目计划</span>
      <div style="text-align:center">
        <JButton type="primary" round @click="jump">审批</JButton>
      </div>
    </card>
  </div>
</template>

<script>
export default {
  name: 'ProjectApproval1',
  data () {
    return {
      textList: ['时间范围']
    }
  },
  methods: {
    jump () {
      this.$router.push({name: 'DeclareDetail', query: {msg: '审核'}})
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/style/mixin.styl'
.ProjectApproval
  margin 0 6px
</style>
