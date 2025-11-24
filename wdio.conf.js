exports.config = {
    runner: 'local',
    specs: ['./test/specs/**/*.js'],

    maxInstances: 1,
    capabilities: [{
        browserName: 'chrome'
    }],

    logLevel: 'error',

    framework: 'mocha',
    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}
