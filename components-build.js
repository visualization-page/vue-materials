const fs = require('fs')
const path = require('path')
const comPath = path.resolve(__dirname, './src/components')
const templatePath = path.resolve(__dirname, '../vue-ssr-template')
const targetComPath = path.resolve(templatePath, 'src')
const { exec } = require('child_process')
var redis = require('redis')
const client = redis.createClient({ password: '123456' })
const { promisify } = require('util')
const setAsync = promisify(client.set).bind(client)
const redisKey = 'remote_version'

const cmd = process.argv.slice(2)
const isCmdComponent = cmd.some(x => x === 'component')
const isCmdTemplate = cmd.some(x => x === 'template')
const isCmdAll = isCmdComponent && isCmdTemplate
console.log(isCmdAll, isCmdComponent, isCmdTemplate)

// 将物料拷贝到模版文件中
exec(`cp -rf ${comPath} ${targetComPath}`, err => {
  if (err) throw err
  console.log('拷贝物料到ssr-template完成')

  // 生成json文件到components目录下
  const targetJson = path.resolve(targetComPath, 'components/config.json')
  const json = {
    version: require(targetJson).version + 1,
    data: []
  }
  console.log(`新的组件配置版本号为：${json.version}`)
  fs.readdir(comPath, (err, dir) => {
    if (err) throw err

    dir.forEach(item => {
      const data = require(path.resolve(comPath, item, 'package.json'))
      // delete data.props
      data.schema = require(path.resolve(comPath, item, 'schema.js'))
      json.data.push(data)
    })

    fs.writeFile(
      targetJson,
      JSON.stringify(json) /* JSON.stringify(json, null, 2) */,
      { encoding: 'utf8' },
      async (err, data) => {
        if (err) throw err
        console.log(`写入成功`)
        const remoteVersion = {
          component: json.version,
          template: undefined
        }

        if (isCmdAll || isCmdComponent) {
          await setAsync(redisKey, JSON.stringify(remoteVersion))
          console.log('更新组件版本信息到redis')
        }

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
            console.log('打包更新模版...')
            exec([
              'cd ../vue-ssr-template',
              'npm run build',
              'git add .',
              'git commit -m \'update materials and patch version\'',
              'npm version patch',
              'git push'
            ].join(' && '), async err => {
              if (err) throw err

              if (isCmdAll || isCmdTemplate) {
                remoteVersion.template = require('../vue-ssr-template/package.json').version
                await setAsync(redisKey, JSON.stringify(remoteVersion))
                console.log('更新模版版本信息到redis')
                // exec(['cd ../vue-ssr-template', 'node build/redis.js'].join(' && '), err => {
                //   if (err) throw err
                // })
              }

              console.log(`更新模版成功`)
              process.exit(0)
            })
          })
        })
      })
  })
})

