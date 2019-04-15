<template>
  <div class="ChineseSeriesPeriodicals">
    <CTitle>类别列表</CTitle>
    <SystemSelect :list="test" v-model="multiple">
      <div slot="button" class="button">
        <button class="edit" @click="addType('修改期刊')">修改</button>
        <button class="daoru">批量导入</button>
        <button class="shanchu">删除</button>
      </div>
    </SystemSelect>
    <div class="edit-button" @click="addType('新增期刊')"></div>
    <Popup v-model="add" position="center" :title="title">
      <div class="formCell">
        <p class="form-label">{{title}}</p>
        <JInput/>
      </div>
      <div class="formCell">
        <p class="form-label">影响因子</p>
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
  name: 'ChineseSeriesPeriodicals',
  data () {
    return {
      add: false,
      title: '新增期刊',
      multiple: [],
      test: [
        {
          name: '儿外科',
          children: [
            {
              name: '小儿普通外科'
            },
            {
              name: '小儿泌尿外科'
            },
            {
              name: '小儿心胸外科'
            },
            {
              name: '小儿神经外科'
            }
          ]
        },
        {
          name: '儿外科',
          children: [
            {
              name: '小儿普通外科'
            },
            {
              name: '小儿泌尿外科'
            },
            {
              name: '小儿心胸外科'
            },
            {
              name: '小儿神经外科'
            }
          ]
        },
        {
          name: '儿外科',
          children: [
            {
              name: '小儿普通外科'
            },
            {
              name: '小儿泌尿外科'
            },
            {
              name: '小儿心胸外科'
            },
            {
              name: '小儿神经外科'
            }
          ]
        },
        {
          name: '儿外科',
          children: [
            {
              name: '小儿普通外科'
            },
            {
              name: '小儿泌尿外科'
            },
            {
              name: '小儿心胸外科'
            },
            {
              name: '小儿神经外科'
            }
          ]
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
.ChineseSeriesPeriodicals
  .comTitle
    margin 0
  .button
    font-size 0
    .edit, .daoru, .shanchu
      height .3rem
      width .78rem
      font-size .14rem
      color white
    .edit
      background: #2873ff;
    .daoru
      background: #45c186
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
