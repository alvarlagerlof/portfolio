import { test, expect } from "@playwright/test";

const baseUrl = process.env.ENVIRONMENT_URL
if (typeof baseUrl !== "string") throw new Error("ENVIRONMENT_URL is not defined.")

test.describe("basic flow", () => {
  test("it should have some content on index", async ({ page }) => {
    await page.goto(baseUrl);

    const li = await page.locator("section ul li");
    const count = await li.count();

    await expect(count).toBeGreaterThan(0);
  });

  test("it should have some content on about", async ({ page }) => {
    await page.goto(baseUrl);

    const li = await page.locator("section ul li");
    const count = await li.count();

    await expect(count).toBeGreaterThan(0);
  });

  test("it should navigate to and render the blog page", async ({ page }) => {
    await page.goto(baseUrl);

    await page.locator(`a:has-text("Blog")`).click();

    await page.waitForURL("**/blog");

    //await expect(page.url).toContain(`${baseUrl}/blog`);
    await expect(page.locator("h1")).toContainText("Blog");
  });

  test("it should find and render a blog post", async ({ page }) => {
    await page.goto(`${baseUrl}/blog`);

    const a = page.locator("main ul li a").first();

    const href = await a.getAttribute("href");
    console.log("this HREF", href)
    const title = await a.innerText();

    await a.click();
    await page.waitForURL(`**/${href}`);

    const h1 = await page.locator("h1");

    await expect(href).toBeDefined();
    //await expect(page.url).toContain(href!);
    await expect(h1).toHaveText(title);
  });
});
