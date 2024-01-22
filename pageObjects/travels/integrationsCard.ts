import { Locator } from "@playwright/test";

export class IntegrationsCard {
  private readonly cardContainer: Locator;
  public constructor(cardContainer: Locator) {
    this.cardContainer = cardContainer;
  }

  public async getLogo(): Promise<Locator> {
    return this.cardContainer.getByRole("img");
  }

  // public async getTitle(): Promise<string> {
  //   return this.cardContainer.locator("h4").innerText();
  // }

  public async getTitle(): Promise<Locator> {
    return this.cardContainer.locator("h4");
  }

  public async getDescriptionText(): Promise<string> {
    return this.cardContainer.locator("p").innerText();
  }

  public async getDescription(): Promise<Locator> {
    return this.cardContainer.locator("p");
  }

  public async showSupplier(): Promise<void> {
    await this.cardContainer.click();
  }
}
