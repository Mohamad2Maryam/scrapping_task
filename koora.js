const puppeteer = require('puppeteer');

(async () => {
  try {
    // Launch the browser
    const browser = await puppeteer.launch({ executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome' });

    // Open a new page
    const page = await browser.newPage();

    // Navigate to the website
    await page.goto('https://www.kooora.com/');

    try {
      await page.waitForSelector('.match_league', { timeout: 60000 });
    } catch (error) {
      console.error('Timeout error: Waiting for selector failed');
      await browser.close();
      return;
    }

    // Scrape the matches
    const matches = await page.evaluate(() => {
      const matchElements = document.querySelectorAll('.match_league ');
      const matches = [];

      matchElements.forEach((matchElement) => {
        const homeTeam = matchElement.querySelector('.tl').innerText;
        const awayTeam = matchElement.querySelector('.tl').innerText;
        const score = matchElement.querySelector('.font').innerText;

        matches.push({ homeTeam, awayTeam, score });
      });

      return matches;
    });

    // Output the scraped matches
    console.log(matches);

    // Close the browser
    await browser.close();
  } catch (error) {
    console.error('An error occurred:', error);
  }
})();
