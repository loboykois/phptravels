import { Locator, Page } from "@playwright/test";

export class Newsletter {
  private readonly newsletterEmail: Locator;
  private readonly newsInfo: Locator;

  public constructor(private readonly page: Page) {
    this.newsletterEmail = page.locator(".newsletter_email");
    this.newsInfo = page.locator(".hero travel-bg > col-md-6");
  }
}
