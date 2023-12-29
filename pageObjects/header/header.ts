import { Locator, Page } from "@playwright/test";
import { Authorization } from "./authorization";
import { Navigation } from "./navigation";

export class Header {
  public readonly logo: Locator;
  public readonly navigation: Navigation;
  public readonly authorization: Authorization;

  public constructor(private readonly page: Page) {
    this.logo = page.locator(".navbar-brand");
    this.navigation = new Navigation(page);
    this.authorization = new Authorization();
  }
}
