import { Locator, Page } from "@playwright/test";
import { Newsletter } from "./newsletter";
import { PricingAndAggregation } from "./pricingAndAggregation";

export class MainSection {
  private readonly content: Locator;
  private readonly pricingAndAggregation: PricingAndAggregation;
  private readonly newsletter: Newsletter;

  public constructor(private readonly page: Page) {
    this.content = page.locator(".transition-main");
    this.pricingAndAggregation = new PricingAndAggregation(page);
    this.newsletter = new Newsletter(page);
  }
}
