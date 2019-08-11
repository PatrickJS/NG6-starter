var config = {
    "host": "localhost",
    "prefix": "/",
    "port": "4848",
    "isSecure": false
},
    baseUrl = (config.isSecure ? "https://" : "http://") + config.host + (config.port ? ":" + config.port : "") + config.prefix + "resources";

window.require.config({
    baseUrl: baseUrl
});

require(["js/qlik"], function (qlik) {

    angular.module('app')
        .constant('qlik', qlik)
        .constant('qlik-config', config);

    angular.bootstrap(document, ['app', 'qlik-angular']);


});