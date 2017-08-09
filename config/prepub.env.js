var merge = require('webpack-merge');
var commonConf = require('./common.env');
var urlConfig = require('./url_config.js');

var prepubConfig = merge(commonConf, {
    env: 'prepub',
    assetsPublicPath: '/projects/dafengche/start-demo/',
    globalConfig: {
        NODE_ENV: JSON.stringify("prepub"),
        URL_CONFIG: JSON.stringify(urlConfig.prepub)
    }
});

module.exports = prepubConfig;
