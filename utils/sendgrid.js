const sendgrid = require('@sendgrid/mail')
// Configuration file
const config = require('../config.json')

/**
 * Sendgrid API Key is private, and it's only for testing purpose.
 * Please replace the key with yours.
 */
sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

// Drafting mail data
const message = {
  from: {
    name: 'CoTrader',
    email: 'donotreply@cotrader.com',
  },
  subject: 'Verify Your Email Address',
  replyTo: 'info@cotrader.com',
}

module.exports = function(to, id, token, first_name, callback) {
  message.to = to

  let draft =
    `<p>Dear ${first_name},</p>` +
    `<p>Thank you for joining CoTrov giveway!<br/>` +
    `<p>Your secret token ${token}<br/>` +
    `<p>Please confirm token in bot via call /confirm_token command <br/>` + 
    `<p>Example: /confirm_token ${token} <br/>`

  message.html = draft

  // Sending mail with data
  sendgrid
    .send(message)
    .then(response => callback(null, response)) // => Successful
    .catch(error => callback(error, null)) // => Failed
}
