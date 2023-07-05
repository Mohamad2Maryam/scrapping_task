const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome',
  });
  const page = await browser.newPage();

  // Set the navigation timeout to 60 seconds (60000 milliseconds)
  await page.setDefaultNavigationTimeout(60000);

  // Navigate to the website
  await page.goto('https://www.kooora.com/');

  // Wait for the page to load completely
  await page.waitForNavigation({ waitUntil: 'networkidle0' });

  // Click on the "Matches" tab
  await page.click('#topmenu > ul > li:nth-child(2) > a');

  // Wait for the matches section to load
  await page.waitForSelector('#matcheslive');

  // Get today's date in the format used by the website
  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  // Extract the matches for today
  const matches = await page.$$eval(
    `#matcheslive .table.matches.today tbody tr[data-mat-date="${today}"]`,
    (rows) =>
      rows.map((row) => ({
        time: row.querySelector('.time').textContent.trim(),
        teams: row.querySelector('.team').textContent.trim(),
        score: row.querySelector('.score').textContent.trim(),
      }))
  );

  // Console log the matches
  console.log(matches);

  // Close the browser
  await browser.close();
})();
