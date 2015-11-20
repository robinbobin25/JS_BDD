exports.config = {
  //seleniumServerJar: "node_modules/selenium-server-standalone-2.48.2.jar",
  baseUrl: 'http://pn.com.ua',
  specs: ['specs/scenario*.js'],

  capabilities: {
    browserName: 'firefox'
  }

};