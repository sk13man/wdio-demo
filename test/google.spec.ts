import { describe, it } from "mocha";
import homePage from "pages/home.page";

describe("Google suite demo", () => {
  it("open homepage and start search", () => {
    browser.url("https://www.google.com/");
    browser.pause();
    homePage.open();
  });
});
