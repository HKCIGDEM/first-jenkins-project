
import { test } from "@playwright/test";

test("YouTube search and handle cookies", async ({ page }) => {
  // YouTube ana sayfasına git
  await page.goto("https://www.youtube.com/");

  // Çerez izinlerini kabul et
  try {
    const acceptCookiesButton = page.locator('button:has-text("Accept all")');
    await acceptCookiesButton.click({ timeout: 5000 });
  } catch (error) {
    console.log("Cookie consent not found or already accepted");
  }

  // Arama kutusunun görünür olmasını bekle
  await page.waitForSelector("//input[@id='search']", { state: "visible" });

  let searchBox = page.locator("//input[@id='search']");

  await searchBox.click();

  await searchBox.fill("Stanford University Machine Learning");

  await searchBox.press("Enter");

  // Arama sonuçlarının yüklenmesini bekle
  await page.waitForSelector("(//a[@id='video-title'])[1]", {
    state: "visible",
  });

  let firstResult = page.locator("(//a[@id='video-title'])[1]");

  await firstResult.click();

  // Video yüklendiğinden emin ol
  await page.waitForSelector("video", { state: "attached" });
});


/*
<a id="video-title" class="yt-simple-endpoint style-scope ytd-video-renderer" title="2024 Stanford  Convocation" aria-label="2024 Stanford  Convocation by Stanford No views" href="/watch?v=lIfaP3w6Bg4&amp;pp=ygUTc3RhbmZvcmQgdW5pdmVyc2l0eQ%3D%3D">
            <yt-icon id="inline-title-icon" class="style-scope ytd-video-renderer" hidden=""><!--css-build:shady--><!--css-build:shady--></yt-icon>
            <yt-formatted-string class="style-scope ytd-video-renderer" aria-label="2024 Stanford  Convocation by Stanford No views">2024 Stanford  Convocation</yt-formatted-string>
          </a>
*/
