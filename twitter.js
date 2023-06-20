const fetch = require("node-fetch");

async function getUserInfo(handle){
    const res= await fetch(
        "https://twitter.com/i/api/graphql/8slyDObmnUzBOCu7kYZj_A/UserByRestId?variables=%7B%22userId%22%3A%22717943790%22%2C%22withSafetyModeUserFields%22%3Atrue%7D&features=%7B%22hidden_profile_likes_enabled%22%3Afalse%2C%22responsive_web_graphql_exclude_directive_enabled%22%3Atrue%2C%22verified_phone_label_enabled%22%3Afalse%2C%22highlights_tweets_tab_ui_enabled%22%3Atrue%2C%22creator_subscriptions_tweet_preview_api_enabled%22%3Atrue%2C%22responsive_web_graphql_skip_user_profile_image_extensions_enabled%22%3Afalse%2C%22responsive_web_graphql_timeline_navigation_enabled%22%3Atrue%7D",
      {
  headers: {
    accept: "*/*",
    "accept-language": "en-LB,en;q=0.9,ar-LB;q=0.8,ar;q=0.7,en-GB;q=0.6,en-US;q=0.5",
    authorization: "Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA",
    "content-type": "application/json",
    "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-csrf-token": "3442b0bf17f796d97096d66247a8f172",
    "x-guest-token": "1670693090439360513",
    "x-twitter-active-user": "yes",
    "x-twitter-client-language": "en",
    cookie: "guest_id=v1%3A168714839291297272; _ga=GA1.2.1895184613.1687184435; _gid=GA1.2.1597986002.1687184435; g_state={\"i_l\":0}; att=1-8eScSTUqO9ga2zQkRiBgQLmJGbEZcnr9AyXwlMDj; at_check=true; mbox=session#15f0609981d24d549ee6d5692d7bf429#1687186515|PC#15f0609981d24d549ee6d5692d7bf429.37_0#1750429455; _twitter_sess=BAh7CSIKZmxhc2hJQzonQWN0aW9uQ29udHJvbGxlcjo6Rmxhc2g6OkZsYXNo%250ASGFzaHsABjoKQHVzZWR7ADoPY3JlYXRlZF9hdGwrCD5t5tGIAToMY3NyZl9p%250AZCIlMjMyMWY4YzZiZmVhNGVmZWQ3MTRiNjNmMjdkMGEwMjk6B2lkIiUyYjM1%250AMjQ2NGUwMjQ4M2UzYzJjMzM3MWEzNjJhOTIzMw%253D%253D--18793b13dbfcc73a6811cb560a4f37cccdb6cd66; guest_id_ads=v1%3A168714839291297272; guest_id_marketing=v1%3A168714839291297272; personalization_id=\"v1_Q1Q5h39GNdd6P7p6XMHrNw==\"; ct0=3442b0bf17f796d97096d66247a8f172; gt=1670693090439360513",
    Referer: "https://twitter.com/burgerkingksa?lang=en",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  body: null,
  method: "GET",
}
);
const data = await res.json();
console.log(data.data.user.result);
}

async function getTweets(handle){
    const res= await fetch(
        "https://twitter.com/i/api/graphql/Uuw5X2n3tuGE_SatnXUqLA/UserTweets?variables=%7B%22userId%22%3A%22717943790%22%2C%22count%22%3A40%2C%22cursor%22%3A%22HCaAgICgmOTTry4AAA%3D%3D%22%2C%22includePromotedContent%22%3Atrue%2C%22withQuickPromoteEligibilityTweetFields%22%3Atrue%2C%22withVoice%22%3Atrue%2C%22withV2Timeline%22%3Atrue%7D&features=%7B%22rweb_lists_timeline_redesign_enabled%22%3Atrue%2C%22responsive_web_graphql_exclude_directive_enabled%22%3Atrue%2C%22verified_phone_label_enabled%22%3Afalse%2C%22creator_subscriptions_tweet_preview_api_enabled%22%3Atrue%2C%22responsive_web_graphql_timeline_navigation_enabled%22%3Atrue%2C%22responsive_web_graphql_skip_user_profile_image_extensions_enabled%22%3Afalse%2C%22tweetypie_unmention_optimization_enabled%22%3Atrue%2C%22responsive_web_edit_tweet_api_enabled%22%3Atrue%2C%22graphql_is_translatable_rweb_tweet_is_translatable_enabled%22%3Atrue%2C%22view_counts_everywhere_api_enabled%22%3Atrue%2C%22longform_notetweets_consumption_enabled%22%3Atrue%2C%22tweet_awards_web_tipping_enabled%22%3Afalse%2C%22freedom_of_speech_not_reach_fetch_enabled%22%3Atrue%2C%22standardized_nudges_misinfo%22%3Atrue%2C%22tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled%22%3Afalse%2C%22longform_notetweets_rich_text_read_enabled%22%3Atrue%2C%22longform_notetweets_inline_media_enabled%22%3Atrue%2C%22responsive_web_enhance_cards_enabled%22%3Afalse%7D", {
            headers: {
              accept: "*/*",
              "accept-language": "en-LB,en;q=0.9,ar-LB;q=0.8,ar;q=0.7,en-GB;q=0.6,en-US;q=0.5",
              authorization: "Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA",
              "content-type": "application/json",
              "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
              "sec-ch-ua-mobile": "?0",
              "sec-ch-ua-platform": "\"Windows\"",
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "cors",
              "sec-fetch-site": "same-origin",
              "x-csrf-token": "3442b0bf17f796d97096d66247a8f172",
              "x-guest-token": "1670738394769506304",
              "x-twitter-active-user": "yes",
              "x-twitter-client-language": "en",
              cookie: "guest_id=v1%3A168714839291297272; _ga=GA1.2.1895184613.1687184435; _gid=GA1.2.1597986002.1687184435; g_state={\"i_l\":0}; att=1-8eScSTUqO9ga2zQkRiBgQLmJGbEZcnr9AyXwlMDj; at_check=true; mbox=session#15f0609981d24d549ee6d5692d7bf429#1687186515|PC#15f0609981d24d549ee6d5692d7bf429.37_0#1750429455; _twitter_sess=BAh7CSIKZmxhc2hJQzonQWN0aW9uQ29udHJvbGxlcjo6Rmxhc2g6OkZsYXNo%250ASGFzaHsABjoKQHVzZWR7ADoPY3JlYXRlZF9hdGwrCD5t5tGIAToMY3NyZl9p%250AZCIlMjMyMWY4YzZiZmVhNGVmZWQ3MTRiNjNmMjdkMGEwMjk6B2lkIiUyYjM1%250AMjQ2NGUwMjQ4M2UzYzJjMzM3MWEzNjJhOTIzMw%253D%253D--18793b13dbfcc73a6811cb560a4f37cccdb6cd66; guest_id_ads=v1%3A168714839291297272; guest_id_marketing=v1%3A168714839291297272; personalization_id=\"v1_Q1Q5h39GNdd6P7p6XMHrNw==\"; ct0=3442b0bf17f796d97096d66247a8f172; gt=1670738394769506304",
              Referer: "https://twitter.com/burgerkingksa?lang=en",
              "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            body: null,
            method: "GET"
          });
const data =await res.json();
console.log(
    data.data.user.result.timeline_v2.timeline.instructions[1].entries[0]
    .content.items[0].item.itemContent.tweet_results
);
}

(async function () {
    try{
        const handle = "BURGERKINGKSA";
       // await getUserInfo(handle);
        await getTweets(handle);
    }catch(error){
        console.log("error: ", error.message);
    }
})();