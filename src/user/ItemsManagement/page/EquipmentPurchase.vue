// 仪器设备
<template>
  <div class="EquipmentPurchase">
    <tabs v-model="clickTab">
      <tab title="事项申请" name="0">
        <EquipmentApplication/>
      </tab>
      <tab title="状态查询及打印" name="1">
        <EquipmentStatues/>
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
import EquipmentApplication from '../components/EquipmentApplication'
import EquipmentStatues from '../components/EquipmentStatues'
export default {
  name: 'EquipmentPurchase',
  data () {
    return {
      clickTab: 0
    }
  },
  components: {
    Tab,
    Tabs,
    EquipmentApplication,
    EquipmentStatues
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.EquipmentPurchase >>> .tabs
  .tab-pane
    width 49%
    // font-size 12px
.EquipmentPurchase
  margin 0 6px
  padding 20px 0 10px 0
</style>
