import { Page } from "@playwright/test";
import { Footer } from "./footer/footer";
import { Growing } from "./growing";
import { Headline } from "./headLine";
import { Header } from "./header/header";
import { Newsletter } from "./newsletter";
import { PricingAggregation } from "./pricingAggregation";

export abstract class BasePage {
  public readonly header: Header;
  public readonly headline: Headline;
  public readonly pricingAggregation: PricingAggregation;
  public readonly growing: Growing;
  public readonly newsletter: Newsletter;
  public readonly footer: Footer;

  protected constructor(protected readonly page: Page) {
    this.page = page;
    this.header = new Header(page);
    this.headline = new Headline(page);
    this.pricingAggregation = new PricingAggregation(page);
    this.growing = new Growing(page);
    this.newsletter = new Newsletter(page);
    this.footer = new Footer(page);
  }

  public async navigate(path: string): Promise<void> {
    await this.page.goto(path);
  }
}
