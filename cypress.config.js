const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '51v7za',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
