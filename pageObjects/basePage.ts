import { Page } from "@playwright/test";
import { MainSection } from "./content/content";
import { Footer } from "./footer/footer";
import { Header } from "./header/header";

export class BasePage {
  private readonly header: Header;
  private readonly main: MainSection;
  private readonly footer: Footer;

  public constructor(private readonly page: Page) {
    this.page = page;
    this.header = new Header(page);
    this.main = new MainSection(page);
    this.footer = new Footer(page);
  }

  public async navigate(): Promise<void> {
    await this.page.goto("/");
  }
}
