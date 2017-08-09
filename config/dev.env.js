var merge = require('webpack-merge');
var commonConf = require('./common.env');
var projectConfig = require('./project.config')
var urlConfig = require('./url_config.js');

var devConf = merge(commonConf, {
    env: 'dev',
    assetsPublicPath: '/projects/dafengche/start-demo/',
    // globalConfig 中的 key 需要为 JSON 字符串
    globalConfig: {
        NODE_ENV: JSON.stringify("development"),
        URL_CONFIG: JSON.stringify(urlConfig.dev)
    },
    port: projectConfig.port,
    proxyTable: {}
});

module.exports = devConf;
