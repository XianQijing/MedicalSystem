<template>
  <div>
    <tabs v-model="clickTab">
      <tab title="非差旅" name="0">
        <div class="wrapper">
          <p class="title">金额发票</p>
          <div class="item-wrapper border-1px">
            <p class="item-title">项目经费：</p>
            <JInput placeholder="填写金额"/>
          </div>
          <div class="item-wrapper border-1px">
            <p class="item-title">匹配经费：</p>
            <JInput placeholder="填写金额"/>
          </div>
          <div class="item-wrapper border-1px">
            <p class="item-title">其他经费：</p>
            <JInput placeholder="填写金额"/>
          </div>
          <div class="item-wrapper border-1px">
            <p class="item-title">报销总额：</p>
            <JInput placeholder="填写金额"/>
          </div>
          <div class="item-wrapper border-1px">
            <p class="item-title">支付方式</p>
            <JInput placeholder="下拉选择" type="select" @click="selected = true" v-model="fangshi"/>
          </div>
          <div class="item-wrapper border-1px">
            <p class="item-title a">上传发票：</p>
            <div class="fileList" v-for="(item, index) in notTavel.fapiaoList" :key="index">
              <iconSvg iconClass="icon-wenjianjiaicon"/>
              <div class="border-1pxLeft">
                <p class="file-name">文件名：{{item.name}}</p>
                <p class="file-path">文件类型：{{item.type}}</p>
              </div>
              <iconSvg @click="deleted(item)" class="border-1pxRight" iconClass="icon-delete"/>
            </div>
            <div class="upload" @click="openPopup('非差旅')">
              <!-- <input type="file" multiple class="tem" @change="openFile($event)"> -->
              <div class="text"><img src="../../../../common/image/upload.png" alt=""></div>
            </div>
          </div>
        </div>
      </tab>
      <tab title="国内差旅" name="1">
        <div class="wrapper">
          <p class="title">金额发票</p>
          <div class="item-wrapper border-1px">
            <p class="item-title">项目经费：</p>
            <JInput placeholder="填写金额"/>
          </div>
          <div class="item-wrapper border-1px">
            <p class="item-title">匹配经费：</p>
            <JInput placeholder="填写金额"/>
          </div>
          <div class="item-wrapper border-1px">
            <p class="item-title">其他经费：</p>
            <JInput placeholder="填写金额"/>
          </div>
          <div class="item-wrapper border-1px">
            <p class="item-title">报销总额：</p>
            <JInput placeholder="填写金额"/>
          </div>
          <div class="item-wrapper border-1px">
            <p class="item-title">支付方式</p>
            <JInput placeholder="下拉选择" type="select" @click="selected = true" v-model="fangshi"/>
          </div>
          <div class="item-wrapper border-1px">
            <p class="item-title a">上传发票：</p>
            <div class="fileList" v-for="(item, index) in notTavel.fapiaoList" :key="index">
              <iconSvg iconClass="icon-wenjianjiaicon"/>
              <div class="border-1pxLeft">
                <p class="file-name">文件名：{{item.name}}</p>
                <p class="file-path">文件类型：{{item.type}}</p>
              </div>
              <iconSvg @click="deleted(item)" class="border-1pxRight" iconClass="icon-delete"/>
            </div>
            <div class="upload" @click="openDomestic = true">
              <!-- <input type="file" multiple class="tem" @change="openFile($event)"> -->
              <div class="text"><img src="../../../../common/image/upload.png" alt=""></div>
            </div>
          </div>
        </div>
      </tab>
      <tab title="国外差旅" name="2">
        <div class="wrapper">
          <p class="title">金额发票</p>
          <div class="item-wrapper border-1px">
            <p class="item-title">项目经费：</p>
            <JInput placeholder="填写金额"/>
          </div>
          <div class="item-wrapper border-1px">
            <p class="item-title">匹配经费：</p>
            <JInput placeholder="填写金额"/>
          </div>
          <div class="item-wrapper border-1px">
            <p class="item-title">其他经费：</p>
            <JInput placeholder="填写金额"/>
          </div>
          <div class="item-wrapper border-1px">
            <p class="item-title">报销总额：</p>
            <JInput placeholder="填写金额"/>
          </div>
          <div class="item-wrapper border-1px">
            <p class="item-title">支付方式</p>
            <JInput placeholder="下拉选择" type="select" @click="selected = true" v-model="fangshi"/>
          </div>
          <div class="item-wrapper border-1px">
            <p class="item-title a">上传发票：</p>
            <div class="fileList" v-for="(item, index) in notTavel.fapiaoList" :key="index">
              <iconSvg iconClass="icon-wenjianjiaicon"/>
              <div class="border-1pxLeft">
                <p class="file-name">文件名：{{item.name}}</p>
                <p class="file-path">文件类型：{{item.type}}</p>
              </div>
              <iconSvg @click="deleted(item)" class="border-1pxRight" iconClass="icon-delete"/>
            </div>
            <div class="upload" @click="openAbroad = true">
              <!-- <input type="file" multiple class="tem" @change="openFile($event)"> -->
              <div class="text"><img src="../../../../common/image/upload.png" alt=""></div>
            </div>
          </div>
        </div>
      </tab>
    </tabs>

    <popup v-model="openPop" position="center" title="上传文件">
      <div class="content">
        <Form fixed>
          <FormItem color="blue" :height="0.26" :width="1.54" label="文件名称">
            <JInput placeholder="输入名称"/>
          </FormItem>
        </Form>
        <Upload :icon="false" label="选择文件"/>
      </div>
      <div class="button-cell">
        <button class="reset">取消</button>
        <button class="complete">上传</button>
      </div>
    </popup>

    <popup v-model="compute" position="center" :title="`${name}计算`">
      <div class="content">
        <Form fixed>
          <FormItem color="blue" :height="0.26" :width="1.54" label="离沪日期">
            <JInput type="select" placeholder="下拉选择"/>
          </FormItem>
          <FormItem color="blue" :height="0.26" :width="1.54" label="返沪日期">
            <JInput type="select" placeholder="下拉选择"/>
          </FormItem>
          <FormItem color="blue" :height="0.26" :width="1.54" label="前往国家" v-if="openAbroad === true">
            <JInput type="select" placeholder="下拉选择"/>
          </FormItem>
          <FormItem color="blue" :height="0.26" :width="1.54" label="标准">
            <JInput type="select" placeholder="下拉选择" v-model="rule" @click="biaozhun = true"/>
          </FormItem>
        </Form>
      </div>
      <div class="button-cell">
        <button class="reset">取消</button>
        <button class="complete">上传</button>
      </div>
    </popup>

    <popup v-model="openDomestic" position="center" title="国内差旅计算器">
      <div class="border-1px chailv">
        <p class="dom-header">项目名称：会议费（培训费）</p>
        <Form>
          <FormItem :weight="1" color="black" :height="0.3" label="报销金额">
            <JInput placeholder="填写金额"/>
          </FormItem>
          <div class="fileList" v-if="Domestic.test !== null">
            <File :name="Domestic.test.name" @deleted="deleted('Domestic', 'test')"/>
            <!-- <iconSvg iconClass="icon-wenjianjiaicon"/>
            <div class="border-1pxLeft">
              <p class="file-name">文件名：{{Domestic.test.name}}</p>
            </div>
            <iconSvg @click="deleted('Domestic', 'test')" class="border-1pxRight" iconClass="icon-delete"/> -->
          </div>
          <FormItem :width="2" color="black" label="上传附件">
            <upload label="" ref="Domestic.test" @change="openFile($event, 'Domestic', 'test')"/>
          </FormItem>
          <FormItem :width=".13" color="black" label="备注">
            <div class="canClick gray">无</div>
          </FormItem>
        </Form>
      </div>

      <div class="border-1px chailv">
        <p class="dom-header">项目名称：住宿费</p>
        <Form>
          <FormItem :weight="1" color="black" :height="0.3" label="报销金额">
            <JInput placeholder="填写金额"/>
          </FormItem>
          <div class="fileList" v-if="Domestic.test !== null">
            <File :name="Domestic.test.name" @deleted="deleted('Domestic', 'test')"/>
            <!-- <iconSvg iconClass="icon-wenjianjiaicon"/>
            <div class="border-1pxLeft">
              <p class="file-name">文件名：{{Domestic.test.name}}</p>
            </div>
            <iconSvg @click="deleted('Domestic', 'test')" class="border-1pxRight" iconClass="icon-delete"/> -->
          </div>
          <FormItem :width="2" color="black" label="上传附件">
            <upload label="" ref="Domestic.test" @change="openFile($event, 'Domestic', 'test')"/>
          </FormItem>
          <FormItem :width="1.12" color="black" label="备注">
            <div class="canClick">点击查看-查看限额</div>
          </FormItem>
        </Form>
      </div>

      <div class="border-1px chailv">
        <p class="dom-header">项目名称：城市交通费</p>
        <Form>
          <FormItem :weight="1" color="black" :height="0.3" label="报销金额">
            <JInput placeholder="填写金额"/>
          </FormItem>
          <div class="fileList" v-if="Domestic.test !== null">
            <File :name="Domestic.test.name" @deleted="deleted('Domestic', 'test')"/>
            <!-- <iconSvg iconClass="icon-wenjianjiaicon"/>
            <div class="border-1pxLeft">
              <p class="file-name">文件名：{{Domestic.test.name}}</p>
            </div>
            <iconSvg @click="deleted('Domestic', 'test')" class="border-1pxRight" iconClass="icon-delete"/> -->
          </div>
          <FormItem :width="2" color="black" label="上传附件">
            <upload label="" ref="Domestic.test" @change="openFile($event, 'Domestic', 'test')"/>
          </FormItem>
          <FormItem :width="1.12" color="black" label="备注">
            <div class="canClick">点击查看-查看限额</div>
          </FormItem>
        </Form>
      </div>

      <div class="border-1px chailv">
        <p class="dom-header">项目名称：伙食补贴费</p>
        <Form>
          <FormItem :weight="1" color="black" :height="0.3" label="报销金额">
            <JInput iconClass="icon-wenjianjiaicon" @clickIcon="compute = true, name='伙食补贴费'" placeholder="计算金额"/>
          </FormItem>
          <div class="fileList" v-if="Domestic.test !== null">
            <File :name="Domestic.test.name" @deleted="deleted('Domestic', 'test')"/>
            <!-- <iconSvg iconClass="icon-wenjianjiaicon"/>
            <div class="border-1pxLeft">
              <p class="file-name">文件名：{{Domestic.test.name}}</p>
            </div>
            <iconSvg @click="deleted('Domestic', 'test')" class="border-1pxRight" iconClass="icon-delete"/> -->
          </div>
          <FormItem :width="2" color="black" label="上传附件">
            <upload label="" ref="Domestic.test" @change="openFile($event, 'Domestic', 'test')"/>
          </FormItem>
          <FormItem :width="1.12" color="black" label="备注">
            <div class="canClick">点击查看-查看限额</div>
          </FormItem>
        </Form>
      </div>
      <!--  -->
      <div class="border-1px chailv">
        <p class="dom-header">项目名称：市内交通费</p>
        <Form>
          <FormItem :weight="1" color="black" :height="0.3" label="报销金额">
            <JInput iconClass="icon-wenjianjiaicon" @clickIcon="compute = true, name='市内交通费'" placeholder="计算金额"/>
          </FormItem>
          <div class="fileList" v-if="Domestic.test !== null">
            <File :name="Domestic.test.name" @deleted="deleted('Domestic', 'test')"/>
            <!-- <iconSvg iconClass="icon-wenjianjiaicon"/>
            <div class="border-1pxLeft">
              <p class="file-name">文件名：{{Domestic.test.name}}</p>
            </div>
            <iconSvg @click="deleted('Domestic', 'test')" class="border-1pxRight" iconClass="icon-delete"/> -->
          </div>
          <FormItem :width="2" color="black" label="上传附件">
            <upload label="" ref="Domestic.test" @change="openFile($event, 'Domestic', 'test')"/>
          </FormItem>
          <FormItem :width="1.12" color="black" label="备注">
            <div class="canClick">点击查看-查看限额</div>
          </FormItem>
        </Form>
      </div>

      <div class="border-1px chailv">
        <p class="dom-header">项目名称：其他费用</p>
        <Form>
          <FormItem :weight="1" color="black" :height="0.3" label="报销金额">
            <JInput placeholder="填写金额"/>
          </FormItem>
          <div class="fileList" v-if="Domestic.test !== null">
            <File :name="Domestic.test.name" @deleted="deleted('Domestic', 'test')"/>
            <!-- <iconSvg iconClass="icon-wenjianjiaicon"/>
            <div class="border-1pxLeft">
              <p class="file-name">文件名：{{Domestic.test.name}}</p>
            </div>
            <iconSvg @click="deleted('Domestic', 'test')" class="border-1pxRight" iconClass="icon-delete"/> -->
          </div>
          <FormItem :width="2" color="black" label="上传附件">
            <upload label="" ref="Domestic.test" @change="openFile($event, 'Domestic', 'test')"/>
          </FormItem>
          <FormItem :width="1.12" color="black" label="备注">
            <div class="canClick">点击查看-查看限额</div>
          </FormItem>
        </Form>
      </div>

      <div class="border-1px chailv">
        <p class="dom-header">项目名称：差旅费合计</p>
        <div class="baoxiao">
          报销金额：20000元
        </div>
      </div>

      <div class="buttonq">
        <JButton type="primary" round>确定</JButton>
      </div>
    </popup>

    <popup v-model="openAbroad" position="center" title="国外差旅计算器">
      <div class="border-1px chailv">
        <p class="dom-header">项目名称：会议费（培训费）</p>
        <Form>
          <FormItem :weight="1" color="black" :height="0.3" label="外币报销金额">
            <JInput placeholder="填写金额"/>
          </FormItem>
          <div class="fileList" v-if="Domestic.test !== null">
            <File :name="Domestic.test.name" @deleted="deleted('Domestic', 'test')"/>
            <!-- <iconSvg iconClass="icon-wenjianjiaicon"/>
            <div class="border-1pxLeft">
              <p class="file-name">文件名：{{Domestic.test.name}}</p>
            </div>
            <iconSvg @click="deleted('Domestic', 'test')" class="border-1pxRight" iconClass="icon-delete"/> -->
          </div>
          <FormItem :width="2" color="black" label="上传附件">
            <upload label="" ref="Domestic.test" @change="openFile($event, 'Domestic', 'test')"/>
          </FormItem>
          <FormItem :weight="1" color="black" :height="0.3" label="付款日汇率">
            <JInput placeholder="填写金额"/>
          </FormItem>
          <FormItem :width="2" color="black" label="人民币金额">
            <div class="canClick gray" style="text-align: left;line-height: .18rem">--元</div>
          </FormItem>
          <FormItem :width="2.5" color="black" label="备注">
            <div class="canClick gray" style="text-align: left;line-height: .18rem">以美元为例，查询付款日RMB中间价为每100美元兑换人民币687.63，付款日汇率应填：6.8763。若为RMB请填写1.0</div>
          </FormItem>
        </Form>
      </div>

      <div class="border-1px chailv">
        <p class="dom-header">项目名称：住宿费</p>
        <Form>
          <FormItem :weight="1" color="black" :height="0.3" label="报销金额">
            <JInput placeholder="填写金额"/>
          </FormItem>
          <div class="fileList" v-if="Domestic.test !== null">
            <File :name="Domestic.test.name" @deleted="deleted('Domestic', 'test')"/>
            <!-- <iconSvg iconClass="icon-wenjianjiaicon"/>
            <div class="border-1pxLeft">
              <p class="file-name">文件名：{{Domestic.test.name}}</p>
            </div>
            <iconSvg @click="deleted('Domestic', 'test')" class="border-1pxRight" iconClass="icon-delete"/> -->
          </div>
          <FormItem :width="2" color="black" label="上传附件">
            <upload label="" ref="Domestic.test" @change="openFile($event, 'Domestic', 'test')"/>
          </FormItem>
          <FormItem :weight="1" color="black" :height="0.3" label="付款日汇率">
            <JInput placeholder="填写金额"/>
          </FormItem>
          <FormItem :width="2" color="black" label="人民币金额">
            <div class="canClick gray" style="text-align: left;line-height: .18rem">--元</div>
          </FormItem>
          <FormItem :width="1.12" color="black" label="备注">
            <div class="canClick">点击查看-查看限额</div>
          </FormItem>
        </Form>
      </div>

      <div class="border-1px chailv">
        <p class="dom-header">项目名称：国际交通费</p>
        <Form>
          <FormItem :weight="1" color="black" :height="0.3" label="报销金额">
            <JInput placeholder="填写金额"/>
          </FormItem>
          <div class="fileList" v-if="Domestic.test !== null">
            <File :name="Domestic.test.name" @deleted="deleted('Domestic', 'test')"/>
            <!-- <iconSvg iconClass="icon-wenjianjiaicon"/>
            <div class="border-1pxLeft">
              <p class="file-name">文件名：{{Domestic.test.name}}</p>
            </div>
            <iconSvg @click="deleted('Domestic', 'test')" class="border-1pxRight" iconClass="icon-delete"/> -->
          </div>
          <FormItem :width="2" color="black" label="上传附件">
            <upload label="" ref="Domestic.test" @change="openFile($event, 'Domestic', 'test')"/>
          </FormItem>
          <FormItem :weight="1" color="black" :height="0.3" label="付款日汇率">
            <JInput placeholder="填写金额"/>
          </FormItem>
          <FormItem :width="2" color="black" label="人民币金额">
            <div class="canClick gray" style="text-align: left;line-height: .18rem">--元</div>
          </FormItem>
          <FormItem :width="1.12" color="black" label="备注">
            <div class="canClick">点击查看-查看限额</div>
          </FormItem>
        </Form>
      </div>

      <div class="border-1px chailv">
        <p class="dom-header">项目名称：伙食补贴费</p>
        <Form>
          <FormItem :weight="1" color="black" :height="0.3" label="报销金额">
            <JInput iconClass="icon-wenjianjiaicon" @clickIcon="compute = true, name='伙食补贴费'" placeholder="计算金额"/>
          </FormItem>
          <FormItem :weight="1" color="black" :height="0.3" label="付款日汇率">
            <JInput placeholder="填写金额"/>
          </FormItem>
          <FormItem :width="2" color="black" label="人民币金额">
            <div class="canClick gray" style="text-align: left;line-height: .18rem">--元</div>
          </FormItem>
          <FormItem :width="1.12" color="black" label="备注">
            <div class="canClick">点击查看-查看限额</div>
          </FormItem>
        </Form>
      </div>
      <!--  -->
      <div class="border-1px chailv">
        <p class="dom-header">项目名称：公杂费补贴</p>
        <Form>
          <FormItem :weight="1" color="black" :height="0.3" label="报销金额">
            <JInput iconClass="icon-wenjianjiaicon" @clickIcon="compute = true, name='市内交通费'" placeholder="计算金额"/>
          </FormItem>
          <FormItem :weight="1" color="black" :height="0.3" label="付款日汇率">
            <JInput placeholder="填写金额"/>
          </FormItem>
          <FormItem :width="2" color="black" label="人民币金额">
            <div class="canClick gray" style="text-align: left;line-height: .18rem">--元</div>
          </FormItem>
          <FormItem :width="2.49" color="black" label="备注">
            <div class="canClick">点击查看-查看限额</div>
          </FormItem>
        </Form>
      </div>

      <div class="border-1px chailv">
        <p class="dom-header">项目名称：会议费（培训费）</p>
        <Form>
          <FormItem :weight="1" color="black" :height="0.3" label="报销金额">
            <JInput placeholder="填写金额"/>
          </FormItem>
          <div class="fileList" v-if="Domestic.test !== null">
            <File :name="Domestic.test.name" @deleted="deleted('Domestic', 'test')"/>
            <!-- <iconSvg iconClass="icon-wenjianjiaicon"/>
            <div class="border-1pxLeft">
              <p class="file-name">文件名：{{Domestic.test.name}}</p>
            </div>
            <iconSvg @click="deleted('Domestic', 'test')" class="border-1pxRight" iconClass="icon-delete"/> -->
          </div>
          <FormItem :width="2" color="black" label="上传附件">
            <upload label="" ref="Domestic.test" @change="openFile($event, 'Domestic', 'test')"/>
          </FormItem>
          <FormItem :weight="1" color="black" :height="0.3" label="付款日汇率">
            <JInput placeholder="填写金额"/>
          </FormItem>
          <FormItem :width="2" color="black" label="人民币金额">
            <div class="canClick gray" style="text-align: left;line-height: .18rem">--元</div>
          </FormItem>
        </Form>
      </div>

      <div class="border-1px chailv">
        <p class="dom-header">项目名称：差旅费合计</p>
        <div class="baoxiao">
          报销金额：20000元
        </div>
        <div class="canClick" style="text-align: right;font-size: .13rem">人民币中间价查询</div>
      </div>

      <div class="buttonq">
        <JButton type="primary" round>确定</JButton>
      </div>
    </popup>

    <popup position="bottom" v-model="selected">
      <van-picker
        :item-height="30"
        :columns="columns"
        show-toolbar
        @cancel="selected = false"
        @confirm="onConfirm" />
    </popup>

    <popup :overlay="false" position="bottom" v-model="biaozhun">
      <van-picker
        :item-height="30"
        :columns="columns1"
        show-toolbar
        @cancel="biaozhun = false"
        @confirm="onConfirm1" />
    </popup>
  </div>
</template>

<script>
import Upload from '@/components/upload/upload'
import Form from '@/components/form/Form'
import FormItem from '@/components/form/FormItem'
import Popup from '@/components/popup/popup2'
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
import File from './file'
export default {
  name: 'InvoiceAmount',
  data () {
    return {
      fangshi: '',
      rule: '',
      biaozhun: false,
      selected: false,
      username: '',
      clickTab: 0,
      openPop: false,
      openAbroad: false,
      now: '',
      openDomestic: false,
      compute: false,
      name: '',
      columns: ['现金转账', '银行转账', '支票支付'],
      columns1: ['自理', '一餐', '两餐'],
      notTavel: {
        project: '',
        fapiaoList: []
      },
      Domestic: {
        test: null
      }
    }
  },
  components: {
    Upload,
    Form,
    FormItem,
    Popup,
    Tab,
    Tabs,
    File
  },
  methods: {
    openFile (e, msg, key) {
      // if (e.target.files.length === 0) {
      //   return ''
      // }
      this[msg][key] = e[0]
      // this.notTavel = Array.from(e.target.files)
    },
    deleted (msg, key) {
      this[msg][key] = null
      // this.fileList = this.fileList.filter(data => {
      //   return data !== item
      // })
    },
    openPopup (msg) {
      this.openPop = true
      this.now = msg
    },
    onConfirm (value) {
      this.selected = false
      this.fangshi = value
    },
    onConfirm1 (val) {
      this.biaozhun = false
      this.rule = val
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../../common/style/mixin.styl';
  .wrapper
    margin-top .10rem
    padding .15rem .10rem 0 .10rem
    background white
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.50);
    .title
      font-size: .14rem;
      color: #333333
    .item-wrapper
      border-1px(#D3D3D3)
      padding .15rem .10rem
      position relative
      &:last-child
        border-none()
      .item-title
        display inline-block
        font-size: .16rem;
        color: #FD4D4D;
        vertical-align top
      .a
        width 8em
        margin-bottom .1rem
      .JRadioGrounp
        display inline-block
        float right
      .J-input
        border: 1px solid #FD4D4D;
        border-radius: .06rem;
        width 1rem
        min-width 100px
        height .30rem
        position absolute
        right 0
        top 8px
      textarea
        border: 1px solid #FD4D4D;
        border-radius: 6px;
        display block
        width 100%
        margin-top .10rem
        padding .10rem
        box-sizing border-box
        height .80rem
    .upload
      border none
      // display inline-block
      width 100%
      text-align center
      height .37rem
      position relative
      input
        border none
        position absolute
        bottom 0
        margin 0
        padding 0
        height .14rem
        width .75rem
        opacity 0
        left 50%
        margin-left -37.5px
        z-index 20
      .text
        position absolute
        font-size .14rem
        color: #2873FF;
        bottom 0
        vertical-align bottom
        width 100%
        text-align center
        img
          width .19rem
          height .19rem
          vertical-align bottom
          margin-right .10rem
  .file
    margin-top .10rem
    .file-item
      box-shadow: 0 1px 2px 0 rgba(0,0,0,0.50);
      border-radius: .04rem
      width .76rem
      height .56rem
      display inline-block
      font-size: .12rem;
      color: #2873FF;
      text-align center
      margin-left .10rem
      &:first-child
        margin 0
      img
        width .191rem
        margin-top .085rem
        margin-bottom .085rem
  .tabs
    margin-top .1rem
  // .fileList
  //   box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5)
  //   border-radius: .04rem
  //   font-size 0
  //   text-align: left
  //   margin-bottom .04rem
  //   overflow hidden
  //   // padding .14rem 0
  //   .svg-icon
  //     font-size .1914rem
  //     padding .14rem .1rem
  //   .border-1pxLeft
  //     border-1pxLeft(black)
  //     display inline-block
  //     height 100%
  //     font-size .14rem
  //     height .285rem
  //     // line-height .285rem
  //     margin .095rem 0
  //     vertical-align top
  //     padding-left .1rem
  //     .file-name
  //       font-size .14rem
  //       line-height .285rem
  //     .file-path
  //       font-size .12rem
  //       line-height .16rem
  //   .border-1pxRight
  //     font-size .2124rem
  //     color white
  //     background $blue
  //     float right
  .content
    min-height 1.48rem
  .border-1px
    border-1px(#d3d3d3)
  .chailv
    padding .1rem 0
    margin 0 .1rem
    .dom-header
      padding 0 .1rem
      font-size .15rem
      line-height .19rem
    .canClick
      color $blue
    .gray
      text-align right
      color #555555
  .baoxiao
    font-size .13rem
    color #555555
    padding .15rem .2rem 0 .2rem
  .buttonq
    text-align:center
    padding .2rem 0
.ApplicationPort >>> .Form
  .FormItem
    font-size .13rem
.ApplicationPort >>> .tabs
  .tab-pane
      width calc((100% - .12rem) / 3)
      font-size .12rem
</style>
