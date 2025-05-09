import { expect } from "@playwright/test";
import { test } from "../src/fixtures/index";
import { UserBuilder } from "../src/helpers/index";
import { FRIEND_CODE } from "../src/setup/index.js";

test("Update profile information on the profile page", async ({
  loginUser,
}) => {
  const userBuilder = new UserBuilder()
    .addProfileName()
    .addRealName()
    .addSummary()
    .generator();

  await loginUser.navbar.gotoProfilePage();
  await loginUser.profilePage.gotoEditProfilePage();
  await loginUser.editProfilePage.updateProfileData(
    userBuilder.ProfileName,
    userBuilder.RealName,
    userBuilder.Summary
  );

  await test.step(`Expected Result: Profile name ${userBuilder.ProfileName} is updated`, async () => {
    await expect(loginUser.editProfilePage.profileNameInputField).toHaveValue(
      userBuilder.ProfileName
    );
  });
  await test.step(`Expected Result: Real name ${userBuilder.RealName} is updated`, async () => {
    await expect(loginUser.editProfilePage.realNameInputField).toHaveValue(
      userBuilder.RealName
    );
  });
  await test.step(`Expected Result: Summary ${userBuilder.Summary} is updated`, async () => {
    await expect(loginUser.editProfilePage.summaryTextArea).toHaveValue(
      userBuilder.Summary
    );
  });
});

test("Change a language", async ({ steam }) => {
  const language = "Français (French)"; // You can set the language as a value that relevant to steam

  await steam.navbar.openLanguageDropdown();
  await steam.navbar.selectLanguage(language);
  await steam.navbar.openLanguageDropdown();
  // page.locator("#language_dropdown"
  await test.step(`Expected Result: ${language} language is applied to the Steam`, async () => {
    await expect(steam.navbar.languageDropdown).not.toContainText(language);
  });
});

test("Add a game to the shopping cart", async ({ steam }) => {
  const game = "No More Room in Hell 2"; // Set a game you wish to search in the store

  await steam.mainPage.searchGame(game);
  await steam.mainPage.selectGameInDropdown(game);
  await steam.gamePage.addGameToShoppingCart(game);
  await steam.gamePage.clickViewMyCartButton();

  await test.step(`Expected Result: ${game} is added to the shopping cart`, async () => {
    await expect(steam.shoppingCart.gameName).toContainText(game);
  });
});

test("Remove a game from the shopping cart", async ({
  addGameToShoppingCart,
}) => {
  await addGameToShoppingCart.shoppingCart.clearShoppingCart();

  await test.step("Expected Result: Shopping Cart is empty on the Shopping Cart page", async () => {
    await expect(addGameToShoppingCart.shoppingCart.emptyCart).toContainText(
      "Your cart is empty."
    );
  });
});

test("Search for a friend using a code", async ({ loginUser }) => {
  const FRIEND_NAME = "Krayvan"; // Set a friend name as a value you want to find in steam

  await loginUser.navbar.gotoFriendsPage();
  await loginUser.friendsPage.gotoFriendsSection();
  await loginUser.friendsPage.searchFriend(FRIEND_CODE, FRIEND_NAME);

  await test.step(`Expected Result: ${FRIEND_NAME} is found successfully`, async () => {
    await expect(loginUser.friendsPage.friendName(FRIEND_NAME)).toContainText(
      FRIEND_NAME
    );
  });
});
