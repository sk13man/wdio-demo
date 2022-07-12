import type { Options } from "@wdio/types";

export const config: Options.Testrunner = {
  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      transpileOnly: true,
      project: "test/tsconfig.json",
    },
  },
  specs: ["./test/specs/**/*.ts"],
  maxInstances: 1,
  capabilities: [
    {
      maxInstances: 5,
      browserName: "chrome",
      acceptInsecureCerts: true,
    },
  ],
  logLevel: "info",

  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ["chromedriver"],
  framework: "jasmine",
  reporters: ["spec"],

  jasmineOpts: {
    // Jasmine default timeout
    defaultTimeoutInterval: 60000,
    expectationResultHandler: function (passed, assertion) {
      if (!passed) {
        console.log("Test has failed with result = >  " + assertion);
      }
      // do something
    },
  },
};
