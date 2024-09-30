import { expect, test } from '@playwright/test';

test("Getting the title of the page", async ({ page }) => {
  // goto https://github.com/
    await page.goto("https://www.github.com/");

  // get the title of the page
  let actualTitle = await page.title();

  expect(actualTitle).toBe("GitHub: Let’s build from here · GitHub");

  console.log(actualTitle);

});


test("Getting the current URL of the page", async ({ page }) => {
  await page.goto("https://www.github.com/");

  let currentURL = page.url();

  expect(currentURL).toBe("https://github.com/");

  console.log(currentURL);

});


test("Set the window size", async ({ page }) => {
 
  await page.setViewportSize({ width: 1850, height: 1080});

  await page.goto("https://github.com/");


});
