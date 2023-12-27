import { Locator } from "@playwright/test";

export class CardPropertyList {
  private readonly property: Locator;

  public constructor(property: Locator) {
    this.property = property;
  }

  public async getPropertySVG(): Promise<void> {
    this.property.locator(`${this.property} > svg`);
  }

  public async getPropertyText(): Promise<void> {
    await this.property.locator(`${this.property}`).textContent();
  }
}
