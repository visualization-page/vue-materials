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
        }
      }
    },
    {
      title: '图片按钮',
      cover: '',
      type: 'object',
      properties: {
        borderImage: {
          title: '背景图片',
          description: '',
          type: 'string',
          format: 'image'
        }
      }
    },
  ],
  properties: {
    category: {
      title: '风格',
      type: 'number',
      format: 'select',
      default: 1,
      options: [
        {
          label: '普通按钮',
          value: 1
        },
        {
          label: '块级按钮',
          value: 2
        },
        {
          label: '悬浮按钮',
          value: 3
        },
      ]
    },
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
    src: {
      title: '链接',
      type: 'string',
      format: 'link'
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
      format: 'color'
    }
  }
}
