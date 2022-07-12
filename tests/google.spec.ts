import googlePage from "../pages/google.page";

describe("Google suite", () => {
  it("can open homepage and perform search", () => {
    googlePage.open();
    googlePage.search("tesla");
    expect(googlePage.resultsNum()).toBeGreaterThan(2);
    googlePage.clickFirst();
  });
});
