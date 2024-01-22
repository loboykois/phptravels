import { expect } from "@playwright/test";
import { test } from "../pageObjects/fixtures/myFixtures";

test.describe("Themes page tests", () => {
  test("should scrolling card when mouse is hovered on it", async ({ themesPage }) => {
    await themesPage.navigate();

    const cards = await themesPage.getCards();
    const card = cards[0];

    const imageStyleBeforeHover = await card.getCssProperty("transform");
    await card.hover();
    const imageStyleAfterHover = await card.getCssProperty("transform");

    expect(imageStyleBeforeHover).not.toEqual(imageStyleAfterHover);
  });
});
