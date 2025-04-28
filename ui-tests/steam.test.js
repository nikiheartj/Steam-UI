import { expect } from "@playwright/test";
import { test } from "../src/fixtures/index";
import { UserBuilder } from "../src/helpers/index";
import { Steam } from "../src/page-object/steam.js";
import { CREDENTIAL, FRIEND_CODE } from "../src/setup/index.js";

test("Login to account", async ({ page, baseURL }) => {
  const steam = new Steam(page);

  await steam.navbar.openMainPage(baseURL);
  await steam.navbar.gotoLoginPage();
  await steam.loginPage.loginUser(CREDENTIAL.name, CREDENTIAL.password);
  await steam.navbar.gotoAccountPage();

  await test.step("Expected Result: User is logged in", async () => {
    await expect(steam.accountPage.accountName).toContainText(CREDENTIAL.name);
  });
});

test("Update profile information on the profile page", async ({
  page,
  loginUser,
}) => {
  const steam = new Steam(page);
  const userBuilder = new UserBuilder()
    .addProfileName()
    .addRealName()
    .addSummary()
    .generator();

  await steam.navbar.gotoProfilePage();
  await steam.profilePage.gotoEditProfilePage();
  await steam.editProfilePage.updateProfileData(
    userBuilder.ProfileName,
    userBuilder.RealName,
    userBuilder.Summary
  );

  await test.step(`Expected Result: Profile name ${userBuilder.ProfileName} is updated`, async () => {
    await expect(steam.editProfilePage.profileNameInputField).toHaveValue(
      userBuilder.ProfileName
    );
  });
  await test.step(`Expected Result: Real name ${userBuilder.RealName} is updated`, async () => {
    await expect(steam.editProfilePage.realNameInputField).toHaveValue(
      userBuilder.RealName
    );
  });
  await test.step(`Expected Result: Summary ${userBuilder.Summary} is updated`, async () => {
    await expect(steam.editProfilePage.summaryTextArea).toHaveValue(
      userBuilder.Summary
    );
  });
});

test("Change a language", async ({ page, baseURL }) => {
  const steam = new Steam(page);
  const language = "Français (French)"; // You can set the language as a value that relevant to steam

  await steam.navbar.openMainPage(baseURL);
  await steam.navbar.openLanguageDropdown();
  await steam.navbar.selectLanguage(language);
  await steam.navbar.openLanguageDropdown();

  await test.step(`Expected Result: ${language} language is applied to the ${baseURL}`, async () => {
    await expect(page.locator("#language_dropdown")).not.toContainText(
      language
    );
  });
});

test("Select a special game category", async ({ page, baseURL }) => {
  const steam = new Steam(page);
  const category = "Action"; // You can set any steam category you want as a value

  await steam.navbar.openMainPage(baseURL);
  await steam.mainPage.hoverCategoriesMenu();
  await steam.mainPage.selectCategory(category);

  await test.step(`Expected Result: ${category} category is opened`, async () => {
    await expect(steam.mainPage.titleCategory).toContainText(category);
  });
});

test("Search a game via search bar", async ({ page, baseURL }) => {
  const steam = new Steam(page);
  const game = "No More Room in Hell 2"; // Set a game you wish to search in the store

  await steam.navbar.openMainPage(baseURL);
  await steam.mainPage.searchGame(game);

  await test.step(`Expected Result: ${game} is found`, async () => {
    await expect(steam.mainPage.gameInSearchList(game)).toContainText(game);
  });
});

test("Add a game to the shopping cart", async ({ baseURL, page }) => {
  const steam = new Steam(page);
  const game = "No More Room in Hell 2"; // Set a game you wish to search in the store

  await steam.navbar.openMainPage(baseURL);
  await steam.mainPage.searchGame(game);
  await steam.mainPage.selectGameInDropdown(game);
  await steam.gamePage.addGameToShoppingCart(game);
  await steam.gamePage.clickViewMyCartButton();

  await test.step(`Expected Result: ${game} is added to the shopping cart`, async () => {
    await expect(steam.shoppingCart.gameName).toContainText(game);
  });
});

test("Remove a game from the shopping cart", async ({
  page,
  addGameToShoppingCart,
}) => {
  const steam = new Steam(page);

  await steam.shoppingCart.clearShoppingCart();

  await test.step("Expected Result: Shopping Cart is empty on the Shopping Cart page", async () => {
    await expect(steam.shoppingCart.emptyCart).toContainText(
      "Your cart is empty."
    );
  });
});

test("Search for a friend using a code", async ({ page, loginUser }) => {
  const steam = new Steam(page);
  const FRIEND_NAME = "Krayvan"; // Set a friend name as a value you want to find in steam

  await steam.navbar.gotoFriendsPage();
  await steam.friendsPage.gotoFriendsSection();
  await steam.friendsPage.searchFriend(FRIEND_CODE, FRIEND_NAME);

  await test.step(`Expected Result: ${FRIEND_NAME} is found successfully`, async () => {
    await expect(steam.friendsPage.friendName(FRIEND_NAME)).toContainText(
      FRIEND_NAME
    );
  });
});
