import { Locator } from "@playwright/test";

export class ThemeCard {
  private readonly cardContainer: Locator;

  public constructor(cardContainer: Locator) {
    this.cardContainer = cardContainer;
  }

  public async hoverOnCard(): Promise<void> {
    await this.cardContainer.hover();
  }

  public async returnLocator(): Promise<Locator> {
    return this.cardContainer;
  }
}
