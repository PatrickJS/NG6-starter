var config = {
  "host": "localhost",
  "prefix": "/",
  "port": "4848",
  "isSecure": false
};
var appId = "Portal_DEV.qvf";
var baseUrl = (config.isSecure ? "https://" : "http://") + config.host + (config.port ? ":" + config.port : "") + config.prefix + "resources";

window.require.config({
  baseUrl: baseUrl
});

require(["js/qlik"], function (qlik) {

  angular.module('app')
    .constant('qlik', {
      instance: qlik,
      config: config,
      appId: appId
    });

  angular.bootstrap(document, ['app', 'qlik-angular']);
});
