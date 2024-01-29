import { Locator, Page } from "@playwright/test";
import { FormDataDemo, defineEquationOperator } from "./demoPage.model";

// TODO: add eslint rule with missing await

export class DemoPageForm {
  private readonly form: Locator;

  public constructor(private readonly page: Page) {
    this.form = page.locator(".demo_form");
  }

  public async getTitle(): Promise<void> {
    await this.form.locator("h2.text-start").innerText();
  }

  public async fillFirstName(firstName: string): Promise<void> {
    await this.form.locator("[name='first_name']").fill(firstName);
  }

  public async fillLastName(lastName: string): Promise<void> {
    await this.form.locator("[name='last_name']").fill(lastName);
  }

  public async fillBusinessName(businessName: string): Promise<void> {
    await this.form.locator("[name='business_name']").fill(businessName);
  }

  public async fillEmail(email: string): Promise<void> {
    await this.form.locator("[name='email']").fill(email);
  }

  public async fillCaptchaResult(result: number): Promise<void> {
    await this.form.getByPlaceholder("Result ?").fill(`${result}`);
  }

  public async fullFillForm(formData: FormDataDemo): Promise<void> {
    await this.fillFirstName(formData.firstName);
    await this.fillLastName(formData.lastName);
    await this.fillBusinessName(formData.businessName);
    await this.fillEmail(formData.email);
  }

  public async submit(): Promise<void> {
    await this.form.getByRole("button", { name: "Submit" }).click();
  }

  public async getCompletedMessage(): Promise<void> {
    await this.form.locator(".completed h2 strong").innerText();
  }

  // TODO: add sign in example inside function

  public async solveCaptcha(): Promise<void> {
    const numb1 = await this.form.locator("#numb1").innerText();
    const numb2 = await this.form.locator("#numb2").innerText();

    const equation = await this.form.locator("h4").innerText();
    const equationResult = defineEquationOperator(equation, Number(numb1), Number(numb2));

    // console.log(operator);
    // const result = Number(numb1) + Number(numb2);
    // await this.form.getByPlaceholder("Result ?").fill(`${result}`);
    await this.form.getByPlaceholder("Result ?").fill(`${equationResult}`);
  }
}
