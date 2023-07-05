const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

const scrapedQuotes = [];

(async () => {
  // Launching and opening our page
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome',
  });
  const page = await browser.newPage();

  await page.goto('https://quotes.toscrape.com/');

  // Getting access to the raw HTML
  const pageData = await page.evaluate(() => {
    return {
      html: document.documentElement.innerHTML,
    };
  });

  // Parsing the HTML and picking our elements
  const $ = cheerio.load(pageData.html);
  const quoteCards = $('div.quote');
  quoteCards.each((index, element) => {
    const quote = $(element).find('span.text').text();
    const author = $(element).find('.author').text();

    scrapedQuotes.push({
      Quote: quote,
      By: author,
    });
  });

  console.log(scrapedQuotes);

  // Closing the browser
  await browser.close();
})();
