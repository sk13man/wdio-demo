import BasePage from "./base.page";

class Google extends BasePage {
  open() {
    super.open("https://www.google.com/");
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
  private get searchResultsContainer() {
    return $$("[data-sokoban-container]");
  }
  private get searchInput() {
    return $('[title="Search"]');
  }
}

export default new Google();
