const {TwitterApi} = require('twitter-api-v2');

// Set up your Twitter API credentials
const client = new TwitterApi({
  appKey: 'HDt8NUTpk8CHvLQUjYKEdqPsM',
  appSecret: 'km3jSWRHWqBqMOI1jrAlVPg2eSvillUMLknVWx1AwMikbxm98g',
  accessToken: '1551934309115764737-TYWpP3ktevafJktdJELD5FCGywWjSN',
  accessSecret: 'uB4yqNDUnhWbt0FwuZ2fjwdZ78kppmY9ZtSc5761fwE0i',
});


const tweetText = 'Hello, Twitter! This is my first tweet using Twitter.';

// Post a tweet
client.v2.post('tweets', { text: tweetText })
  .then((response) => {
    console.log('Tweet posted successfully!');
    console.log('Tweet ID:', response.data.id);
    console.log('Created at:', response.data.created_at);
  })
  .catch((error) => {
    console.error('An error occurred while posting the tweet:', error);
    if (error.errors) {
      console.error('Twitter API errors:', error.errors);
    }
  });