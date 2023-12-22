import { Locator, Page } from "@playwright/test";
import { Authorization } from "./authorization";
import { Navigation } from "./navigation";

export class Header {
  private readonly logo: Locator;
  private readonly navigation: Navigation;
  private readonly authorization: Authorization;

  public constructor(private readonly page: Page) {
    this.logo = page.locator(".navbar-brand");
    this.navigation = new Navigation();
    this.authorization = new Authorization();
  }
}
