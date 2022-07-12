import type { Options } from "@wdio/types";
/* eslint-disable @typescript-eslint/no-unused-vars */
const getLogger = require("@wdio/logger").default;
const log = getLogger("hooks");

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
        log.error("Test has failed with result = >  " + assertion);
      }
      // do something
    },
  },
};
