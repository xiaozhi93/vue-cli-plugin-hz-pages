# vue-cli-plugin-hz-pages VUE多页开发构建插件

## 使用方式
- npm run add module 添加某一项目
- npm run serve module 启动某个项目
- npm run build module 构建某个项目
- npm run build m1 m2 m3... 构建多个项目
- npm run build 构建所有项目

## 获取命令行中的参数
```Javascript
npx vue-cli-service serve --open sign
```

## 环境变量设置及代理接口配置
- 使用vue自带环境变量设置就行


## 为特定的页面添加特定的webpack配置
```Javascript
module.exports = {
    pluginOptions: {
        pages: {
            sign: { // sign页面的配置
                publicPath: '/sign/'
            }
        }
    }
}
```


## 打包，打包分析及部署配置
打包及打包分析
```JavaScript
npx vue-cli-service build --report sign
```