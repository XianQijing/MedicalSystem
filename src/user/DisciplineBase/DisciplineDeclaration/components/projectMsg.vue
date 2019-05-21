<template>
  <div class="ProjectMsg">
    <Form fixed>
      <template slot='header-left'>
        项目类别
      </template>
      <template slot='header-right'>
        项目所在科室
      </template>
      <form-item :height="0.3" bottom color="red" label="项目名称">
        <JInput/>
      </form-item>
      <form-item :height="0.3" bottom color="red" label="关键词">
        <JInput/>
      </form-item>
      <form-item :height="0.3" bottom color="red" label="研究类型">
        <JInput/>
      </form-item>
      <form-item :height="0.3" bottom color="red" label="其他相关学科">
        <JInput/>
      </form-item>
      <form-item :height="0.3" bottom color="red" label="项目所属学科">
        <JInput/>
      </form-item>
      <form-item :height="0.3" bottom color="red" label="项目时间范围">
        <JInput/>
      </form-item>
      <form-item type="textarea" :height="1.15" color="red" label="项目内容摘要">
        <textarea/>
      </form-item>
      <JButton type="primary" plain>重置</JButton>
      <JButton type="primary">确认提交</JButton>
    </Form>
  </div>
</template>

<script>
import Form from '@/components/form/Form'
import FormItem from '@/components/form/FormItem'
export default {
  name: 'ProjectMsg',
  components: {
    Form,
    FormItem
  }
}
</script>

<style lang="stylus" scoped>
.Form
  background white
  margin-top .1rem
  box-shadow:0px 1px 2px rgba(0,0,0,0.5)
</style>
