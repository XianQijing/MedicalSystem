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
      icon: require('../../common/image/论文icon@3x.png')
    },
    {
      name: '专利',
      icon: require('../../common/image/专利icon@3x.png')
    },
    {
      name: '成果',
      icon: require('../../common/image/成果icon@3x.png')
    },
    {
      name: '奖项',
      icon: require('../../common/image/奖项icon@3x.png')
    },
    {
      name: '专著',
      icon: require('../../common/image/专著icon@3x.png')
    },
    {
      name: '会议',
      icon: require('../../common/image/会议icon@3x.png')
    },
    {
      name: '任职',
      icon: require('../../common/image/任职icon@3x.png')
    },
    {
      name: '其他',
      icon: require('../../common/image/其他icon@3x.png')
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
      icon: require('../../common/image/keTi.png'),
      path: 'FileScientificTopic',
      colums: 'base'
    },
    {
      name: '学科基地',
      icon: require('../../common/image/jiDi.png'),
      colums: 'base',
      path: 'JumpPage'
    },
    {
      name: '优秀人才',
      icon: require('../../common/image/renCai.png'),
      colums: 'base',
      path: 'JumpPage'
    },
    {
      name: '科技奖励',
      icon: require('../../common/image/jiangLi.png'),
      colums: 'base',
      path: 'JumpPage'
    },
    {
      name: '学术活动',
      icon: require('../../common/image/xueShu.png'),
      path: 'ActivityList',
      colums: 'xueshu'
    },
    {
      name: '批准文件',
      icon: require('../../common/image/piZhun.png'),
      colums: 'base',
      path: 'JumpPage'
    },
    {
      name: '论文会议',
      icon: require('../../common/image/huiYi.png'),
      colums: 'base',
      path: 'JumpPage'
    },
    {
      name: '著作出版',
      icon: require('../../common/image/zhuZuo.png'),
      path: 'TeachingMaterial'
    },
    {
      name: '知识产权',
      icon: require('../../common/image/chanQuan.png'),
      path: 'InventionPatent'
    },
    {
      name: '社会任职',
      icon: require('../../common/image/renZhi.png'),
      path: 'SocialService'
    },
    {
      name: '科研服务',
      icon: require('../../common/image/renZhi.png'),
      path: 'SCI'
    }
  ],
  xunHuan: {
    base: ['国家级', '省部级', '市部级', '区部级'],
    xueshu: ['国家级', '省市级', '校级', '院级', '科级']
  },
  InfluenceList: [
    {
      img: require('../../common/image/InfluenceList(1).png'),
      name: '人力资源',
      width: 'normal'
    },
    {
      img: require('../../common/image/InfluenceList(2).png'),
      name: '科研项目',
      width: 'normal'
    },
    {
      img: require('../../common/image/InfluenceList(3).png'),
      name: '人才项目',
      width: 'normal'
    },
    {
      img: require('../../common/image/InfluenceList(4).png'),
      name: '科研基地',
      width: 'normal'
    },
    {
      img: require('../../common/image/InfluenceList(5).png'),
      name: '学科建设',
      width: 'normal'
    },
    {
      img: require('../../common/image/InfluenceList(6).png'),
      name: '科技论文',
      width: 'normal'
    },
    {
      img: require('../../common/image/InfluenceList(7).png'),
      name: '发明专利',
      width: 'normal'
    },
    {
      img: require('../../common/image/InfluenceList(8).png'),
      name: '科技奖励',
      width: 'normal'
    },
    {
      img: require('../../common/image/InfluenceList(9).png'),
      name: '指南标准',
      width: 'normal'
    },
    {
      img: require('../../common/image/InfluenceList(10).png'),
      name: '新增模块',
      width: 'normal'
    }
  ],
  InfluenceList1: [
    {
      img: require('../../common/image/InfluenceList(2).png'),
      name: '国外项目',
      width: 'normal'
    },
    {
      img: require('../../common/image/InfluenceList(11).png'),
      name: '国家级项目',
      width: 'normal'
    },
    {
      img: require('../../common/image/InfluenceList(12).png'),
      name: '教育部项目',
      width: 'normal'
    },
    {
      img: require('../../common/image/InfluenceList(13).png'),
      name: '国家<br/>卫计委项目',
      width: 'normal'
    },
    {
      img: require('../../common/image/InfluenceList(14).png'),
      name: '上海市<br/>科委项目',
      width: 'normal'
    },
    {
      img: require('../../common/image/InfluenceList(15).png'),
      name: '上海市<br/>教委项目',
      width: 'normal'
    },
    {
      img: require('../../common/image/InfluenceList(13).png'),
      name: '上海市<br/>教委项目',
      width: 'normal'
    }
  ],
  InfluenceList2: [
    {
      img: require('../../common/image/InfluenceList(16).png'),
      name: '国家科技重大专项',
      width: 'normal'
    },
    {
      img: require('../../common/image/InfluenceList(17).png'),
      name: '国家重点研发计划',
      width: 'normal'
    },
    {
      img: require('../../common/image/专著red.png'),
      name: '国家自然科学<br/>基金项目',
      width: 'normal'
    },
    {
      img: require('../../common/image/InfluenceList(18).png'),
      name: '国家国际科技<br/>合作专项',
      width: 'normal'
    },
    {
      img: require('../../common/image/InfluenceList(18).png'),
      name: '通用项目占位',
      width: 'normal'
    },
    {
      img: require('../../common/image/InfluenceList(18).png'),
      name: '通用项目占位',
      width: 'normal'
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
  }
}
