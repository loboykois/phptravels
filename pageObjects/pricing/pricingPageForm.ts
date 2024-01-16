import { FrameLocator, Locator, Page } from "@playwright/test";

export class PricingPageForm {
  private readonly form: FrameLocator;
  public readonly companyNameField: Locator;

  public constructor(private readonly page: Page) {
    this.form = page.frameLocator('iframe[title="Form 0"]');
    this.companyNameField = this.form.getByLabel("Company name*");
  }

  // TODO: how to group methods in object? for example group methods for form and methods for review section

  public async fillCompanyName(value: string): Promise<void> {
    await this.form.getByLabel("Company name*").click();
    await this.form.getByLabel("Company name*").fill(value);
  }

  public async fillEmail(): Promise<void> {}

  public async fillWhatsapp(): Promise<void> {}

  public async fillFirstName(): Promise<void> {}

  public async fillLastName(): Promise<void> {}

  public async selectBudget(): Promise<void> {}

  public async fillStartDate(): Promise<void> {}

  public async requirements(): Promise<void> {}

  public async submit(): Promise<void> {}
}
