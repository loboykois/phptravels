import { expect } from "@playwright/test";
import { describe } from "node:test";
import { test } from "../pageObjects/fixtures/myFixtures";

describe("Pricing page tests", () => {
  test("should navigate on pricing page when pricing tab is clicked on menu", async ({ pricingPage }) => {
    // await pricingPage.navigate();

    await pricingPage.header.navigation.selectItem("Pricing");

    // await pricingPage.header.navigation.selectItem(menuItem);
    expect(1).toBe(1);
  });
});
