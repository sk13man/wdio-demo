/* eslint-disable @typescript-eslint/no-explicit-any */
declare namespace WebdriverIO {
  interface Browser {
    customConfig: () => any;
  }
}

declare module "@wdio/logger";
