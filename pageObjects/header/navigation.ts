import { Page } from "@playwright/test";

export class Navigation {
  public constructor(private readonly page: Page) {
    this.page = page;
  }

  public async selectItem(item: string): Promise<void> {
    await this.page
      .locator("#mynavbar")
      .getByRole("link", { name: `${item}` })
      .click();
    // await this.page.locator(`ul > li.nav-item > a:has-text('${item}')`).click();
  }
}
