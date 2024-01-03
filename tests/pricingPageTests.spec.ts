import { expect } from "@playwright/test";
import { describe } from "node:test";
import { test } from "../pageObjects/fixtures/myFixtures";
import { NavigationItems } from "../pageObjects/header/header.model";

describe("Pricing page tests", () => {
  test("should navigate on pricing page when pricing nav-item is selected", async ({ page, demoPage }) => {
    await demoPage.navigate();
    await demoPage.header.navigation.selectTab(NavigationItems.pricing);

    await expect(page).toHaveURL("/pricing");
  });
});
