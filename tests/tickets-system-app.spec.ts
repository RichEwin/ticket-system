import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000/");
});

test("has title", async ({ page }) => {
  await expect(page).toHaveTitle("Ticket-System");
});

test("has link to Tickets", async ({ page }) => {
  await page.getByRole("link", { name: "Tickets" }).click();
  await expect(page.getByRole("link", { name: "Create" })).toBeVisible();
});
