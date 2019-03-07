/** @format */

export const RESPONSE_SUCCESS_CODE = '000000';
export const RESPONSE_VALIDCODE_SUCCESS_CODE = '000026';
export const RESPONSE_VERIFYMSG_SUCCESS_CODE = '000016';
export const RESPONSE_SENDMSG_SUCCESS_CODE = '000013';
export const RESPONSE_FINAL_CODE = 0;
export const MESSAGE_COUNT_CODE = 61;

export const allNaireList = [
  {
    initIndex: 1,
    type: 'checkbox',
    title: '您目前授课学段是？',
    children: ['小学', '初中', '高中', '非授课老师', '其他']
  },
  {
    initIndex: 2,
    type: 'checkbox',
    title: '您目前所授学科是？',
    children: [
      '语文',
      '数学',
      '英语',
      '历史',
      '政治',
      '地理',
      '化学',
      '物理',
      '生物',
      '信息技术',
      '其他'
    ]
  },
  {
    initIndex: 3,
    type: 'checkbox',
    title: '您使用的产品有？',
    children: [
      '智慧课堂',
      '智学网',
      '纸笔课堂',
      '智慧校园教务管理系统',
      '资源应用平台',
      '其他'
    ]
  },
  {
    initIndex: 4,
    type: 'radio',
    title: '您使用讯飞教育产品多长时间了？',
    children: [
      '还未开始使用',
      '不到2个月',
      '2个月-半年',
      '半年-1年',
      '1年以上',
      '其他'
    ]
  },
  {
    initIndex: 5,
    type: 'radio',
    title: '您认为产品功能是否可以满足您的工作使用需求？',
    children: ['完全满足使用', '基本满足使用', '不太能满足', '完全不能满足']
  },
  {
    initIndex: 6,
    type: 'radio',
    title: '您认为产品功能是否简单易上手，操作是否流畅高效？',
    children: [
      '简单，操作流畅高效',
      '一般，培训后可以掌握操作',
      '有点复杂，培训后仍需要偶尔指导操作',
      '非常复杂，培训后仍无法掌握操作'
    ]
  },
  {
    initIndex: 7,
    type: 'radio',
    title: '您对产品外观设计、页面美观度是否满意？',
    children: ['满意', '一般', '不太满意', '非常不满意']
  },
  {
    initIndex: 8,
    type: 'radio',
    title: '您在使用产品时是否会经常遇到故障？（软件功能问题）',
    children: [
      '没有遇到过故障',
      '偶尔遇到过，不影响整体使用',
      '经常遇到故障，反馈后可以彻底修复',
      '经常遇到故障，修复后易复现故障'
    ]
  },
  {
    initIndex: 9,
    type: 'radio',
    title: '您对产品硬件问题的售后处理过程及结果是否满意？（非软件功能问题）',
    children: ['满意', '一般', '不太满意', '非常不满意']
  },
  {
    initIndex: 10,
    type: 'radio',
    title: '和最初使用产品相比，您认为现在的产品使用体验是否有所改善？',
    children: [
      '有很大改善',
      '有小幅度改善，但对改善点印象不深',
      '没有改善，但认为不需要改善',
      '没有改善，提出的需求/问题没有解决'
    ]
  },
  {
    initIndex: 11,
    type: 'radio',
    title: '您联系我们的时候，校园服务运营人员多久可以回复您？',
    children: [
      '马上',
      '2小时内',
      '大于2小时',
      '未遇到需要联系的情况',
      '不知道有服务运营人员'
    ]
  },
  {
    type: 'radio',
    initIndex: 12,
    title: '您反馈的问题或需求，校园服务运营人员多久可以解决？',
    children: ['半天', '当天', '1周内', '大于1周']
  },
  {
    type: 'radio',
    initIndex: 13,
    title:
      '短期内无法解决的产品问题或需求，校园服务运营人员多久和您沟通一次进展？',
    children: ['每天', '每周', '大于1周', '未出现过无法解决的问题/需求']
  },
  {
    type: 'radio',
    initIndex: 14,
    title:
      '近半年来，校园服务运营人员的工作，是否曾给您和学校的教学工作带来负面影响？',
    children: ['不存在', '有']
  },
  {
    type: 'checkbox',
    initIndex: 15,
    title: '近半年来，校园服务运营人员的工作，是否给您和学校带来以下帮助？',
    children1: [
      '您的问题得到快速、简单的解决结果',
      '提供了一些可参考的教学教研新思路',
      '学生的学习积极性有提高的情况',
      '学生的学习成绩有提升的情况',
      '学生的学习习惯有提升的情况',
      '教学、教务工作更高效',
      '教学、教务工作更规范'
    ],
    children2: ['没有带来任何帮助', '应用时间太短（不足2个月），无法做出评价'],
    children3: ['其他']
  },
  {
    type: 'radio',
    initIndex: 16,
    title: '对讯飞的服务，我的态度是？',
    children: ['点赞', '中立', '吐槽']
  },
  {
    type: 'checkbox',
    initIndex: 17,
    title: '您给服务点赞的原因有？（可多选）',
    children: [
      '态度热情',
      '认真负责',
      '对产品非常熟悉',
      '问题解决效率高',
      '积极沟通',
      '培训高效易懂',
      '问题需求均有答复',
      '其他'
    ]
  },
  {
    type: 'checkbox',
    initIndex: 18,
    title: '您想吐槽服务的原因有？',
    children: [
      '态度冷淡',
      '迟到/未按约定执行工作',
      '对产品不太熟悉',
      '问题解决效率低',
      '不知道找谁解决问题',
      '培训听不懂',
      '未反馈问题处理结果/进展',
      '其他'
    ]
  },
  {
    type: 'checkbox',
    initIndex: 19,
    title: '您会用哪些词语来评价我们的服务呢？',
    children: [
      '态度热情',
      '态度冷淡',
      '认真负责',
      '迟到/未按约定执行工作',
      '对产品非常熟悉',
      '对产品不太熟悉',
      '问题解决效率高',
      '问题解决效率低',
      '积极沟通',
      '不知道找谁解决问题',
      '培训高效易懂',
      '培训听不懂',
      '问题需求均有答复',
      '未反馈问题处理结果/进展',
      '其他'
    ]
  },
  {
    type: 'radio',
    initIndex: 20,
    title: '您会推荐别人使用我们的教育产品吗？',
    children: ['肯定会', '说不清', '不会']
  },
  {
    type: 'textarea',
    initIndex: 21,
    title: '您会推荐的原因是？'
  },
  {
    type: 'textarea',
    initIndex: 22,
    title: '我们怎样改进会更适合您？'
  }
];
