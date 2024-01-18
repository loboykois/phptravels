import { FrameLocator, Locator, Page } from "@playwright/test";

// interface FormDetails {
//   readonly name: string;
//   readonly email: string;
// }

export class PricingPageForm {
  private readonly form: FrameLocator;
  public readonly companyNameField: Locator;

  public constructor(private readonly page: Page) {
    this.form = page.frameLocator('iframe[title="Form 0"]');
    this.companyNameField = this.form.getByLabel("Company name*");
  }

  // public async fillCompanyName(value: string): Promise<void> {
  //   await this.form.getByLabel("Company name*").click();
  //   await this.form.getByLabel("Company name*").fill(value);
  // }

  // public async fillForm(formDetails: FormDetails) {
  //   await this.fillCompanyName(formDetails.name);

  //   await this.form.getByLabel("Company email*").click();
  //   await this.form.getByLabel("Company email*").fill(formDetails.email);
  // }

  // TODO: how to group methods in object? for example group methods for form and methods for review section

  public async fillCompanyName(value: string): Promise<void> {
    await this.form.getByLabel("Company name*").click();
    await this.form.getByLabel("Company name*").fill(value);
  }

  // public async fillEmail(): Promise<void> {
  //   this.fillForm({
  //     name: "company",
  //     email: "email",
  //   });
  // }

  public async fillWhatsapp(): Promise<void> {}

  public async fillFirstName(): Promise<void> {}

  public async fillLastName(): Promise<void> {}

  public async selectBudget(): Promise<void> {}

  public async fillStartDate(): Promise<void> {}

  public async requirements(): Promise<void> {}

  public async submit(): Promise<void> {}
}
