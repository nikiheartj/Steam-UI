import { test } from "@playwright/test";
import { MainURL } from "./mainURL";

export class FriendsPage extends MainURL {
  constructor(page) {
    super(page);
    this.addFriendButton = page.getByRole("link", { name: "Add a Friend" });
    this.codeInput = page.getByRole("textbox", { name: "Enter a Friend Code" });
    this.friendName = (friendName) =>
      page.getByRole("heading", { name: `${friendName}` });
  }

  async gotoFriendsSection() {
    await test.step("Go to the friends section", async () => {
      await this.addFriendButton.click();
    });
  }

  async searchFriend(friendCode, friend) {
    await test.step(`Find ${friend} friend`, async () => {
      await this.codeInput.fill(friendCode);
    });
  }
}
