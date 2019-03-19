<template>
  <div class="editPersonalMessage">
    <c-title>基本信息</c-title>
    <div class="form">
      <div class="formCell">
        <p class="form-label">登录账号：</p>
        <j-input placeholder="ABC1234"></j-input>
      </div>
      <div class="formCell">
        <p class="form-label">真实姓名：</p>
        <j-input></j-input>
      </div>
      <div class="formCell" @click="close('sex')">
        <p class="form-label">性别：</p>
        <j-input type="select" v-model="sex"></j-input>
      </div>
      <div class="formCell" @click="close('time')">
        <p class="form-label">出生年月：</p>
        <j-input v-model="age" type="select"></j-input>
      </div>
      <div class="formCell">
        <p class="form-label">单位名称：</p>
        <j-input></j-input>
      </div>
      <div class="formCell">
        <p class="form-label">民族：</p>
        <j-input></j-input>
      </div>
      <div class="formCell">
        <p class="form-label">单位电话：</p>
        <j-input></j-input>
      </div>
      <div class="formCell">
        <p class="form-label">单位邮编：</p>
        <j-input></j-input>
      </div>
      <div class="formCell">
        <p class="form-label">所属科室：</p>
        <j-input></j-input>
      </div>
      <div class="formCell">
        <p class="form-label">学历：</p>
        <j-input></j-input>
      </div>
      <div class="formCell" @click="close('major')">
        <p class="form-label">专业：</p>
        <j-input type="select" v-model="major"></j-input>
      </div>
    </div>
    <div class="btn">
      <button>展开更多</button>
    </div>
    <c-title>密码修改</c-title>
    <div class="form last">
      <div class="formCell">
        <p class="form-label">登录账号：</p>
        <j-input></j-input>
      </div>
      <div class="formCell">
        <p class="form-label">新密码：</p>
        <j-input v-model="newPassword"></j-input>
      </div>
      <div class="formCell">
        <p class="form-label">确认密码：</p>
        <span class="warning" v-show="warning">密码不一致</span>
        <j-input v-model="confirmPassword"></j-input>
      </div>
    </div>

    <popup :toShow="towCell" position="bottom" @close="close">
      <div class="pop-btn">
        <button @click="close">取消</button>
        <button @click="onConfirm(open)">完成</button>
      </div>
      <div class="pop-title" v-show="open === 'major'">
        <span>二级学科</span>
        <span>三级学科</span>
      </div>
      <van-picker
        v-show="open === 'major'"
        :columns="columns"
        ref="major"
        :item-height=30
        @change="onChange" />

      <van-datetime-picker
        type="date"
        ref="Time"
        v-show="open === 'time'"
        :item-height=30
        :show-toolbar="false"
        :min-date="minDate"
        :max-date="maxDate"
        @change="getAge"
      />

      <van-picker :item-height=30 ref="Sex" :columns="sexList" v-show="open === 'sex'" @change="selectSex" />
    </popup>

    <div class="button-cell">
      <button class="reset" @click="$router.go(-1)">取消</button>
      <button class="complete">保存</button>
    </div>
  </div>
</template>

<script>
import CTitle from '@/components/title/title'
import JInput from '@/components/input/j-input'
import Popup from '@/components/popup/popup'
import GetAge from '@/common/js/getAge'

const citys = {
  '浙江': ['杭州', '宁波', '温州', '嘉兴', '湖州'],
  '福建': ['福州', '厦门', '莆田', '三明', '泉州']
}

export default {
  name: 'EditPersonalMessage',
  data () {
    return {
      newPassword: '',
      confirmPassword: '',
      major: '',
      age: '',
      sex: '',
      maxDate: new Date(),
      minDate: new Date(1941, 0, 1), // 时间选择器，最小时间
      towCell: false, // 学科选择
      open: 'time',
      columns: [
        {
          values: Object.keys(citys),
          className: 'column1'
        },
        {
          values: citys['浙江'],
          className: 'column2',
          defaultIndex: 2
        }
      ],
      sexList: ['男', '女']
    }
  },
  components: {
    CTitle,
    JInput,
    Popup
  },
  computed: {
    warning () {
      if (this.newPassword !== this.confirmPassword) {
        return true
      }
    }
  },
  methods: {
    // 专业选择器，二级联动
    onChange (picker, values) {
      picker.setColumnValues(1, citys[values[0]])
      this.major = values.join('、')
    },
    // 时间选择器
    getAge (picker, value) {
      let year = picker.getValues()[0]
      let month = picker.getValues()[1]
      let date = picker.getValues()[2]
      let age = GetAge(year, month, date)
      this.age = `${year}.${month}.${date} ${age}岁`
    },
    // 性别选择
    selectSex (picker, value) {
      this.sex = value
    },
    close (type) {
      this.towCell = !this.towCell
      this.open = type
    },
    onConfirm (open) {
      if (open === 'sex') {
        this.sex = this.$refs.Sex.getValues(1)
      } else if (open === 'time') {
        let time = this.$refs.Time.$refs.picker.getValues()
        let year = time[0]
        let month = time[1]
        let date = time[2]
        let age = GetAge(year, month, date)
        this.age = `${year}.${month}.${date} ${age}岁`
      } else if (open === 'major') {
        let major = this.$refs.major.getValues()
        this.major = major.join('、')
      }
      this.towCell = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.editPersonalMessage >>> .van-picker-column
  font-size: 16px
.editPersonalMessage >>> .J-input
  padding 0
  text-align right
  .aSelect
    background none
    padding 0
  input
    text-align right
    width 100%
    padding 0
.editPersonalMessage
  // height 100vh
  .form
    margin 0 6px
    .formCell
      background white
      height 30px
      display flex
      align-items center
      justify-content space-between
      padding 0 10px
      margin-bottom 2px
      font-size: 14px;
      color: #333333;
      box-sizing border-box
      .J-input
        width 50%
        padding 0
        max-width 181px
        font-size: 14px;
        color: #333333;
        font-weight 700
      .warning
        color red
        position absolute
        left 96px
  .btn
    text-align center
    padding-top 18px
    button
      background: #2873FF;
      border-radius: 6px;
      font-size: 14px;
      color: #FFFFFF;
      width 100px
      height 30px
  .button-cell
    position fixed
    bottom 0
    left 0
  .last
    padding-bottom 40px
  .pop-btn
    display flex
    justify-content space-between
    padding 15px 10px
    font-size: 13px;
    color: #2873FF;
    button
      background none
  .pop-title
    display flex
    justify-content space-around
    padding-bottom 15px
</style>
