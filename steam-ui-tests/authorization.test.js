import { expect } from "@playwright/test";
import { test } from "../src/fixtures/index";
import { Steam } from "../src/page-object/steam.js";
import { CREDENTIAL } from "../src/setup/index.js";

test("Login to account", async ({ page, openMaiPage }) => {
  const steam = new Steam(page);

  await steam.navbar.gotoLoginPage();
  await steam.loginPage.loginUser(CREDENTIAL.name, CREDENTIAL.password);
  await steam.navbar.gotoAccountPage();

  await test.step("Expected Result: User is logged in", async () => {
    await expect(steam.accountPage.accountName).toContainText(CREDENTIAL.name);
  });
});
