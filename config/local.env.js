var merge = require('webpack-merge');
var commonConf = require('./common.env');
var projectConfig = require('./project.config')

var devConf = merge(commonConf, {
    env: 'dev',
    assetsPublicPath: '/projects/dafengche/finance-plan/',
    // globalConfig 中的 key 需要为 JSON 字符串
    globalConfig: {
        NODE_ENV: JSON.stringify("development"),
        ERP: JSON.stringify("//erp-dev3.sqaproxy.souche.com")
    },
    port: projectConfig.port,
    proxyTable: {
        '/api/get': {
            target: '//erp-dev3.sqaproxy.souche.com',
            changeOrigin: true,
            pathRewrite: {
                '/api/get': ''
            }
        }
    }
});

module.exports = devConf;
