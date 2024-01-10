import { Page } from "@playwright/test";

export class Newsletter {
  public constructor(private readonly page: Page) {
    this.page = page;
  }

  public async getTitle(): Promise<void> {
    await this.page.locator("h3.text-light").textContent();
  }

  public async getText(): Promise<void> {
    await this.page.locator("p.text-light").textContent();
  }

  public async fillEmail(email: string): Promise<void> {
    await this.page.locator(".newsletter_email").fill(email);
  }

  public async subscribe(): Promise<void> {
    this.page.getByRole("button", { name: "Subscribe" }).click();
  }
}
