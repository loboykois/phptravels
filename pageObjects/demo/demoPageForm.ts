import { Locator, Page } from "@playwright/test";
import { FormDataDemo } from "./demoPage.model";

export class DemoPageForm {
  private readonly form: Locator;

  public constructor(private readonly page: Page) {
    this.form = page.locator(".demo_form");
  }

  public async getTitle(): Promise<void> {
    await this.form.locator("h2.text-start").innerText();
  }

  public async fillFirstName(firstName: string): Promise<void> {
    this.form.getByLabel("First Name").fill(firstName);
  }

  public async fillLastName(lastName: string): Promise<void> {
    this.form.getByLabel("Last Name").fill(lastName);
  }

  public async fillBusinessName(businessName: string): Promise<void> {
    this.form.getByLabel("Business Name").fill(businessName);
  }

  public async fillEmail(email: string): Promise<void> {
    this.form.getByLabel("Email").fill(email);
  }

  public async fullFillForm(formData: FormDataDemo): Promise<void> {
    await this.fillFirstName(formData.firstName);
    await this.fillLastName(formData.lastName);
    await this.fillBusinessName(formData.businessName);
    await this.fillEmail(formData.email);
  }

  public async submit(): Promise<void> {
    this.form.getByRole("button", { name: "Submit" }).click();
  }
}
