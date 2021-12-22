require('dotenv').config()

const Twitter = require('twitter-v2')

const client = new Twitter({
  bearer_token: process.env.TWITTER_BEARER_TOKEN
})

module.exports = {
  getIdByName: async (username) => {
    const { data } = await client.get('users/by', { usernames:username })
    return data[0].id
  },

  isLikedByUserIDAndTweetID: async (id, tweetID) => {
    const { data } = await client.get(`users/${id}/liked_tweets`)
    const latestIds = data.map((item) => item.id)
    return latestIds.includes(tweetID)
  },

  isFollowedByUserIDAndFollowerID: async (id, folowerID) => {
    const { data } = await client.get(`users/${id}/following`)
    const latestIds = data.map((item) => item.id)
    return latestIds.includes(folowerID)
  }
}
