export default {
  reviewed: true,
  columns: ['通过', '不通过', '建议修改'],
  iconList: [
    {
      name: '会场费用',
      icon: {
        active: require('../../common/image/huiActive.png'),
        normal: require('../../common/image/huiNormal.png')
      }
    },
    {
      name: '住宿费用',
      icon: {
        active: require('../../common/image/zhuSuActive.png'),
        normal: require('../../common/image/zhuSuNormal.png')
      }
    },
    {
      name: '专家费用',
      icon: {
        active: require('../../common/image/zhuanJiaActive.png'),
        normal: require('../../common/image/zhuanJiaNormal.png')
      }
    },
    {
      name: '用餐费用',
      icon: {
        active: require('../../common/image/useActive.png'),
        normal: require('../../common/image/useNormal.png')
      }
    },
    {
      name: '交通费用',
      icon: {
        active: require('../../common/image/jiaoTongActive.png'),
        normal: require('../../common/image/jiaoTongNormal.png')
      }
    },
    {
      name: '会议用品费',
      icon: {
        active: require('../../common/image/yongPinActive.png'),
        normal: require('../../common/image/yonpinNormal.png')
      }
    },
    {
      name: '会议劳务费',
      icon: {
        active: require('../../common/image/huiYiActive.png'),
        normal: require('../../common/image/huiYiNormal.png')
      }
    },
    {
      name: '其他',
      icon: {
        active: require('../../common/image/otherActive.png'),
        normal: require('../../common/image/otherNormal.png')
      }
    },
    {
      name: '会议预算总计',
      icon: {
        active: require('../../common/image/yuSuanActive.png'),
        normal: require('../../common/image/yuSuanNormal.png')
      }
    }
  ],
  ProjectIcon: [
    {
      name: '论文',
      icon: 'icon-xueshulunwenicon'
    },
    {
      name: '专利',
      icon: 'icon-zhuanliicon'
    },
    {
      name: '成果',
      icon: 'icon-chengguoicon'
    },
    {
      name: '奖项',
      icon: 'icon-jiangxiangicon'
    },
    {
      name: '专著',
      icon: 'icon-zhuanzhuicon'
    },
    {
      name: '会议',
      icon: 'icon-guoneihuiyiicon'
    },
    {
      name: '任职',
      icon: 'icon-Page3'
    },
    {
      name: '其他',
      icon: 'icon-qitaicon'
    }
  ],
  ProjectSettings: {
    content: ['全选', '项目信息', '完成单位', '人员信息', '经费预算', '上传标书', '上传附件', '预期成果', '知识产权信息'],
    direct: ['设备费', '材料费', '差旅费', '会议费', '劳务费', '其他费用',
      '测试化验加工', '燃料动力费', '专家咨询费', '国际合作与交流费', '文献出版/知识产权费'
    ],
    indirect: ['科研管理费', '绩效奖励费'],
    Education: ['全选', '大专', '本科', '硕士研究生', '博士研究生', '其他'],
    degree: ['全选', '学士', '硕士', '博士', '无'],
    Title: ['全选', '初级', '中级', '副高级', '高级'],
    age: ['不限', '35以下', '40岁以下', '45岁以下']
  },
  ElectronicArchives: [
    {
      name: '科研课题',
      icon: 'icon-keyanketiicon',
      path: 'FileScientificTopic',
      colums: 'base',
      weight: 0
    },
    {
      name: '学科基地',
      icon: 'icon-keyanjidiicon',
      colums: 'base',
      path: 'JumpPage',
      weight: 0
    },
    {
      name: '优秀人才',
      icon: 'icon-youxiurencaiicon',
      colums: 'base',
      path: 'JumpPage',
      weight: 0
    },
    {
      name: '科技奖励',
      icon: 'icon-kejijiangliicon-zhengchang',
      colums: 'base',
      path: 'JumpPage',
      weight: 35
    },
    {
      name: '学术活动',
      icon: 'icon-Page5',
      path: 'ActivityList',
      colums: 'xueshu',
      weight: 0
    },
    {
      name: '批准文件',
      icon: 'icon-chengguoicon',
      colums: 'base',
      path: 'JumpPage',
      weight: 35
    },
    {
      name: '论文会议',
      icon: 'icon-guoneihuiyiicon',
      colums: 'base',
      path: 'JumpPage',
      weight: 35
    },
    {
      name: '著作出版',
      icon: 'icon-zhuanzhuicon',
      path: 'TeachingMaterial',
      weight: 35
    },
    {
      name: '知识产权',
      icon: 'icon-zhuanliicon',
      path: 'InventionPatent',
      weight: 35
    },
    {
      name: '社会任职',
      icon: 'icon-Page3',
      path: 'SocialService',
      weight: 35
    },
    {
      name: '科研服务',
      icon: 'icon-Page3',
      path: 'SCI',
      weight: 35
    }
  ],
  xunHuan: {
    base: ['国家级', '省部级', '市部级', '区部级'],
    xueshu: ['国家级', '省市级', '校级', '院级', '科级']
  },
  InfluenceList: [
    {
      img: 'icon-renliziyuanicon',
      name: '人力资源',
      width: 0
    },
    {
      img: 'icon-keyanxiangmuicon',
      name: '科研项目',
      width: 0
    },
    {
      img: 'icon-jixujiaoyuicon-zhengchang',
      name: '人才项目',
      width: 20
    },
    {
      img: 'icon-keyanketiicon-zhengchang',
      name: '科研基地',
      width: 20
    },
    {
      img: 'icon-xuekejiansheicon-zhengchang',
      name: '学科建设',
      width: 20
    },
    {
      img: 'icon-xueshulunwenicon',
      name: '科技论文',
      width: 20
    },
    {
      img: 'icon-zhuanliicon',
      name: '发明专利',
      width: 20
    },
    {
      img: 'icon-kejijiangliicon-zhengchang',
      name: '科技奖励',
      width: 20
    },
    {
      img: 'icon-zhinan',
      name: '指南标准',
      width: 20
    },
    {
      img: 'icon-Page-',
      name: '新增模块',
      width: 0
    }
  ],
  InfluenceList1: [
    {
      img: 'icon-keyanxiangmuicon',
      name: '国外项目'
    },
    {
      img: 'icon-Page10',
      name: '国家级项目'
    },
    {
      img: 'icon-Page8',
      name: '教育部项目'
    },
    {
      img: 'icon-Page6',
      name: '国家<br/>卫计委项目'
    },
    {
      img: 'icon-Page7',
      name: '上海市<br/>科委项目'
    },
    {
      img: 'icon-Page9',
      name: '上海市<br/>教委项目'
    },
    {
      img: 'icon-Page6',
      name: '上海市<br/>教委项目'
    }
  ],
  InfluenceList2: [
    {
      img: 'icon-zhongdazhuanxiang',
      name: '国家科技重大专项',
      width: 0
    },
    {
      img: 'icon-jihuaicon-zhengchang',
      name: '国家重点研发计划',
      width: 0
    },
    {
      img: 'icon-zhuanzhuicon',
      name: '国家自然科学<br/>基金项目',
      width: 30
    },
    {
      img: 'icon-Page2',
      name: '国家国际科技<br/>合作专项',
      width: 0
    },
    {
      img: 'icon-Page2',
      name: '通用项目占位',
      width: 0
    },
    {
      img: 'icon-Page2',
      name: '通用项目占位',
      width: 0
    }
  ],
  LeadingOffice: [
    {
      icon: 'icon-keyanxiangmuicon',
      name: '科研项目',
      path: 'Leading'
    },
    {
      icon: 'icon-xuekejiansheicon-zhengchang',
      name: '重点学科'
    },
    {
      icon: 'icon-rencaijihuaicon-zhengchang',
      name: '人才培养'
    },
    {
      icon: 'icon-kejijiangliicon-zhengchang',
      name: '科技奖励'
    },
    {
      icon: 'icon-chuguojiaoliuicon-zhengchang',
      name: '出国交流',
      path: 'OfficeAbroad'
    },
    {
      icon: 'icon-guoneihuiyiicon',
      name: '国内会议',
      path: 'OfficeMeeting'
    },
    {
      icon: 'icon-xueshulunwenicon',
      name: '学术论文',
      path: 'OfficePaper'
    },
    {
      icon: 'icon-zhuanliicon',
      name: '发明专利',
      path: 'OfficePatent'
    },
    {
      icon: 'icon-zhuanzhuicon',
      name: '学术专著',
      path: 'OfficeMonograph'
    },
    {
      icon: 'icon-jingfeiicon',
      name: '经费使用',
      path: 'OfficeFunds'
    },
    {
      icon: 'icon-Page3',
      name: '学术任职',
      path: 'OfficeServing'
    },
    {
      icon: 'icon-keyanketiicon-zhengchang',
      name: '科研合作',
      path: 'Cooperation'
    }
  ],
  LeadingOfficeActive: '院长办公',
  SystemMaintenance: {
    AdminRole: ['全选', '用户中心', '通知文件', '科研课题', '人才培养', '学科建设', '科技奖励', '项目管理',
      '事项审批', '经费管理', '成果管理', '科研档案', '数据统计', '社会任职', '参数设置', '下载中心', '考试管理',
      '院长办公', '项目审批', '事项审批', '经费审批', '专家评审', '继续教育', '绩效考核', '科教服务', '数据导入']
  },
  SystemMaintenanceDataImport: [
    {
      icon: 'icon-yonghuzhongxinicon_',
      path: 'UserMsg',
      weight: 0,
      name: '用户信息'
    },
    {
      icon: 'icon-keyanxiangmuicon',
      path: 'DataProject',
      weight: 0,
      name: '我的项目'
    },
    {
      icon: 'icon-xueshulunwenicon',
      path: '',
      weight: 30,
      name: '我的论文'
    },
    {
      icon: 'icon-Page3',
      path: '',
      weight: 30,
      name: '我的任职'
    },
    {
      icon: 'icon-guoneihuiyiicon',
      path: '',
      weight: 30,
      name: '我的会议'
    },
    {
      icon: 'icon-zhuanliicon',
      path: '',
      weight: 30,
      name: '我的专利'
    },
    {
      icon: 'icon-shixiangshenpiicon_',
      path: '',
      weight: 0,
      name: '我的成果'
    },
    {
      icon: 'icon-zhuanzhuicon',
      path: '',
      weight: 30,
      name: '我的著作'
    },
    {
      icon: 'icon-Page5',
      path: '',
      weight: 0,
      name: '我的活动'
    }
  ],
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
      type: '审核中'
    }
  ]
}
