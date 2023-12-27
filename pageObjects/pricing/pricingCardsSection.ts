import { Locator } from "@playwright/test";
import { CardPropertyList } from "./pricingCardPropertyList";

export class PricingCardsSection {
  private readonly cardContainer: Locator;

  public constructor(cardContainer: Locator) {
    this.cardContainer = cardContainer;
  }

  public async getCardTitle(): Promise<Locator> {
    return this.cardContainer.locator(".pricing-package-name");
  }

  public async getCardPrice(): Promise<Locator> {
    return this.cardContainer.locator(".pricing-package-price");
  }

  public async subscribe(): Promise<void> {
    await this.cardContainer.locator(".sticky > a").click();
  }

  public async getCardPropertyList(): Promise<CardPropertyList[]> {
    const propertyList = await this.cardContainer.locator(".df .gap1 .aic .jcl .mb0").all();

    return propertyList.map((property) => new CardPropertyList(property));
  }
}
