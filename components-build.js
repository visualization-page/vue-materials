const fs = require('fs')
const path = require('path')
const comPath = path.resolve(__dirname, './src/components')
const targetPath = path.resolve(__dirname, 'components.json')

const json = {
  version: 1,
  data: []
}
fs.readdir(comPath, (err, dir) => {
  if (err) throw err

  dir.forEach(item => {
    const data = require(path.resolve(comPath, item, 'package.json'))
    delete data.props
    json.data.push(data)
  })

  fs.writeFile(targetPath, JSON.stringify(json, null, 2), { encoding: 'utf8' }, (err, data) => {
    if (err) throw err
    console.log(`写入成功 ${targetPath}`)
  })
})
