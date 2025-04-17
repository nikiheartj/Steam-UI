import { MainURL } from "./mainURL";
import { test } from "@playwright/test";

export class MainPage extends MainURL {
  constructor(page) {
    super(page);
    this.selectGameFromSearchList = (game) =>
      page.getByText(`${game}`, { exact: true });
    this.searchInput = page.getByRole("searchbox", { name: "search" });
    this.categoryButton = (category) =>
      page.getByRole("link", { name: `${category}`, exact: true }).first();
    this.searchButton = page
      .getByRole("link", { name: "Search Steam" })
      .locator("img");
    this.categoriesMenu = page.getByText("Cat/egories");
    this.categoriesMenu = page.locator("id=genre_tab");
    this.titleCategory = page.locator("#SaleSection_56339");
    this.cartButton = page.getByRole("link", { name: "Cart" });
  }

  async selectGameInDropdown(game) {
    await test.step(`Select game in the search dropdown menu`, async () => {
      await this.selectGameFromSearchList(game).click();
    });
  }

  async searchGame(game) {
    await test.step(`Find a game via the search bar`, async () => {
      await this.searchInput.type(game);
    });
  }

  async hoverCategoriesMenu() {
    await test.step("Hover over categories menu", async () => {
      await this.categoriesMenu.hover();
    });
  }

  async selectCategory(category = "Action") {
    await test.step("Select game category", async () => {
      await this.categoryButton(category).click();
    });
  }

  async goToShoppingCard() {
    await test.step("Go to Shopping Cart page", async () => {
      await this.cartButton.click();
    });
  }
}
