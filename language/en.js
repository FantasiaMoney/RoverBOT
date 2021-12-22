const config = require('../config.json')

module.exports = {
  WELCOME_MESSAGE:
    'Welcome to Rover! Thank you for being here ',

  ALREADY_REGISTERED:
    'Dear friend, you have already registered before. ' +
    'Thank you for your overwhelming support.',

  UNDER_PROCESS: 'You are already under process, try completing that.',

  OTP_VERIFIED: 'OTP is correct! Now, please follow us on Twitter',

  WRONG_ANSWER: 'Sorry, please try again.',

  INVALID_INPUT: 'Invalid input, please respond to the last question.',

  COMPLETE_REGISTERATION:
    'You have completed the registeration. Thank you for your support.',

  successText(referralLink) {
    return (
      'Amazing! Thank you for joining us 👏 The tokens will be distributed after the ICO.\n\n' +
      'Want more CoTrader Tokens for FREE? Share your referral link with your friends! 🤝\n\n' +
      'Your referral link is: ' +
      referralLink +
      '\n\n' +
      'Copy and share the link with your communities and receive ' +
      config.referralBonus +
      ' CoTrader Tokens for each friend that completes all the tasks and stays in the group 🔗\n\n' +
      'The 5 people that refer the largest number of users during the campaign will win a bonus of ' +
      config.topReferrerBonus +
      ' extra CoTrader tokens each! 🔥\n\n' +
      'To check your balance, type /balance.\n\n' +
      'Ask questions here t.me/cotrader_bounty.'
    )
  },

  TWITTER_INVALID_USERNAME: 'Invalid username! please type again. (without @)',
  TWITTER_VALIDATING_FOLLOWER: `Please wait, we're validating your record. Do not close the bot.`,
  TWITTER_VALIDATING_RETWEET: `Please wait, we're validating your retweet.`,
  TWITTER_RETWEET_REFERRAL: 'Now, please retweet our referral tweet!',
  TWITTER_USERNAME_NOT_FOLLOWING:
    'This username is not following our Twitter account, try again.',
  TWITTER_USERNAME_NOT_RETWEETED: `You haven't retweeted our referral tweet!`,
  TWITTER_ENTER_USERNAME:
    'We will verify now that you have followed us on Twitter, please ENTER your TWITTER USERNAME. (without @)',
  TWITTER_VERIFICATION_FAILS:
    'Oh! I am unable to verify your username right now, you should let our staff know about this problem.',
  TWITTER_USERNAME_NOT_REGISTERED: 'This username is not registered.',
  TWITTER_USERNAME_ALREADY_REGISTERED:
    'This username has already been used by someone else.',

  TELEGRAM_JOIN: 'Join our new Telegram Group',

  FACEBOOK_FOLLOW: 'Okay, please follow us on Facebook',
  FACEBOOK_SHARE_POST: 'Now, please share our Facebook post!',

  BONUS_MESSAGE:
    'Good going, we have a bonus section for you to earn even more tokens!' +
    '\n\n',

  YOUTUBE_LIKE_VIDEO: 'Now, please like one of our videos!',

  INSTAGRAM_FOLLOW: 'Now, please follow us on Instagram',

  EMAIL_LINK_EXPIRED: 'Oh! Your verification link has expired.',
  EMAIL_ALREADY_VERIFIED: 'This email address has already been verified.',
  EMAIL_VERIFIED: 'Verification successful! Now, please follow us on Twitter',
  EMAIL_ADDRESS_INVALID: 'Invalid email address, please type again.',
  EMAIL_CONFIRMATION:
    `We've sent you a secret token to email please confirm` +
    '\n\n',
  EMAIL_ENTER_ADDRESS:
    'Great! Please ENTER your EMAIL so that we can send you your tokens and the latest CoTrader updates! ✉️',
  emailVerifiedSuccess(email) {
    return 'Your email address ' + email + ' is successfully verified.'
  },
  EMAIL_ALREADY_REGISTERED: 'This email address has been used by another user.',

  MEDIUM_FOLLOW: 'You can also follow us on Medium',

  REDDIT_SUBSCRIBE: 'Please, subscribe us on Reddit post',
}
