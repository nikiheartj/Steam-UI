import { MainURL } from "./mainURL";
import { test } from "@playwright/test";

export class EditProfilePage extends MainURL {
  constructor(page) {
    super(page);
    this.profileNameInputField = page.getByRole("textbox", {
      name: "Profile Name",
    });
    this.realNameInputField = page.getByRole("textbox", { name: "Real Name" });
    this.urlInputField = page.getByRole("textbox", {
      name: "Custom URL Your profile",
    });
    this.summaryTextArea = page.locator('textarea[name="summary"]');
    this.saveButton = page.getByRole("button", { name: "Save" });
  }

  async updateProfileData(profileName, realName, summary) {
    await test.step("Update Profile Data [profile name, real name, summary]", async () => {
      await this.profileNameInputField.click();
      await this.profileNameInputField.fill(profileName);
      await this.realNameInputField.click();
      await this.realNameInputField.fill(realName);
      await this.summaryTextArea.click();
      await this.summaryTextArea.fill(summary);
      await this.saveButton.click();
    });
  }
}
