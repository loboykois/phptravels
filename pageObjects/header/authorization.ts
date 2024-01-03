import { Page } from "@playwright/test";

export class Authorization {
  public constructor(private readonly page: Page) {
    this.page = page;
  }
}
