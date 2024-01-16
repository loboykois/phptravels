import { Page } from "@playwright/test";
import { BasePage } from "../basePage";
import { PricingPageForm } from "./pricingPageForm";
import { PricingPageReview } from "./pricingPageReview";

// TODO:
// -add discount & advantages section; implement method to work with section title and advantages items
// -add faq section; implement method to work with section title and question/answers items

export class PricingPage extends BasePage {
  private readonly path: string;
  public readonly form: PricingPageForm;
  public readonly review: PricingPageReview;

  public constructor(
    protected readonly page: Page,
    path: string = "pricing",
  ) {
    super(page);
    this.path = path;
    this.form = new PricingPageForm(page);
    this.review = new PricingPageReview(page);
  }

  public async navigate(): Promise<void> {
    await this.page.goto(this.path);
  }
}
