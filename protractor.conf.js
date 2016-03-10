const webpackConfig = require('./webpack.config');

exports.config = {
	framework: "jasmine",
	baseUrl: `http://localhost:3000`,
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: [
		'client/**/**.e2e.js',
    'client/**/*.e2e.js'
	],
	jasmineNodeOpts: {
    showTiming: true,
    showColors: true,
    isVerbose: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 400000
  },
  directConnect: true,
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['show-fps-counter=true']
    }
  },
	allScriptsTimeout: 30000,
	onPrepare: function () {
    require("babel-core/register")({ retainLines: true });
    browser.ignoreSynchronization = true;
  }
}