module.exports = {
    projectTemplate: 'souche:souche-vue/project-template#2.0',
    noEscape: true,
    department: 'dafengche',
    name: 'start-demo',
    description: '新人快速上手demo',
    author: '陈通塔 <chentongta@souche.com>',
    singlePage: true,
    /*
     * 多页面的应用，要在 multiPageNames 里配置每个页面的名称, eg:
     *
     *    multiPageNames: [ 'list', 'detail' ]
     *
     * 然后需要在 src/pages 目录下创建同名文件
     */
    multiPageNames: [],
    build: 'standalone',
    unit: false,
    e2e: false,
    port: 8111,
    vuex: false,
    router: true,
    hash: true,
    destDirName: 'dafengche-start-demo',
    autoOpenBrowser: true
};
