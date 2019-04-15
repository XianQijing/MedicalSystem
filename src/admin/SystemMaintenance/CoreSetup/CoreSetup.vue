<template>
  <div class="CoreSetup">
    <CTitle>基本设置</CTitle>
    <Collaspe name="基本设置">
      <div class="formCell">
        <p class="form-label">系统关闭:</p>
        <JInput/>
      </div>
      <div class="formCell">
        <p class="form-label">关闭原因:</p>
        <JInput/>
      </div>
      <div class="formCell">
        <p class="form-label">文件上传大小:</p>
        <JInput/>
      </div>
      <div class="formCell">
        <p class="form-label">分页数量:</p>
        <JInput/>
      </div>
      <div class="formCell">
        <p class="form-label">注册时间开放:</p>
        <JInput/>
      </div>
    </Collaspe>
    <CTitle>业务流程设置</CTitle>
    <Collaspe name="业务流程设置">
      <div class="item">
        <div class="white" v-for="item in list" :key="item">
          {{item}}
        </div>
      </div>
    </Collaspe>
    <CTitle>单位设置</CTitle>
    <Collaspe name="单位设置">
      <div class="formCell">
        <p class="form-label">单位名称:</p>
        <JInput/>
      </div>
      <div class="formCell">
        <p class="form-label">首页logo:</p>
        <JInput/>
      </div>
      <div class="formCell">
        <p class="form-label">单位地址:</p>
        <JInput/>
      </div>
      <div class="formCell">
        <p class="form-label">单位详细地址:</p>
        <JInput/>
      </div>
      <div class="formCell">
        <p class="form-label">注册时间开放:</p>
        <JInput/>
      </div>
    </Collaspe>
    <div class="button-cell">
      <button class="reset">取消</button>
      <button class="complete">保存设置</button>
    </div>
  </div>
</template>

<script>
import Collaspe from '@/components/collaspe/collaspe'
export default {
  name: 'CoreSetup',
  data () {
    return {
      list: ['经费报销', '学术论文', '成果申报', '成果登记', '专利申请', '出版申请',
        '中期检查', '结题鉴定', '报销审核']
    }
  },
  components: {
    Collaspe
  }
}
</script>

<style lang="stylus" scoped>
.CoreSetup >>> .J-input
  padding 0
  input
    text-align right
.CoreSetup
  margin 0 6px
  padding-bottom 30px
  .comTitle
    margin 0
  .formCell
    background white
    height .3rem
    font-size .14rem
    margin-bottom 2px
    padding 0 10px
    align-items center
    &:last-child
      margin-bottom 0
  .item
    margin 0 22px
    .white
      width calc(100% / 3 - .2rem/3)
      margin-right .1rem
      margin-bottom .1rem
      display inline-block
      background white
      height .58rem
      border-radius .06rem
      box-shadow: 0px 1px  2px rgba(0,0,0,0.5);
      color #2873ff
      font-size .14rem
      line-height .58rem
      text-align center
      &:nth-of-type(3n)
        margin-right 0
  .button-cell
    position fixed
    bottom 0
    left 0
</style>
