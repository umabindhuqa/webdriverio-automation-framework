exports.config = {

    //
    // ====================
    // Runner Configuration
    // ====================
    runner: 'local',

    //
    // ====================
    // Test Files
    // ====================
    specs: [
        './test/specs/**/*.js'
    ],

    //
    // ============
    // Capabilities
    // ============
    maxInstances: 1,
    capabilities: [{
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],

    //
    // ===================
    // Test Configurations
    // ===================
    logLevel: 'info',

    bail: 0,
    baseUrl: 'https://example.com',   // Change to your app url later

    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    framework: 'mocha',
    
    reporters: [
    'spec',
    ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: false,
        disableWebdriverScreenshotsReporting: false,
    }]
],


    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    //
    // =================
    // Hooks
    // =================

    /**
     * Take screenshot automatically on failure
     */
    afterTest: async function (test, context, { error }) {
        if (error) {
            await browser.saveScreenshot(`./errorShots/${test.title}.png`);
        }
    },

};
