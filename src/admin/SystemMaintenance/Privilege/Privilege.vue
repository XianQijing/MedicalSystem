// 权限设置
<template>
  <div class="Privilege">
    <tabs v-model="clickTab">
      <tab title="管理员权限" name="0">
        <AdminRole/>
      </tab>
      <tab title="添加科研秘书" name="1">
        <AdminMessage/>
      </tab>
      <tab title="经费额度设置" name="2">
        <FundsSetting/>
      </tab>
      <tab title="科研秘书列表" name="3">
        <secretaryList/>
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
import AdminRole from './AdminRole'
import AdminMessage from './AdminMessage'
import FundsSetting from './FundsSetting'
import secretaryList from './secretaryList'
export default {
  name: 'Privilege',
  data () {
    return {
      clickTab: 0
    }
  },
  components: {
    Tab,
    Tabs,
    AdminRole,
    AdminMessage,
    FundsSetting,
    secretaryList
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.Privilege >>> .tabs
  .tab-pane
    width calc(100% / 4 - 3px)
    box-sizing: border-box
    margin-bottom 4px
    height .3rem
.Privilege
  margin 0 6px
  padding 10px 0 10px 0
.AdminMessage
  margin 0!important
</style>
