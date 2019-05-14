// 社会任职
<template>
  <div class="sociology">
    <tabs v-model="clickTab">
      <tab title="学术任职登记" name="0">
        <academic-post/>
      </tab>
      <tab title="任职状态登记" name="1">
        <StateOfService/>
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
import AcademicPost from './components/academicPost'
import StateOfService from './components/stateOfService'
export default {
  name: 'Sociology',
  data () {
    return {
      clickTab: ''
    }
  },
  components: {
    Tab,
    Tabs,
    AcademicPost,
    StateOfService
  }
}
</script>

<style lang="stylus" scoped>
.sociology >>> .tab-pane
  width 48.5%
.sociology
  padding-top 10px
  margin 0 6px
</style>
