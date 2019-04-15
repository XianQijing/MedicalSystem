<template>
  <div class="YearSetting">
    <p class="blue" @click="show = true">{{title}}</p>
    <CTitle>国家级课题</CTitle>
    <Collaspe name="国家级课题">
      <div class="wrapper">
        <div class="formCell border-1px">
          <p class="form-label">计划名称:</p>
          <p class="form-msg"></p>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">申报得分:</p>
          <p class="form-msg"></p>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">项目得分:</p>
          <p class="form-msg"></p>
        </div>
        <div class="formCell">
          <p class="form-label">奖励费/分:</p>
          <p class="form-msg"></p>
        </div>
      </div>
    </Collaspe>
    <CTitle>省部级课题</CTitle>
    <Collaspe name="计划名称占位">
      <div class="wrapper">
        <div class="formCell border-1px">
          <p class="form-label">计划名称:</p>
          <p class="form-msg"></p>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">申报得分:</p>
          <p class="form-msg"></p>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">项目得分:</p>
          <p class="form-msg"></p>
        </div>
        <div class="formCell">
          <p class="form-label">奖励费/分:</p>
          <p class="form-msg"></p>
        </div>
      </div>
    </Collaspe>
    <CTitle>市局级课题</CTitle>
    <Collaspe name="计划名称占位">
      <div class="wrapper">
        <div class="formCell border-1px">
          <p class="form-label">计划名称:</p>
          <p class="form-msg"></p>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">申报得分:</p>
          <p class="form-msg"></p>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">项目得分:</p>
          <p class="form-msg"></p>
        </div>
        <div class="formCell">
          <p class="form-label">奖励费/分:</p>
          <p class="form-msg"></p>
        </div>
      </div>
    </Collaspe>
    <CTitle>大学级课题</CTitle>
    <Collaspe name="计划名称占位">
      <div class="wrapper">
        <div class="formCell border-1px">
          <p class="form-label">计划名称:</p>
          <p class="form-msg"></p>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">申报得分:</p>
          <p class="form-msg"></p>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">项目得分:</p>
          <p class="form-msg"></p>
        </div>
        <div class="formCell">
          <p class="form-label">奖励费/分:</p>
          <p class="form-msg"></p>
        </div>
      </div>
    </Collaspe>
    <CTitle>单位级课题</CTitle>
    <Collaspe name="计划名称占位">
      <div class="wrapper">
        <div class="formCell border-1px">
          <p class="form-label">计划名称:</p>
          <p class="form-msg"></p>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">申报得分:</p>
          <p class="form-msg"></p>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">项目得分:</p>
          <p class="form-msg"></p>
        </div>
        <div class="formCell">
          <p class="form-label">奖励费/分:</p>
          <p class="form-msg"></p>
        </div>
      </div>
    </Collaspe>
    <Collaspe name="计划名称占位">
      <div class="wrapper">
        <div class="formCell border-1px">
          <p class="form-label">计划名称:</p>
          <p class="form-msg"></p>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">申报得分:</p>
          <p class="form-msg"></p>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">项目得分:</p>
          <p class="form-msg"></p>
        </div>
        <div class="formCell">
          <p class="form-label">奖励费/分:</p>
          <p class="form-msg"></p>
        </div>
      </div>
    </Collaspe>
    <Collaspe name="计划名称占位">
      <div class="wrapper">
        <div class="formCell border-1px">
          <p class="form-label">计划名称:</p>
          <p class="form-msg"></p>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">申报得分:</p>
          <p class="form-msg"></p>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">项目得分:</p>
          <p class="form-msg"></p>
        </div>
        <div class="formCell">
          <p class="form-label">奖励费/分:</p>
          <p class="form-msg"></p>
        </div>
      </div>
    </Collaspe>
    <Popup position="bottom" v-model="show">
      <van-picker
        :item-height=30
        :columns="columns"
        show-toolbar
        @cancel="show = false"
        @confirm="onConfirm"
      />
    </Popup>
  </div>
</template>

<script>
import Collaspe from '@/components/collaspe/collaspe'
import Popup from '@/components/popup/popup2'
export default {
  name: 'YearSetting',
  data () {
    return {
      show: false,
      title: '科研课题',
      columns: ['科研课题', '学科建设', '人才培养', '科研奖励']
    }
  },
  components: {
    Collaspe,
    Popup
  },
  methods: {
    onConfirm (value) {
      this.title = value
      this.show = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.YearSetting
  .comTitle
    margin 0
  .blue
    text-align center
    line-height .17rem
    font-size .13rem
    color: #2873ff;
    margin-top 10px
  .wrapper
    background white
    border-radius .1rem
    padding 0 10px
    box-shadow: 0px 1px  2px rgba(0,0,0,0.5);
    .formCell
      height .33rem
      align-items center
      font-size .14rem
  .border-1px
    border-1px(#d3d3d3)
</style>
