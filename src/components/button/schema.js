module.exports = {
  type: 'object',
  title: '编辑按钮',
  subTypes: [
    {
      title: '普通按钮',
      cover: '',
      type: 'object',
      properties: {
        borderColor: {
          title: '边框颜色',
          description: '',
          type: 'string',
          format: 'color'
        },
        marginTb: {
          title: '上下边距',
          description: '',
          type: 'number',
          default: 0
        },
        marginLr: {
          title: '左右边距',
          description: '',
          type: 'number',
          default: 10
        },
        subType: {
          format: 'hidden',
          default: 1,
          overwrite: true
        }
      }
    },
    {
      title: '块级按钮',
      cover: '',
      type: 'object',
      properties: {
        borderColor: {
          title: '边框颜色',
          description: '',
          type: 'string',
          format: 'color'
        },
        marginTb: {
          title: '上下边距',
          description: '',
          type: 'number',
          default: 0
        },
        marginLr: {
          title: '左右边距',
          description: '',
          type: 'number',
          default: 10
        },
        subType: {
          format: 'hidden',
          default: 2,
          overwrite: true
        }
      }
    },
    {
      title: '悬浮按钮',
      cover: '',
      type: 'object',
      properties: {
        subType: {
          format: 'hidden',
          default: 3,
          overwrite: true
        }
      }
    },
    {
      title: '图片按钮',
      cover: '',
      type: 'object',
      properties: {
        backgroundImage: {
          title: '背景图片',
          description: '',
          type: 'string',
          format: 'image',
          default: ''
        },
        marginTb: {
          title: '上下边距',
          description: '',
          type: 'number',
          default: 0
        },
        marginLr: {
          title: '左右边距',
          description: '',
          type: 'number',
          default: 10
        },
        subType: {
          format: 'hidden',
          default: 0,
          overwrite: true
        }
      }
    },
  ],
  properties: {
    size: {
      title: '尺寸',
      type: 'string',
      format: 'select',
      default: 'middle',
      options: [
        {
          label: '大号',
          value: 'large'
        },
        {
          label: '中号',
          value: 'middle'
        },
        {
          label: '小号',
          value: 'small'
        },
      ]
    },
    text: {
      title: '文本',
      type: 'string'
    },
    backgroundColor: {
      title: '背景色',
      description: '',
      type: 'string',
      format: 'color'
    },
    color: {
      title: '字体颜色',
      description: '',
      type: 'string',
      format: 'color',
      default: '#666'
    },
    click: {
      title: '点击事件',
      type: 'string',
      format: 'select',
      default: 'tel_tel://123',
      options: [
        {
          label: '跳转到外部',
          value: 'link'
        },
        {
          label: '跳转到内部页面',
          value: 'inner'
        },
        {
          label: '拨打电话',
          value: 'tel'
        }
      ],
      isLink: true
    }
  }
}
