let config = {
  "host": "localhost",
  "prefix": "/",
  "port": "4848",
  "isSecure": false
};
let appId = "Portal_DEV.qvf";
let baseUrl = (config.isSecure ? "https://" : "http://") + config.host + (config.port ? ":" + config.port : "") + config.prefix + "resources";

window.require.config({
  baseUrl
});

require(["js/qlik"], function (qlik) {

  angular.module('app')
    .constant('qlik', {
      instance: qlik,
      config,
      appId
    });

  angular.bootstrap(document, ['app', 'qlik-angular']);
});
