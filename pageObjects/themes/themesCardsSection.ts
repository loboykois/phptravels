import { Locator } from "@playwright/test";

export class ThemeCard {
  private readonly cardContainer: Locator;

  public constructor(cardContainer: Locator) {
    this.cardContainer = cardContainer;
  }

  public async hover(): Promise<void> {
    await this.cardContainer.hover();
  }

  public async getImage(): Promise<void> {
    this.cardContainer.locator(".image");
  }

  public async getImageStyle(propertyName: string): Promise<string> {
    const element = this.cardContainer.locator(".image");

    const transformStyle = await element.evaluate((el, prop) => {
      return window.getComputedStyle(el).getPropertyValue(prop);
    }, propertyName);

    return transformStyle;
  }

  public async returnLocator(): Promise<Locator> {
    return this.cardContainer;
  }
}
