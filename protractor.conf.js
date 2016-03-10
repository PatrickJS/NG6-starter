exports.config = {
	framework: "jasmine",
	baseUrl: `http://localhost:${process.env.PORT || 3000}`,
	seleniumServerJar: './node_modules/protractor/selenium/selenium-server-standalone-2.51.0.jar',
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
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['show-fps-counter=true']
    }
  },
	allScriptsTimeout: 30000,
	onPrepare: function () {
    require("babel-core/register")({ retainLines: true });
  }
}