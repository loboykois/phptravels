import { test as base } from "@playwright/test";
import { PricingPage } from "../pricing/pricingPage";

type MyPages = {
  pricingPage: PricingPage;
};

export const test = base.extend<MyPages>({
  pricingPage: async ({ page }, use) => {
    const pricingPage = new PricingPage(page);
    await use(pricingPage);
  },
});
