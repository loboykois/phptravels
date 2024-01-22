import { Locator, Page } from "@playwright/test";
import { BasePage } from "../basePage";
import { IntegrationsCard } from "./integrationsCard";

export class TravelsPage extends BasePage {
  private readonly path: string;
  private readonly integrations: Locator;

  public constructor(
    protected readonly page: Page,
    path: string = "",
  ) {
    super(page);
    this.path = path;
    this.integrations = page.locator(".integrations");
  }

  public async navigate(): Promise<void> {
    await this.page.goto(this.path);
  }

  public async getSuppliersCards(): Promise<IntegrationsCard[]> {
    // const cards = await this.integrations.getByRole("link").all();
    const cards = await this.integrations.locator(".col-md-6.col-12.col-lg-4").all();

    return cards.map((card) => new IntegrationsCard(card));
  }
}
