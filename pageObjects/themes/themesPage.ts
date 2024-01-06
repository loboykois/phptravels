import { Page } from "@playwright/test";
import { BasePage } from "../basePage";
import { ThemeCard } from "./themesCardsSection";

export class ThemesPage extends BasePage {
  private path: string;

  public constructor(
    protected readonly page: Page,
    path: string = "themes",
  ) {
    super(page);
    this.path = path;
  }

  public async navigate(): Promise<void> {
    await this.page.goto(this.path);
  }

  public async getCards(): Promise<ThemeCard[]> {
    const cards = await this.page.locator(".col-md-4 > #main-wrapper").all();

    return cards.map((card) => new ThemeCard(card));
  }
}
