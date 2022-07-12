import googlePage from "../pages/google.page";

describe("Google suite", () => {
  it("can open homepage and perform search", () => {
    googlePage.open();
    googlePage.search("SEARCH_VALUE");
    console.log("Results => " + googlePage.resultsNum());
    expect(googlePage.resultsNum()).toBeGreaterThan(5);
  });
});
