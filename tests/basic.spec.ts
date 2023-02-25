import { test, expect } from "@playwright/test";

test.describe("basic flow", () => {
  test("it should have some content on index", async ({ page }) => {
    await page.goto("http://localhost:3000/");

    const li = await page.locator("section ul li");
    const count = await li.count();

    await expect(count).toBeGreaterThan(0);
  });

  test("it should have some content on about", async ({ page }) => {
    await page.goto("http://localhost:3000/");

    const li = await page.locator("section ul li");
    const count = await li.count();

    await expect(count).toBeGreaterThan(0);
  });

  test("it should navigate to and render the blog page", async ({ page }) => {
    await page.goto("http://localhost:3000/");

    await page.locator(`a:has-text("Blog")`).click();

    await expect(page).toHaveURL("http://localhost:3000/blog");
    await expect(page.locator("h1")).toContainText("Blog");
  });

  test("it should find and render a blog post", async ({ page }) => {
    await page.goto("http://localhost:3000/blog");

    const a = page.locator("main ul li a").first();

    const href = await a.getAttribute("href");
    const title = await a.innerText();

    await a.click();
    await page.waitForNavigation();

    const h1 = await page.locator("h1");

    await expect(href).toBeDefined();
    await expect(page).toHaveURL(href!);
    await expect(h1).toHaveText(title);
  });
});
