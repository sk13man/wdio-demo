export const config: WebdriverIO.Config = {
  specs: ["**/tests/google.spec.ts"],
  runner: "local",
  bail: 0,
  waitforTimeout: 30000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 1,
  framework: "jasmine",
  logLevel: "warn",
  reporters: ["spec"],
  maxInstances: 1,
  specFileRetries: 0,
  services: ["chromedriver"],
  capabilities: [
    {
      browserName: "chrome",
      "goog:chromeOptions": {
        excludeSwitches: ["enable-automation"],
        args: ["--window-size=1920,1080", "--disable-infobars"],
      },
    },
  ],
  jasmineOpts: {
    defaultTimeoutInterval: 90 * 1000,
    expectationResultHandler: function (passed, assertion) {
      // do something
    },
  },
};
