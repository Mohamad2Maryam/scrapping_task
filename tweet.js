

const needle = require('needle');

 BEARER_TOKEN='AAAAAAAAAAAAAAAAAAAAANBAoQEAAAAAra%2B%2BdqaUazGwFoOGE1Fa1KY6x34%3D66xwS7rmDuF9SYRrXZiNXBU3wsCMSrrTH1arCXwlAIBsKcoXaA'
const token = process.env.BEARER_TOKEN;

const endpointURL = "https://api.twitter.com/2/tweets?ids=";

async function getRequest() {

    const params = {
        "ids": "1673269883193421825", 
        "tweet.fields": "lang,author_id", 
        "user.fields": "created_at" 
    }

    // this is the HTTP header that adds bearer token authentication
    const res = await needle('get', endpointURL, params, {
        headers: {
            "User-Agent": "v2TweetLookupJS",
            "authorization": `Bearer ${token}`
        }
    })

    if (res.body) {
        return res.body;
    } else {
        throw new Error('Unsuccessful request');
    }
}

(async () => {

    try {
        // Make request
        const response = await getRequest();
        console.dir(response, {
            depth: null
        });

    } catch (e) {
        console.log(e);
        process.exit(-1);
    }
    process.exit();
})();