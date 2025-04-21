import { MainURL } from "./mainURL";
import { test } from "@playwright/test";

export class Navbar extends MainURL {
  constructor(page) {
    super(page);
    this.languageButton = (language) =>
      page.getByRole("link", { name: `${language}` });
    this.header = page.locator("#global_header");
    this.loginButton = page.getByRole("link", { name: "login" });
    this.languageDropdown = page.locator("#language_pulldown");
    this.profileDropdown = page.locator("#account_pulldown");
    this.profileButton = page.getByRole("link", { name: "View your profile" });
    this.profileNameMenu = (profileName) =>
      page.getByRole("link", { name: `${profileName}` });
    this.friendsButton = page.getByRole("link", { name: "Friends" });
    this.profileName = page.getByRole("link", {
      name: "Account details: ",
    });
    this.profileNameMenu = page
      .locator(
        '[aria-label="Global Menu"] a[href="https://steamcommunity.com/my/"]'
      )
      .first();
  }

  async gotoFriendsPage() {
    await test.step("Go to the friends page", async () => {
      await this.profileNameMenu.hover();
      await this.friendsButton.click();
    });
  }

  async gotoLoginPage() {
    await test.step("Go to the login page", async () => {
      await this.loginButton.click();
    });
  }

  async selectLanguage(language) {
    await test.step(`Change language to ${language}`, async () => {
      await this.languageButton(language).click();
      await this.page.waitForTimeout(500); // Wait for applying language to the page
    });
  }

  async openProfileDropdown() {
    await test.step("Open profile dropdown menu", async () => {
      await this.profileDropdown.click();
    });
  }

  async gotoProfilePage() {
    await test.step("Go to Profile page", async () => {
      await this.profileButton.click();
    });
  }

  async gotoAccountPage() {
    await test.step("Go to Account page", async () => {
      await this.profileDropdown.click();
      await this.profileName.click();
    });
  }

  async openLanguageDropdown() {
    await test.step("Open language dropdown menu", async () => {
      await this.languageDropdown.click();
    });
  }
}
