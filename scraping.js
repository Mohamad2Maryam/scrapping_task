const axios = require('axios');
const { MongoClient } = require('mongodb');

// MongoDB connection URL
const mongoUrl = 'mongodb://127.0.0.1:27017/';

// API URL
const apiUrl = 'https://portalapi.spa.gov.sa/api/v1/news?by_latest=1&limit=6&w_content=1&w_tag=1';

// Function to store the data in MongoDB
async function storeDataInMongoDB() {
  try {
    // Send a GET request to the API URL
    const response = await axios.get(apiUrl);

    // Extract the necessary information from the response data
    const newsList = response.data.data;

    // Connect to MongoDB
    const client = new MongoClient(mongoUrl);
    await client.connect();
    const db = client.db('tbnews');

    // Insert the news data into the MongoDB collection
    const collection = db.collection('news');
    await collection.insertMany(newsList);

    console.log('Data stored in MongoDB.');

    // Close the MongoDB connection
    client.close();
  } catch (error) {
    console.error('Error storing data:', error);
  }
}

// Invoke the function to store the data in MongoDB
storeDataInMongoDB();

