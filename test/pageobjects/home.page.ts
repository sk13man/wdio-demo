import BasePage from "./base.page";

class Home extends BasePage {
  open() {
    super.open("https://www.google.com/");
  }
}

export default new Home();
