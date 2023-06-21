const { TwitterApi } = require('twitter-api-v2');

// Set up your Twitter API credentials
const client = new TwitterApi({
  appKey: '4zbaESwPk4YxOvminARxSPvV',
  appSecret: 'A5fI9WNEUAPuumZdAo7f4vK2A6HD2QRa5g0lnLAgFZaRNY09Zd',
  accessToken: '1551934309115764737-ESM1ZSLgi0LpZs2tdREc3EykqCWTxj',
  accessSecret: 'xg64EgCyYMmZ5qkgvoJ728uaf3sfg0n4FaRuaIndRoTJk',
  subdomain: 'api',
});

// Make a request to the Twitter API
const getUserTweets = async (username) => {
  try {
    const user = await client.v2.userByUsername(username);
    const { data } = await user.tweets();

    // Process the response data
    data.forEach((tweet) => {
      console.log(tweet.text);
      console.log("--------------------");
    });
  } catch (error) {
    console.log("An error occurred:", error);
  }
};

// Usage example
getUserTweets('burgerkingksa');
