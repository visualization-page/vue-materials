module.exports = {
  type: 'object',
  title: '编辑按钮',
  properties: {
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
      format: 'color'
    },
    size: {
      title: '尺寸',
      type: 'string',
      format: 'select',
      default: 'middle',
      enum: [
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
    }
  }
}
