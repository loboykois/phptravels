import { Page } from "@playwright/test";
import { BasePage } from "../basePage";
import { DemoPageForm } from "./demoPageForm";

export class DemoPage extends BasePage {
  private readonly path: string;
  public form: DemoPageForm;

  public constructor(
    protected readonly page: Page,
    path: string = "demo",
  ) {
    super(page);
    this.path = path;
    this.form = new DemoPageForm(page);
  }

  public async navigate(): Promise<void> {
    await this.page.goto(this.path);
  }
}
