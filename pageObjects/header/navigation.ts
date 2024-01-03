import { Locator, Page } from "@playwright/test";

export class Navigation {
  private readonly navbar: Locator;

  public constructor(private readonly page: Page) {
    this.page = page;
    this.navbar = page.locator(".navbar-nav");
  }

  public async selectTab(navItem: string): Promise<void> {
    await this.navbar.getByText(navItem).click();
  }
}
