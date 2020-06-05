const {
  info
} = require('@vue/cli-shared-utils')

const path = require('path')
const resolve = require('resolve')
const chalk = require('chalk')
const copy = require('copy')
const baseDir = resolve.sync('vue-cli-plugin-hz-pages', { basedir: process.cwd() })
const source = path.resolve(path.dirname(baseDir), 'generator/template/m/**')
const dist = 'src/modules/'

module.exports = (api, options) => {
  // 注册
  api.registerCommand('add', {
    description: 'add a new module',
    usage: 'vue-cli-service add [m1]',
  }, async function serve (args) {
    info('Adding a new module...')

    // entry arg
    const entry = args._[0]
    // api.resolve(dist + entry)
    if (entry) {
      copy(source, api.resolve(dist + entry), function(err, files) {
        if (err) throw err;
        // `files` is an array of the files that were copied
        console.log(chalk.yellow(`模块${entry}创建成功！`))
      });
    } else {
        console.log(chalk.red(`npm run add [module] 缺失参数: module`))
    }
  })
}


