import { Page } from "@playwright/test";

export class Growing {
  public constructor(protected readonly page: Page) {
    this.page = page;
  }

  public async getTitle(): Promise<void> {}

  public async getCards(): Promise<void> {}
}
