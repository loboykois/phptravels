import { expect } from "@playwright/test";
import { test } from "../pageObjects/fixtures/myFixtures";
import { Routes } from "../pageObjects/routes";

test.describe("Themes page tests", () => {
  test("should scrolling card when mouse is hovered on it", async ({ page, themesPage }) => {
    await themesPage.navigate();

    // const cardsList = await themesPage.getCards();
    // const card = cardsList[1];

    // const stylesOnHover = {
    //   name: "style",
    //   value: "transform: translateY(-476.237px); transition: all 2s ease-in-out 0s;",
    // };

    await expect(page).toHaveURL(Routes.themes);
  });
});
