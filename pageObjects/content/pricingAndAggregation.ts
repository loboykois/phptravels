import { Locator, Page } from "@playwright/test";

export class PricingAndAggregation {
  private readonly title: Locator;
  private readonly text: Locator;
  private readonly image: Locator;

  public constructor(private readonly page: Page) {
    this.title = page.locator("h3.mt-5");
    this.text = page.locator("p.mb-5");
    this.image = page.locator(".hero p-5 > img");
  }
}
