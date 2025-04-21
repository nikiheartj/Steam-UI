import { test } from "@playwright/test";
import { MainURL } from "./mainURL";

export class ShoppingCart extends MainURL {
  constructor(page) {
    super(page);
    this.emptyCart = page.getByText("Your cart is empty.");
    this.gameName = page.locator("#page_root");
    this.removeAllItemsButton = page.getByRole("button", {
      name: "Remove all items",
    });
  }

  async clearShoppingCart() {
    await test.step("Click the Remove All button on the Shopping Cart page", async () => {
      await this.removeAllItemsButton.click();
    });
  }
}
