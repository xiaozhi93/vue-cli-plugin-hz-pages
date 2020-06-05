// service 插件 vue-cli-service命令调用自动加载插件

const serve = require('./commands/serve')
const build = require('./commands/build')
const add = require('./commands/add')
module.exports = (api, projectOptions) => {

    serve(api, projectOptions) // 注册dev

    build(api, projectOptions) //注册build

    add(api, projectOptions) //注册add

}