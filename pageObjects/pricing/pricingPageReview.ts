import { Locator, Page } from "@playwright/test";

export class PricingPageReview {
  private readonly formReview: Locator;

  public constructor(private readonly page: Page) {
    this.formReview = page.locator("div.updated-contact-reviews");
  }
}
