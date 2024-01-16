import { expect } from "@playwright/test";
import { test } from "../pageObjects/fixtures/myFixtures";

test.describe("Pricing page tests", () => {
  test("should fill test text when user focus on Company name field", async ({ pricingPage }) => {
    await pricingPage.navigate();
    await pricingPage.form.fillCompanyName("test company");

    // TODO: replace data inside methods for values from fakeData object
    await expect(pricingPage.form.companyNameField).toHaveValue("test company");
  });
});
