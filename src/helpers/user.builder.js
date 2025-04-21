import { faker } from "@faker-js/faker";

export class UserBuilder {
  addProfileName() {
    this.userProfileName = faker.person.firstName();
    return this;
  }

  addRealName() {
    this.userRealName = faker.person.fullName();
    return this;
  }

  addUrl() {
    this.userUrl = faker.person.fullName();
    return this;
  }

  addSummary() {
    this.userSummary = faker.lorem.text();
    return this;
  }

  generator() {
    return {
      ProfileName: this.userProfileName,
      RealName: this.userRealName,
      Summary: this.userSummary,
    };
  }
}
