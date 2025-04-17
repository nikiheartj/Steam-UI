import { test } from "@playwright/test";
import { MainURL } from "./mainURL";

export class GamePage extends MainURL {
  constructor(page) {
    super(page);
    this.addToCartButton = page.getByRole("link", { name: "Add to Cart" });
    this.viewMyCartButton = page.getByRole("button", { name: "View My Cart" });
    this.cartButton = page.getByRole("link", { name: "Cart (1)" });
  }

  async clickCartButton() {
    await test.step("Click the Cart button", async () => {
      await this.cartButton.click();
    });
  }

  async addGameToShoppingCart(game) {
    await test.step(`Click the Add to Cart button on the ${game}`, async () => {
      await this.addToCartButton.click();
    });
  }

  async clickViewMyCartButton() {
    await test.step("Click the View My Cart button in the shopping modal", async () => {
      await this.viewMyCartButton.click();
    });
  }
}
