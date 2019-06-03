// 经费申请审核
<template>
  <div class="Apply">
    <CTitle keyName="name" :screen="true" :textList="textList">经费使用审核</CTitle>

    <card
      v-for="(item, index) in messageList"
      :key="index"
      :status="item.type"
      :time="item.time"
      >
      <p class="no border-1pxLeft">NO：{{item.name}}</p>
      <span class="black">陈升息－眼科</span>
      <p class="black border-1pxTop">
        项目名称
      </p>
      <span>项目类别</span>
      <span>项目计划</span>
      <span class="resTime">项目到款总额：0.00</span>
      <div style="text-align:center">
        <JButton type="primary" round @click="jump">审核</JButton>
      </div>
    </card>

  </div>
</template>

<script>
export default {
  name: 'Apply',
  data () {
    return {
      textList: [
        {
          name: '申报类别',
          columns: []
        },
        {
          name: '项目类别',
          columns: []
        },
        {
          name: '项目计划',
          columns: []
        },
        {
          name: '审核状态',
          columns: []
        },
        {
          name: '所属科室',
          columns: ['儿科', '眼科', '肝胆外科', '心脏内科']
        }
      ],
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
      ]
    }
  },
  methods: {
    jump () {
      this.$router.push({name: 'ReimbursementAuditDetail'})
    }
  }
}
</script>
