import { MainURL } from "./mainURL";
import { test } from "@playwright/test";

export class AccountPage extends MainURL {
  constructor(page) {
    super(page);
    this.accountName = page.getByRole("heading");
  }
}
