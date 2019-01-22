module.exports = {
  type: 'object',
  title: '按钮表单',
  properties: {
    text: {
      title: '文本',
      type: 'string',
      default: '我是按钮'
    },
    backgroundColor: {
      title: '背景色',
      description: '',
      type: 'string',
      default: '#ffffff',
      format: 'color'
    },
    fontColor: {
      title: '字体颜色',
      description: '',
      type: 'string',
      default: '#333333',
      format: 'color'
    },
    width: {
      title: '宽度',
      type: 'number',
      default: 100,
    },
    height: {
      title: '高度',
      type: 'number',
      default: 40,
    },
    radius: {
      title: '圆角',
      type: 'number',
      default: 4,
    }
  }
}
