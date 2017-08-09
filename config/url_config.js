'use strict';

var urlConfig = {
    dev: {
        shieldUrl: 'http://shield.sqaproxy.souche.com',
        shopUrl: 'http://shop.sqaproxy.souche.com',
        iframePrefix: 'http://shop.sqaproxy.souche.com/pages/admin/dashboard.html?url=',
        trackUrl: 'http://115.29.10.121:10011',
        cupid: 'http://cupid.sqaproxy.souche.com',
        f2e: 'http://f2e.souche.com',
        order: 'http://oms-dev.sqaproxy.souche.com',
        aution: 'http://auction-test.sqaproxy.souche.com',
        detect: 'http://detect-test.sqaproxy.souche.com',
        erp: 'http://erp-dev2.sqaproxy.souche.com'
    },
    prepub: {
        shieldUrl: 'http://shield.prepub.souche.com',
        shopUrl: 'http://shop.prepub.souche.com',
        iframePrefix: 'http://shop.prepub.souche.com/pages/admin/dashboard.html?url=',
        trackUrl: 'http://dfc.souche.com',
        cupid: 'http://cupid.prepub.souche.com',
        f2e: 'http://f2e.prepub.souche.com',
        order: 'http://oms.prepub.souche.com',
        aution: 'http://souche-auction.prepub.souche.com',
        detect: 'http://detect.prepub.souche.com',
        erp: 'http://erp.prepub.souche.com'
    },
    prod: {
        shieldUrl: 'https://shield.souche.com',
        shopUrl: 'http://shop.souche.com',
        iframePrefix: 'http://shop.souche.com/pages/admin/dashboard.html?url=',
        trackUrl: 'https://dfc.souche.com',
        cupid: 'https://cupid.souche.com',
        f2e: 'https://f2e-assets.souche.com',
        order: 'https://oms.souche.com',
        aution: 'https://souche-auction.souche.com',
        detect: 'https://detect.souche.com',
        erp: 'https://erp.souche.com'
    }
};

module.exports = urlConfig;
