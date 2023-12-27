import { Page } from "@playwright/test";
import { Footer } from "./footer/footer";
import { Header } from "./header/header";

export abstract class BasePage {
  public readonly header: Header;
  public readonly footer: Footer;

  protected constructor(protected readonly page: Page) {
    this.page = page;
    this.header = new Header(page);
    this.footer = new Footer(page);
  }

  public async navigate(path: string): Promise<void> {
    await this.page.goto(path);
  }
}

// protected abstract get path(): string;

// public async navigate(): Promise<void> {
//   await this.page.goto(this.path);
// }
