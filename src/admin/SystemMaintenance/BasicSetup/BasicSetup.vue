// 基本设置
<template>
  <div class="BasicSetup">
    <tabs v-model="clickTab">
      <tab title="科室设置" name="0">
        <DepartmentSetup/>
      </tab>
      <tab title="专业设置" name="1">
        <ProfessionalSetup/>
      </tab>
      <tab title="职称设置" name="2">
        <DepartmentSetup/>
      </tab>
      <tab title="单位类型设置" name="3">
        <DepartmentSetup/>
      </tab>
      <tab title="合同类型设置" name="4">
        <DepartmentSetup/>
      </tab>
      <tab title="付款方式设置" name="5">
        <DepartmentSetup/>
      </tab>
      <tab title="研究类型设置" name="6">
        <DepartmentSetup/>
      </tab>
      <tab title="作者属性设置" name="7">
        <DepartmentSetup/>
      </tab>
      <tab title="完成人属性设置" name="8">
        <DepartmentSetup/>
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
import DepartmentSetup from './DepartmentSetup'
import ProfessionalSetup from './ProfessionalSetup'
export default {
  name: 'BasicSetup',
  data () {
    return {
      clickTab: 0
    }
  },
  components: {
    Tab,
    Tabs,
    DepartmentSetup,
    ProfessionalSetup
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.BasicSetup >>> .tabs
  .tab-pane
    width calc(100% / 3 - 8px/3)
    box-sizing: border-box
    margin-bottom 4px
    height .3rem
.BasicSetup
  margin 0 6px
  padding 10px 0 10px 0
</style>
