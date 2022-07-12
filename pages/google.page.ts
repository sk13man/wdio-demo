import BasePage from "./base.page";

class Google extends BasePage {
  open() {
    super.open("https://www.bing.com/");
  }
  search(value: string) {
    this.searchInput.setValue("");
    this.searchInput.setValue(value);
    browser.keys("Enter");
    browser.waitUntil(() => this.resultsNum() > 3, {
      timeout: 5000,
      timeoutMsg: "No results were found on results page",
    });
  }
  resultsNum() {
    return this.searchResultsContainer.length;
  }
  clickFirst() {
    this.searchResultsContainer[0].$(".b_topTitle").click();
    browser.pause(3000);
  }
  private get searchResultsContainer() {
    return $$('[id="b_results"] .b_algo');
  }
  private get searchInput() {
    return $('[type="search"]');
  }
}

export default new Google();
