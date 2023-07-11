const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

async function scrapeMatches() {
  try {
    const response = await axios.get('https://www.kooora.com/default.aspx?region=-1&dd=1&mm=3&yy=2013&area=0&ajax=99');
    const $ = cheerio.load(response.data);

    const matchElements = $('tbody');
    const matches = [];


    matchElements.each((index, element) => {
      const match = {};

      // Extract the required information from the element
      match.date = $(element).find('.match_time').text();
      match.team1 = $(element).find('.zw').text();
      match.team2 = $(element).find('.zl').text();
      match.score = $(element).find('.sc').text();

      matches.push(match);
    });

    // Save the matches array as JSON
    const jsonData = JSON.stringify(matches, null, 2);
    fs.writeFileSync('matches.json', jsonData);
    console.log('Data saved successfully!');
  } catch (error) {
    console.error('Error:', error);
  }
}

scrapeMatches();