import { Page } from "@playwright/test";
import { Authorization } from "./authorization";
import { Navigation } from "./navigation";

export class Header {
  public readonly navigation: Navigation;
  public readonly authorization: Authorization;

  public constructor(private readonly page: Page) {
    this.navigation = new Navigation(page);
    this.authorization = new Authorization(page);
  }
}
