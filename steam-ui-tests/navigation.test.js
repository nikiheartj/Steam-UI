import { expect } from "@playwright/test";
import { test } from "../src/fixtures/index";

test("Select a special game category", async ({ steam }) => {
  const category = "Action"; // You can set any steam category you want as a value

  await steam.mainPage.hoverCategoriesMenu();
  await steam.mainPage.selectCategory(category);

  await test.step(`Expected Result: ${category} category is opened`, async () => {
    await expect(steam.mainPage.titleCategory).toContainText(category);
  });
});

test("Search a game via search bar", async ({ steam }) => {
  const game = "No More Room in Hell 2"; // Set a game you wish to search in the store

  await steam.mainPage.searchGame(game);

  await test.step(`Expected Result: ${game} is found`, async () => {
    await expect(steam.mainPage.gameInSearchList(game)).toContainText(game);
  });
});
