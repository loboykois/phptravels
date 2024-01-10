import { Locator, Page } from "@playwright/test";
import { BasePage } from "../basePage";
import { PricingCardsSection } from "./pricingCardsSection";

// TODO:
// -add discount & advantages section; implement method to work with section title and advantages items
// -add faq section; implement method to work with section title and question/answers items

export class PricingPage extends BasePage {
  private readonly path: string;
  private readonly discountInfo: Locator;

  public constructor(
    protected readonly page: Page,
    path: string = "pricing",
    faqContainer: Locator,
  ) {
    super(page);
    this.path = path;
    this.discountInfo = faqContainer;
  }

  public async navigate(): Promise<void> {
    await this.page.goto(this.path);
  }

  public async getPricingCards(): Promise<PricingCardsSection[]> {
    const cards = await this.page.locator(".princing-section > .container > .row > div.col-12").all();

    return cards.map((card) => new PricingCardsSection(card));
  }

  public async getDiscountInfoContainer(): Promise<object> {
    return {
      svg: this.discountInfo.locator(".container .mb-5 > svg").first(),
      title: this.discountInfo.locator(".container .mb-5 > h3").first(),
      description: this.discountInfo.locator(".container .mb-5 > p").first(),
    };
  }

  // TODO:
  // -finish method with advantages cards; find the way to select element without any classes (check jquery)

  // public async getAdvantages(): Promise<AdvantagesCards[]> {
  // awat this.page.locator()
  // }
}
