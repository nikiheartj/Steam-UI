import { expect } from "@playwright/test";
import { test } from "../src/fixtures/index";
import { Steam } from "../src/page-object/steam.js";

test("Select a special game category", async ({ page, openMaiPage }) => {
  const steam = new Steam(page);
  const category = "Action"; // You can set any steam category you want as a value

  await steam.mainPage.hoverCategoriesMenu();
  await steam.mainPage.selectCategory(category);

  await test.step(`Expected Result: ${category} category is opened`, async () => {
    await expect(steam.mainPage.titleCategory).toContainText(category);
  });
});