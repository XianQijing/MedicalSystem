<template>
  <div class="TeachingMaterial">
    <CTitle :screen="true" :textList="textList">申请列表</CTitle>
    <card
      v-for="(item, index) in messageList"
      :key="index"
      :time="item.time"
      >
      <p class="no border-1pxLeft">NO：{{item.name}}</p>
      <span class="black">申请人-所属单位</span>
      <span>著作权人-著作属性</span>
      <p class="black border-1pxTop">著作名称</p>
      <span>ISBN号、主要合作单位</span>
      <span>印数／字数／定价：34/34876/￥28.00</span>
      <span>出版年月／著作类型：2016.09/人民出版社</span>
      <span class="resTime">审核日期:</span>
      <div style="text-align:center">
        <JButton type="primary" round @click="jump">档案列表</JButton>
      </div>
    </card>
  </div>
</template>

<script>
export default {
  name: 'TeachingMaterial',
  data () {
    return {
      msg: '',
      textList: ['时间范围', '著作属性', '著作类型', '所属学科', '审核状态'],
      messageList: [
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '通过',
          dayin: '未打印'
        },
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '通过',
          dayin: '已打印'
        }
      ],
      multiple: []
    }
  },
  methods: {
    jump () {
      this.$router.push({name: 'FileList1'})
    }
  }
}
</script>

<style lang="stylus" scoped>
.TeachingMaterial
  margin 0 .06rem
</style>
