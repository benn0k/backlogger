import { test, expect } from "@playwright/test";

//Note — using playwright as a way to grok the library,
//but a tool like Jest would be a better option for API testing
test("Server is running with 'hello world", async ({ page }) => {
  await page.goto("http://localhost:3000");

  // Expect 'hello world' to be visable on the page
  await expect(page.getByText("hello world")).toBeVisible();
});

// "/" shows list of seeded games
//Typically I would seed specific data for a test so that we're testing with reproducible results

test("homepage shows all games in DB", async ({ page }) => {
  // load homepage
  await page.goto("http://localhost:5173/");
  //find all DOM instances that have data-testid="game-card"
  const gameCard = page.getByTestId("game-card");
  //Expect 10
  await expect(gameCard).toHaveCount(10);
  // Expect that first game card contains 'Mystic Manor'
  await expect(gameCard.first()).toContainText("Mystic Manor");
});

//Verify that Edit/Save properly shows/hides
test("edit/save button loads/dismisses component", async ({ page }) => {
  // Load homepage
  await page.goto("http://localhost:5173/");
  // check for first instance of EDIT, and click
  await page.getByRole("button", { name: "EDIT/>" }).first().click();
  // expect SAVE to be visible
  await expect(page.getByRole("button", { name: "SAVE/>" })).toBeVisible();
  // click SAVE
  await page.getByRole("button", { name: "SAVE/>" }).click();
  // expect first instance of edit is visible
  await expect(
    page.getByRole("button", { name: "EDIT/>" }).first(),
  ).toBeVisible();
});
