import { test } from "@playwright/test";

export class MainURL {
  constructor(page) {
    this.page = page;
  }

  async openMainPage(baseURL) {
    await test.step(`Open ${baseURL}`, async () => {
      await this.page.goto("/");
    });
  }
}
