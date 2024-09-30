import { test } from "@playwright/test";

test("Youtube Search", async ({ page }) => {
  await page.goto("https://www.youtube.com/");

  try {
    const acceptCookiesButton = page.locator('button:has-text("Accept all")');
    await acceptCookiesButton.click({ timeout: 5000 });
  } catch (error) {
    console.log("Cookie consent not found or already accepted");
  }
  await page.waitForSelector("//input[@id='search']", { state: "visible" });

  let searchBox = page.locator("//input[@id='search']");

  await searchBox.click();

  await searchBox.fill("Cydeo");
  await searchBox.press("Enter");
  let firstResult = page.locator("(//a[@id='video-title'])[1]");
  await firstResult.click();
});

/*
<input id="search" autocapitalize="none" autocomplete="off" autocorrect="off" name="search_query" tabindex="0" type="text" spellcheck="false" placeholder="Search" aria-label="Search" role="combobox" aria-haspopup="false" aria-autocomplete="list" dir="ltr" class="ytd-searchbox" style="outline: none;">
*/

//input[@name='search_query' and @id='search']
