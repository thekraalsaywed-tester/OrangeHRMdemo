const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video:true, //for capturing video
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    testIsolation:false //this command use for integration
  },
});

