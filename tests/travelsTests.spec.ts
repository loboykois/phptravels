import { expect } from "@playwright/test";
import { test } from "../pageObjects/fixtures/myFixtures";

test.describe("Travels page tests", () => {
  test.beforeEach(async ({ travelsPage }) => {
    await travelsPage.navigate();
  });
  test.describe("should contain supplier card", () => {
    test("logo when Travels page is loaded", async ({ travelsPage }) => {
      const suppliersCards = await travelsPage.getSuppliersCards();
      const card = suppliersCards[1];

      await expect(await card.getLogo()).toBeVisible();
    });

    test("title when Travels page is loaded", async ({ travelsPage }) => {
      const suppliersCards = await travelsPage.getSuppliersCards();
      const card = suppliersCards[1];

      await expect(await card.getTitle()).toBeVisible();
    });

    test("description when Travels page is loaded", async ({ travelsPage }) => {
      const suppliersCards = await travelsPage.getSuppliersCards();
      const card = suppliersCards[1];

      await expect(await card.getDescription()).toBeVisible();
    });
  });

  test("should open new tab when user is clicked on supplies card", async ({ page, travelsPage }) => {
    const suppliesCards = await travelsPage.getSuppliersCards();
    const card = suppliesCards[1];

    const newSupplier = page.waitForEvent("popup");
    await card.showSupplier();
    const supplierPage = await newSupplier;
    await supplierPage.waitForLoadState("load");

    await expect(supplierPage).toHaveURL("about:blank");
  });

  test("last supplier card should contain only text when user has navigated on Travels page", async ({ travelsPage }) => {
    const supplierCards = await travelsPage.getSuppliersCards();
    const lastCard = supplierCards.at(-1);

    // TODO: ask about why lastCard here is optional?; how to check is card disabled
    expect(await lastCard?.getDescriptionText()).toEqual(expect.stringContaining("And Much More..."));
  });
});
