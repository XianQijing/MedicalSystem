<template>
  <div class="CompletionUnit">
    <CTitle>完成单位
      <span slot="float">添加</span>
    </CTitle>
    <div class="green" v-for="(item, index) in test" :key="index">
      <div class="header">
        <span>NO: {{index}}</span>
        <span>删除</span>
      </div>
      <div class="content">
        <div class="left">
          <p class="border-1px">{{item.name}}</p>
          <p class="bigger">{{item.address}}</p>
          <p>{{item.status}}</p>
        </div>
        <div class="right">
          <iconSvg iconClass="icon-right"/>
        </div>
      </div>

      <Popup v-model="show" position="center" title="添加单位">
        <Form fixed>
          <form-item :height="0.3" bottom color="red" label="单位名称">
            <JInput/>
          </form-item>
          <form-item :height="0.3" bottom color="red" label="单位类型">
            <JInput/>
          </form-item>
          <form-item :height="0.3" bottom color="red" label="单位地址">
            <JInput/>
          </form-item>
          <form-item :height="0.3" bottom color="red" label="邮政编码">
            <JInput/>
          </form-item>
          <form-item :height="0.3" bottom color="red" label="机构代码">
            <JInput/>
          </form-item>
          <form-item :height="0.3" bottom color="red" label="联系人">
            <JInput/>
          </form-item>
          <form-item :height="0.3" bottom color="red" label="联系电话">
            <JInput/>
          </form-item>
          <form-item :height="0.3" bottom color="red" label="电子邮箱">
            <JInput/>
          </form-item>
          <form-item :height="0.3" bottom color="red" label="排列次序">
            <JInput/>
          </form-item>
          <JButton type="primary" plain>重置</JButton>
          <JButton type="primary">确认提交</JButton>
        </Form>
      </Popup>
    </div>
  </div>
</template>

<script>
import Popup from '@/components/popup/popup2'
import Form from '@/components/form/Form'
import FormItem from '@/components/form/FormItem'
export default {
  name: 'CompletionUnit',
  data () {
    return {
      show: true,
      test: [
        {
          name: '联系人-联系电话',
          address: '单位名称-单位类型',
          status: '单位地址'
        },
        {
          name: '联系人-联系电话',
          address: '单位名称-单位类型',
          status: '单位地址'
        }
      ]
    }
  },
  components: {
    Popup,
    Form,
    FormItem
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../../common/style/mixin.styl'
.green
  background $green
  color white
  box-shadow:0px 1px 2px rgba(0,0,0,0.5);
  box-sizing border-box
  padding .1rem
  font-size .14rem
  line-height .18rem
  margin-bottom .1rem
  &:last-child
    margin-bottom 0
  .header
    display flex
    justify-content space-between
  .content
    display flex
    .left
      flex 10
      .border-1px
        border-1px(#d3d3d3)
        padding-bottom .12rem
        font-size .16rem
        line-height .2rem
      p
        padding-top .14rem
        padding-left .1rem
      .bigger
        font-size .16rem
        line-height .2rem
    .right
      flex 1
      position relative
      text-align center
      .svg-icon
        font-size .21rem
        vertical-align middle
        position absolute
        top 50%
        left 50%
        margin-top -.23rem
        margin-left -.05rem
</style>
