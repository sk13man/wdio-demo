import logger from "@wdio/logger";

export default class BasePage {
  log = logger("base-page-logger");

  open(path: string) {
    this.log.warn(`Open site "${path}"`);
    browser.url(path);
  }
}
