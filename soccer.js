const puppeteer = require('puppeteer');

// Initiating Puppeteer
puppeteer.launch({executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome'})
  .then(async browser => {
    // Opening a new page and navigating to Flashscore
    const page = await browser.newPage();
    await page.goto('https://www.kooora.com/');
    await page.waitForSelector('tbody');

    // Manipulating the page's content
    const grabMatches = await page.evaluate(() => {
      const allLiveMatches = document.querySelectorAll('#mainContent');
      const scrapeItems = [];

      allLiveMatches.forEach(item => {
        try {
          const homeTeam = item.querySelector('#jm1x2.z').innerText;
          const awayTeam = item.querySelector('#jm1x4.z').innerText;

          scrapeItems.push({
            homeTeam: homeTeam,
            awayTeam: awayTeam,
          });
        } catch (err) {}
      });

      const items = {
        liveMatches: scrapeItems,
      };
      return items;
    });

    // Outputting the scraped data
    console.log(grabMatches);

    // Closing the browser
    await browser.close();
  })
  // Handling any errors
  .catch(function (err) {
    console.error(err);
  });
