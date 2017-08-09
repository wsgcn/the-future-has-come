## 建成项目

前置安装，[搜车公用脚手架项目地址](http://fedoc.sqaproxy.souche.com/#/f2e/standard/project_boilerplates)

```bash
sue init souche:souche-vue/project-template#feat/local --clone
## 一堆设置后

git init
## 注意git地址替换为你在gitlab所建的那个项目的ssh地址
git remote add origin git@git.souche.com:fis-projects/dafengche-start-demo.git
git status
```

![](http://img.souche.com/20170809/png/f0683d922120f3d6a82d8c936c288b87.png)

![](http://img.souche.com/20170809/png/26549c06ba7d7f81a9beac79fd0589af.png)

## 项目本地开发

### 前置host环境需要

修改 hosts 文件，加入规则

```
local.souche.com 127.0.0.1
```

### 安装依赖，并且运行

```
# 采用了souche的私有库
npm install --registry=http://registry.npm.souche-inc.com

npm run local
```

## 开发过程中遇到的问题

### 浏览器自带样式

打开了 http://local.souche.com:8111/#/ 发现浏览器自带的样式仍然在，body标签还有margin属性。于是本项目里提供了 ./src/assets/less/reset.less 供你参考。

### 搜车内部库

有哪些搜车内部可用库？

* ui组件库[so-ui](http://f2e-assets.souche.com/projects/so-ui/www/index.html#/components/color)
* 共用函数库[souche-util](http://git.souche.com/souche-f2e/souche-util/tree/master)
* app和h5交互通用库[Tower](http://fedoc.sqaproxy.souche.com/#/f2e/packages/tower/catalog/index)

## 项目发布

```
npm run build
# 测试环境选择dev，预发环境选prepub，线上选prod

# 测试环境(dev)推送，可以直接推送到服务器，但是预发(prepub)和线上(prod)只会留个存档，需要找运维发布
sw publish dev
```

## 单页结构目录介绍

```
.
|____.babelrc  babel编译文件，本项目支持stage-2，es6语法。
|____.editorconfig  编码统一规范，这里规定了1个tab等于4个空格的缩进，还有其他一些编码设置。
|____.eslintignore  eslint配置文件，忽略某些文件的eslint检测
|____.eslintrc.js  eslint配置文件，定义了诸多js语法检测，例如必须4格缩进
|____.gitignore
|____.postcssrc.js  ？？
|____.tern-project  ？？
|____build  webpack打包文件配置
| |____build-prompt.js  测试，预发，线上编译有关
| |____build.js  测试，预发，线上编译有关
| |____check-versions.js  测试，预发，线上编译有关
| |____dev-client.js  本地启动有关
| |____dev-server.js  本地启动有关，启用webpack-hot-middleware热更新加载插件。
| |____publish-prompt.js  发布有关
| |____rollback.js  回滚有关
| |____tag.js  线上打tag
| |____utils.js  webpack打包所用的工具函数
| |____vue-loader.conf.js  vue-loader配置
| |____webpack.base.conf.js  webpack本地和发布时所共用的基础配置
| |____webpack.build.conf.js  发布前webpack编译的配置信息
| |____webpack.dev.conf.js  本地启动的webpack配置信息。
| |____webpack.test.conf.js  单测所需
|____config  webpack细分的一些配置信息
| |____common.env.js
| |____dev.env.js  测试环境有关，配置全局变量
| |____index.js
| |____local.env.js  本地环境有关，配置全局变量以及本地代理
| |____prepub.env.js  预发环境有关，配置全局变量
| |____prod.env.js  线上环境有关，配置全局变量
| |____project.config.js  基础配置，如配置项目启动端口，是否为单页应用等。
| |____test.env.js
|____index.html  单页应用html模版。
|____Makefile  发布命令配置文件
|____package.json
|____README.md
|____src  具体前端代码文件夹
| |____api  共用请求方法放置，如果不需要可删除。
| |____App.vue  单页入口
| |____assets  静态资源存放文件夹
| | |____fonts
| | |____images
| | |____less
| | |____logo.png
| |____components  共用组件文件夹
| |____directives  共用vue指令文件夹，若无可删。
| |____filters  共用vue的filters文件夹，若无可山
| |____main.js  单页应用入口
| |____mixins  共用vue的mixins文件夹，若无可删。
| |____router  单页路由配置
| | |____index.js
|____static  发布相关的资源缓存文件夹，无需理会
```
