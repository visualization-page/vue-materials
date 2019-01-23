const fs = require('fs')
const path = require('path')
const comPath = path.resolve(__dirname, './src/components')
const templatePath = path.resolve(__dirname, '../vue-ssr-template')
const targetComPath = path.resolve(templatePath, 'src')
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

      // 全局注册异步组件更新引用
      const appJsPath = path.resolve(templatePath, 'app.js')
      fs.readFile(appJsPath, 'utf-8', (err, content) => {
        const final = content.replace(/\/\/ global-component-start\n[\s\S]+\/\/ global-component-end/, () => {
          if (err) throw err
          const tmp = ['// global-component-start']
          tmp.push('Vue.prototype.$all = {')
          json.data.forEach(item => {
            tmp.push(`  '${item.name}': () => import('${item.path}'),`)
          })
          tmp.push('}')
          tmp.push('// global-component-end')
          return tmp.join('\n')
        })
        fs.writeFile(appJsPath, final, 'utf8', err => {
          if (err) throw err
          console.log('注册全局组件，改写app.js成功')
          console.log('打包更新模版')
          // exec(`cd ../vue-ssr-template && npm run build && git add . && git commit -m 'update materials' && git push`, err => {
          //   if (err) throw err
          //   console.log(`更新模版成功`)
          // })
        })
      })
    })
  })
})

