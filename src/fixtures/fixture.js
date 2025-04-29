import { test as base, expect } from "allure-playwright";
import { Steam } from "../page-object/steam";
import { CREDENTIAL } from "../setup/index.js";

export const test = base.extend({
  openMaiPage: async ({ page, baseURL }, use) => {
    const steam = new Steam(page);

    await steam.navbar.openMainPage(baseURL);

    await use(steam);
  },
  loginUser: async ({ page, baseURL }, use) => {
    const steam = new Steam(page);

    await steam.navbar.openMainPage(baseURL);
    await steam.navbar.gotoLoginPage();
    await steam.loginPage.loginUser(CREDENTIAL.name, CREDENTIAL.password);
    await steam.navbar.gotoAccountPage();

    await expect(steam.accountPage.accountName).toContainText(CREDENTIAL.name);
    await use(steam);
  },

  addGameToShoppingCart: async ({ page, baseURL }, use) => {
    const steam = new Steam(page);

    const game = "No More Room in Hell 2"; // Set a game you wish to search in the store

    await steam.navbar.openMainPage(baseURL);
    await steam.mainPage.searchGame(game);
    await steam.mainPage.selectGameInDropdown(game);
    await steam.gamePage.addGameToShoppingCart(game);
    await steam.gamePage.clickViewMyCartButton();

    await expect(steam.shoppingCart.gameName).toContainText(game);
    await use(steam);
  },
});
