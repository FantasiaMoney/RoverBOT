const OAuth = require('oauth-1.0a')
// Encryption methods
const crypto = require('crypto')
const request = require('request')

// Initialize
const oauth = OAuth({
  consumer: {
    key: process.env.TWITTER_CUSTOMER_KEY,
    secret: process.env.TWITTER_CUSTOMER_SECRET,
  },
  signature_method: 'HMAC-SHA1',
  hash_function(base_string, key) {
    return crypto
      .createHmac('sha1', key)
      .update(base_string)
      .digest('base64')
  },
})

// The token is optional for some requests
const token = {
  key: process.env.TWITTER_TOKEN_KEY,
  secret: process.env.TWITTER_TOKEN_SECRET,
}

function authRequest(request_data) {
  return new Promise(function(resolve, reject) {
    // Make Twitter API request
    request(
      {
        url: request_data.url,
        method: request_data.method,
        headers: oauth.toHeader(oauth.authorize(request_data, token)),
      },
      function(error, res, body) {
        // Successful
        if (!error && res.statusCode == 200) resolve(body)
        // Failed
        else reject(error)
      }
    )
  })
}

module.exports = authRequest
