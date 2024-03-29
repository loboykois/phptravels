import { test as base } from "@playwright/test";
import { DemoPage } from "../demo/demoPage";
import { PricingPage } from "../pricing/pricingPage";
import { ThemesPage } from "../themes/themesPage";
import { TravelsPage } from "../travels/travelsPage";

type MyPages = {
  travelsPage: TravelsPage;
  pricingPage: PricingPage;
  demoPage: DemoPage;
  themesPage: ThemesPage;
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
  themesPage: async ({ page }, use) => {
    const themesPage = new ThemesPage(page);
    await use(themesPage);
  },
  travelsPage: async ({ page }, use) => {
    const travelsPage = new TravelsPage(page);
    await use(travelsPage);
  },
});
