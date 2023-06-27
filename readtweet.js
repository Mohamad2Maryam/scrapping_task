const Twitter = require('twitter-lite');
(async function() {
    const user = new Twitter({
        consumer_key: "HDt8NUTpk8CHvLQUjYKEdqPsM",
        consumer_secret: "km3jSWRHWqBqMOI1jrAlVPg2eSvillUMLknVWx1AwMikbxm98g",
    });
try {
        let response = await user.getBearerToken();
        const app = new Twitter({
            bearer_token: response.access_token,
        });
// Search for recent tweets
        response = await app.get(`/search/tweets`, {
            q: encodeURIComponent("مايعرف لها الا أصحاب الذوق الرفيع"), 
            count: 100,  
        },{ headers: {
            'Content-Type': 'application/json; charset=utf-8'
    }    });
    
for (tweet of response.statuses) {
            console.dir(tweet.text);
        }
    } catch(e) {
        console.log("There was wit the API");
        console.dir(e);
    }
})();
