import { Locator, Page } from "@playwright/test";

export class Headline {
  private readonly headline: Locator;

  public constructor(private readonly page: Page) {
    this.page = page;
    this.headline = page.locator(".headline");
  }

  public async getTitle(): Promise<void> {
    await this.headline.locator("h1").textContent();
  }

  public async getText(): Promise<void> {
    await this.headline.locator("p").textContent();
  }
}
