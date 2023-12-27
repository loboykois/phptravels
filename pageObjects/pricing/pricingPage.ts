import { Page } from "@playwright/test";
import { BasePage } from "../basePage";
import { PricingCardsSection } from "./pricingCardsSection";

export class PricingPage extends BasePage {
  private path: string;

  public constructor(
    protected readonly page: Page,
    path: string = "pricing",
  ) {
    super(page);
    this.path = path;
  }

  public async navigate(): Promise<void> {
    await this.page.goto(this.path);
  }

  public async getPricingCards(): Promise<PricingCardsSection[]> {
    const cards = await this.page.locator(".princing-section > .container > .row > div.col-12").all();

    return cards.map((card) => new PricingCardsSection(card));
  }
}

// protected get path(): string {
//   return "pricing";
// }
