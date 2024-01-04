import { expect } from "@playwright/test";
import { describe } from "node:test";
import { test } from "../pageObjects/fixtures/myFixtures";
import { CompanyDropdown, NavigationItems, ProductDropdown } from "../pageObjects/header/header.model";
import { Routes } from "../pageObjects/routes";

describe("Navigation tests", () => {
  test.describe("should navigate on", () => {
    test("pricing page when Pricing nav-item is selected", async ({ page, demoPage }) => {
      await demoPage.navigate();
      await demoPage.header.navigation.selectTab(NavigationItems.pricing);

      await expect(page).toHaveURL(Routes.pricing);
    });

    test("customization page when Customization nav-item is selected in Product dropdown", async ({ page, demoPage }) => {
      await demoPage.navigate();

      await demoPage.header.navigation.selectTab(NavigationItems.product);
      await demoPage.header.navigation.selectTab(ProductDropdown.customization);

      await expect(page).toHaveURL(Routes.customizations);
    });

    test("new page when Blogs nav-item is selected in Company dropdown", async ({ context, demoPage }) => {
      await demoPage.navigate();

      await demoPage.header.navigation.selectTab(NavigationItems.company);
      const newPage = context.waitForEvent("page");
      await demoPage.header.navigation.selectDropdownTab(CompanyDropdown.blogs);
      const blogPage = await newPage;
      await blogPage.waitForLoadState();

      await expect(blogPage).toHaveURL(Routes.blogs);
    });
  });
});
