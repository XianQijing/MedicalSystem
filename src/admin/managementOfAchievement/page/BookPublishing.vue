// 著作出版
<template>
  <div class="BookPublishing">
    <tabs v-model="clickTab">
      <tab title="出版申请" name="0">
        <PublicationApplication/>
      </tab>
      <tab title="著作登记" name="1">
        <BookRegistration/>
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
import PublicationApplication from '../components/PublicationApplication'
import BookRegistration from '../components/BookRegistration'
export default {
  name: 'BookPublishing',
  data () {
    return {
      clickTab: 0
    }
  },
  components: {
    Tab,
    Tabs,
    PublicationApplication,
    BookRegistration
  }
}
</script>

<style lang="stylus" scoped>
.BookPublishing >>> .tabs
  .tab-pane
    width 1.77rem
.BookPublishing
  margin 0 6px
  padding 10px 0 10px 0
</style>
