import { expect } from "@playwright/test";
import { test } from "../pageObjects/fixtures/myFixtures";

test.describe("Themes page tests", () => {
  test("should scrolling card when mouse is hovered on it", async ({ themesPage }) => {
    await themesPage.navigate();

    const cards = await themesPage.getCards();
    const card = cards[0];

    const imageStyleTransform = await card.getImageStyle("transform");

    await card.hover();

    const imageStyleAfterHover = await card.getImageStyle("transform");

    expect(imageStyleTransform).not.toEqual(imageStyleAfterHover);
  });
});
