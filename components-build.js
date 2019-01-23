const fs = require('fs')
const path = require('path')
const comPath = path.resolve(__dirname, './src/components')
const targetComPath = path.resolve(__dirname, '../vue-ssr-template/src')
// const targetPath = path.resolve(__dirname, 'components.json')
const { exec } = require('child_process')

// 将物料拷贝到模版文件中
exec(`cp -rf ${comPath} ${targetComPath}`, err => {
  if (err) throw err
  console.log('拷贝物料到ssr-template完成')

  // 生成json文件到components目录下
  const json = {
    version: 1,
    data: []
  }
  fs.readdir(comPath, (err, dir) => {
    if (err) throw err

    dir.forEach(item => {
      const data = require(path.resolve(comPath, item, 'package.json'))
      // delete data.props
      data.schema = require(path.resolve(comPath, item, 'schema.js'))
      json.data.push(data)
    })

    fs.writeFile(path.resolve(targetComPath, 'components/config.json'), JSON.stringify(json, null, 2), { encoding: 'utf8' }, (err, data) => {
      if (err) throw err
      console.log(`写入成功`)
    })
  })
})

