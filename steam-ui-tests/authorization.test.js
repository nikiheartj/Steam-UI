import { expect } from "@playwright/test";
import { test } from "../src/fixtures/index";
import { CREDENTIAL } from "../src/setup/index.js";

test("Login to account", async ({ steam }) => {
  await steam.navbar.gotoLoginPage();
  await steam.loginPage.loginUser(CREDENTIAL.name, CREDENTIAL.password);
  await steam.navbar.gotoAccountPage();

  await test.step("Expected Result: User is logged in", async () => {
    await expect(steam.accountPage.accountName).toContainText(CREDENTIAL.name);
  });
});
