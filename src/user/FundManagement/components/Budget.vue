// 项目预算
<template>
  <div class="Budget">
    <div v-show="printing">
      <CTitle :screen="true" :textList="textList">项目预算列表</CTitle>

      <card
        v-for="(item, index) in messageList"
        :key="index"
        :time="item.time"
        >
        <p class="no border-1pxLeft">NO：{{item.name}}</p>
        <span class="black">陈升息－眼科</span>
        <p class="black border-1pxTop">
          项目名称
        </p>
        <span>项目类别</span>
        <span>项目计划</span>
        <div style="text-align:center">
          <JButton type="primary" round @click="jump">查看</JButton>
        </div>
      </card>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Budget',
  data () {
    return {
      printing: true,
      textList: ['时间范围', '类别选择', '项目类别', '项目计划', '审核状态', '打印状态'],
      messageList: [
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '通过'
        },
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '通过'
        }
      ]
    }
  },
  methods: {
    jump () {
      this.$router.push({name: 'BudegetStatues'})
    }
  }
}
</script>
