const { defineConfig } = require('cypress');
 
module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  video: true, //will record video once the test fails
  videoCompression: 32,
  defaultCommandTimeout: 5000,
  chromeWebSecurity: false, //only for Chrome browser
  watchForFileChanges: false,
  viewportWidth: 1280, //default width
  viewportHeight: 720, //default height
  execTimeout: 60000,
  pageLoadTimeout: 60000,
  requestTimeout: 15000,
  responseTimeout: 15000,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
 
    },
  },
});