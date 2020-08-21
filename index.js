const functions = require('firebase-functions')
const Twitter = require('twitter')

exports.tweetPost = functions.https.onCall((data, context) => {

  const client = new Twitter({
    consumer_key: '',
    consumer_secret: '',
    access_token_key: data.accessToken, // ログイン認証した人のtokenが入る
    access_token_secret: data.accessSecret　// ログイン認証した人のtokenSecretが入る
  })

  const tweet = async () => {
    try {
      const response = await client.post('statuses/update', {
        status: data.tweets
      })
    } catch (error) {
      console.log(erorr)
    }
  }

  tweet()

  return {
    ok: 'ok',
    data
  }
})
