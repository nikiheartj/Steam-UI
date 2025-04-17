import { LoginPage, AccountPage, Navbar, ProfilePage, MainPage, EditProfilePage, GamePage, ShoppingCart, FriendsPage } from "./index";

export class Steam {
  constructor(page) {
    this.page = page;
    this.navbar = new Navbar(page);
    this.loginPage = new LoginPage(page);
    this.accountPage = new AccountPage(page);
    this.profilePage = new ProfilePage(page);
    this.editProfilePage = new EditProfilePage(page);
    this.mainPage = new MainPage(page);
    this.gamePage = new GamePage(page);
    this.shoppingCart = new ShoppingCart(page);
    this.friendsPage = new FriendsPage(page);
  }
}
