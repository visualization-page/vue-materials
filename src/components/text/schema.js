module.exports = {
  type: 'object',
  title: '文本表单',
  properties: {
    text: {
      title: '文本',
      type: 'string',
      default: '我是按钮'
    },
    fontColor: {
      title: '字体颜色',
      description: '',
      type: 'string',
      default: '#333333',
      format: 'color'
    },
    fontSize: {
      title: '字体大小',
      type: 'number',
      default: 14,
    }
  }
}
