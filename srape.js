const axios = require('axios');
const { MongoClient } = require('mongodb');

// MongoDB connection URL
const mongoUrl = 'mongodb://127.0.0.1:27017/';

// API URLs
const apiUrl1 = 'https://portalapi.spa.gov.sa/api/v1/news?by_imp=1&limit=5&w_tag=1&w_content=1';
const apiUrl2 = 'https://portalapi.spa.gov.sa/api/v1/news?by_views=1&limit=60';
const apiUrl3 = 'https://portalapi.spa.gov.sa/api/v1/news?by_latest=1&limit=6&w_content=1&w_tag=1';
const apiUrl4 = 'https://portalapi.spa.gov.sa/api/v1/news?is_report=1&w_owners=1&limit=6&w_content=1';

// Function to fetch data from the API and save it to MongoDB
async function fetchDataAndSave(apiUrl, collectionName) {
  try {
    const response = await axios.get(apiUrl);
    const data = response.data;

    if (Array.isArray(data)) {
      // Connect to MongoDB
      const client = new MongoClient(mongoUrl);
      await client.connect();
      const db = client.db('tbnewes');

      // Insert data into the specified collection
      const collection = db.collection(collectionName);
      await collection.insertMany(data);

      console.log(`Data saved to MongoDB collection: ${collectionName}`);

      // Close the MongoDB connection
      client.close();
    } else {
      console.error('Error fetching data:', 'Invalid data format');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Fetch data from API URLs and save to MongoDB collections
(async () => {
  await fetchDataAndSave(apiUrl1, 'api1_data');
  await fetchDataAndSave(apiUrl2, 'api2_data');
  await fetchDataAndSave(apiUrl3, 'api3_data');
  await fetchDataAndSave(apiUrl4, 'api4_data');
})();
