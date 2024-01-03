import { Page } from "@playwright/test";
import { BasePage } from "../basePage";

export class DemoPage extends BasePage {
  private path: string;

  public constructor(
    protected readonly page: Page,
    path: string = "demo",
  ) {
    super(page);
    this.path = path;
  }

  public async navigate(): Promise<void> {
    await this.page.goto(this.path);
  }

  // public async navigate(): Promise<void> {
  //   await this.page.goto(this.path);
  // }
}
