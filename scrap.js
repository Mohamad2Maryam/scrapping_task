const fs = require('fs');
const axios = require('axios');

// API URLs
const apiUrl1 = 'https://portalapi.spa.gov.sa/api/v1/news?by_imp=1&limit=5&w_tag=1&w_content=1';
const apiUrl2 = 'https://portalapi.spa.gov.sa/api/v1/news?by_views=1&limit=60';
const apiUrl3 = 'https://portalapi.spa.gov.sa/api/v1/news?by_latest=1&limit=6&w_content=1&w_tag=1';
const apiUrl4 = 'https://portalapi.spa.gov.sa/api/v1/news?is_report=1&w_owners=1&limit=6&w_content=1';

// Function to fetch data from the API and save it to a JSON file
async function fetchDataAndSave(apiUrl, fileName) {
  try {
    const response = await axios.get(apiUrl);
    const data = response.data;
    fs.writeFileSync(fileName, JSON.stringify(data));
    console.log(`Data saved to ${fileName}`);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Fetch data from API URLs and save to JSON files
fetchDataAndSave(apiUrl1, 'api1_data.json');
fetchDataAndSave(apiUrl2, 'api2_data.json');
fetchDataAndSave(apiUrl3, 'api3_data.json');
fetchDataAndSave(apiUrl4, 'api4_data.json');
