import { test, expect } from "@playwright/test";

test.describe("basic flow", () => {
  test("", async ({ page }) => {
    // example
  });

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
    const h4 = page.locator("main ul li h4").first();

    const href = await a.getAttribute("href");
    const title = await h4.innerText();

    await a.click();
    await page.waitForNavigation();

    const h1 = await page.locator("h1").innerText();

    console.log("href", href);

    await expect(page).toHaveURL(href);
    await expect(h1).toBe(title);
  });

  //   test("it should open the dropdown and close when clicking", async ({ page }) => {
  //     await page.goto("http://localhost:3000/");

  //     const menuButton = await page.locator("#menu-button");
  //     await menuButton.click();
  //     await expect(menuButton).toHaveAttribute("aria-expanded", "true");

  //     await menuButton.click();
  //     await expect(menuButton).toHaveAttribute("aria-expanded", "false");
  //   });

  //   test("should navigate to the Autism page", async ({ page }) => {
  //     await page.goto("http://localhost:3000/");

  //     await page.locator("text=ASD").click();

  //     await expect(page).toHaveURL("http://localhost:3000/autism");
  //     await expect(page.locator("h1")).toContainText("What is Autism?");
  //   });

  //   test("it should open and close the definition when clicking", async ({ page }) => {
  //     await page.goto("http://localhost:3000/asd");

  //     const dt = await page.locator("dt >> nth=0");
  //     const dd = await page.locator("dd >> nth=0");

  //     const button = await page.locator("section button >> nth=0");

  //     await dt.click();
  //     await expect(button).toHaveAttribute("aria-expanded", "true");

  //     await dt.click();
  //     await expect(button).toHaveAttribute("aria-expanded", "false");
  //   });

  //   test("it should go to the join page and click the discord link", async ({ page }) => {
  //     await page.goto("http://localhost:3000/");

  //     await page.locator("text=Find out more").click;

  //     await page.locator("text=Join Discord server").click();
  //     await expect(page).toHaveURL("https://discord.com/invite/48kqk6KcZ8");
  //   });
});
