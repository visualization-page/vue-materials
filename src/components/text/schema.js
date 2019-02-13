module.exports = {
  type: 'object',
  title: '文本表单',
  subTypes: [
    {
      title: '图片段落',
      cover: '',
      type: 'object',
      properties: {
        preImg: {
          title: '图片',
          description: '',
          type: 'string',
          format: 'image'
        },
        preWidth: {
          title: '图片宽度',
          description: '',
          type: 'string'
        },
        preHeight: {
          title: '图片高度',
          description: '',
          type: 'string'
        },
        subType: {
          format: 'hidden',
          default: 1,
          overwrite: true
        }
      }
    },
    {
      title: '标题',
      cover: '',
      type: 'object',
      properties: {
        subText: {
          title: '副标题',
          description: '',
          type: 'string'
        },
        subType: {
          format: 'hidden',
          default: 2,
          overwrite: true
        }
      }
    }
  ],
  properties: {
    text: {
      title: '文本',
      type: 'string',
      default: '我是按钮'
    },
    fontColor: {
      title: '颜色',
      description: '',
      type: 'string',
      default: '#333333',
      format: 'color'
    },
    fontSize: {
      title: '大小',
      type: 'number',
      default: 14,
      format: 'select',
      options: [
        {
          label: '10',
          value: 10
        },
        {
          label: '12',
          value: 12
        },
        {
          label: '14',
          value: 14
        },
        {
          label: '16',
          value: 16
        },
        {
          label: '18',
          value: 18
        },
        {
          label: '24',
          value: 24
        },
        {
          label: '32',
          value: 32
        }
      ]
    },
    isBold: {
      title: '加粗',
      type: 'number',
      default: 0,
      format: 'select',
      options: [
        {
          label: '是',
          value: 1
        },
        {
          label: '否',
          value: 0
        }
      ]
    },
    textAlign: {
      title: '对齐方式',
      type: 'string',
      default: 'left',
      format: 'select',
      options: [
        {
          label: '居左',
          value: 'left'
        },
        {
          label: '居中',
          value: 'center'
        },
        {
          label: '居右',
          value: 'right'
        }
      ]
    }
  }
}
