import { test as base } from "@playwright/test";
import { DemoPage } from "../demo/demoPage";
import { PricingPage } from "../pricing/pricingPage";

type MyPages = {
  pricingPage: PricingPage;
  demoPage: DemoPage;
};

export const test = base.extend<MyPages>({
  pricingPage: async ({ page }, use) => {
    const pricingPage = new PricingPage(page);
    await use(pricingPage);
  },
  demoPage: async ({ page }, use) => {
    const demoPage = new DemoPage(page);
    await use(demoPage);
  },
});
