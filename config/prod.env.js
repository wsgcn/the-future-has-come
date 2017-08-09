var merge = require('webpack-merge');
var commonConf = require('./common.env');
var urlConfig = require('./url_config.js');

var prodConf = merge(commonConf, {
    env: 'prod',
    assetsPublicPath: '//assets.souche.com/projects/dafengche/start-demo/',
    // globalConfig 中的 key 需要为 JSON 字符串
    globalConfig: {
        NODE_ENV: JSON.stringify("production"),
        URL_CONFIG: JSON.stringify(urlConfig.prod)
    },
    sourceMap: true
});

module.exports = prodConf;
