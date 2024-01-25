import { expect } from "@playwright/test";
import { test } from "../pageObjects/fixtures/myFixtures";

test.describe("Demo test", () => {
  test("should display success message when user filled form and solve capture", async ({ page, demoPage }) => {
    await demoPage.navigate();

    await demoPage.form.fillFirstName("test");
    await demoPage.form.fillLastName("test");
    await demoPage.form.fillBusinessName("test");
    await demoPage.form.fillEmail("test@gmail.com");
    await demoPage.form.solveCaptcha();
    await demoPage.form.submit();

    // const expectedText = await demoPage.form.getCompletedMessage();
    const expectedText = await page.locator(".completed h2").innerText();

    expect(expectedText.trim()).toBe("Thank you!");
  });
});
