<template>
  <div class="LevelOne">
    <CTitle>类别列表</CTitle>
    <SystemSelect :list="test" v-model="multiple">
      <div slot="button" class="button">
        <button class="edit" @click="addType('修改类别')">修改</button>
        <button class="shanchu">删除</button>
      </div>
    </SystemSelect>
    <div class="edit-button" @click="addType('新增类别')"></div>
    <Popup v-model="add" position="center" :title="title">
      <div class="formCell">
        <p class="form-label">类别名称</p>
        <JInput/>
      </div>
      <div class="formCell">
        <p class="form-label">上限设置</p>
        <JInput/>
      </div>
      <div class="formCell">
        <p class="form-label">选择排序</p>
        <JInput/>
      </div>
      <div class="formCell">
        <p class="form-label">显示状态</p>
        <JInput type="select"/>
      </div>
      <div class="button-cell">
        <button class="reset">取消</button>
        <button class="complete">确认</button>
      </div>
    </Popup>
  </div>
</template>

<script>
import SystemSelect from '@/components/SystemSelect/SystemSelect'
import Popup from '@/components/popup/popup2'
export default {
  name: 'LevelOne',
  data () {
    return {
      add: false,
      title: '新增期刊',
      multiple: [],
      test: [
        {
          name: '直接经费'
        },
        {
          name: '间接经费'
        }
      ]
    }
  },
  components: {
    SystemSelect,
    Popup
  },
  methods: {
    addType (msg) {
      this.title = msg
      this.add = true
    }
  }
}
</script>

<style lang="stylus" scoped>
.LevelOne
  .comTitle
    margin 0
  .button
    font-size 0
    .edit, .shanchu
      height .3rem
      width .78rem
      font-size .14rem
      color white
    .edit
      background: #2873ff;
    .shanchu
      background: #fd4d4d;
  .edit-button
    width .4rem
    box-sizing border-box
    height .4rem
    background-image url('../../../common/image/newDetail.png')
    background-size .45rem
    background-position center
    border-radius 50%
    box-shadow: 0px 1px  3px rgba(51,51,51,0.5);
    position fixed
    right .3rem
    bottom .39rem
  .popup
    .button-cell
      margin-top 34px
  .formCell
    padding 0 15px
    // height 35px
    font-size:14px;
    align-items center
    margin-top 10px
    .J-input
      width 66.67%
      border:1px solid rgba(40,115,255,1);
      border-radius:4px;
      height 26px
</style>
