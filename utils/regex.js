// Regex to validation user inputs
module.exports = {
  walletAddress: /^0x[a-fA-F0-9]{40}$/,
  emailAddress: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  twitterUsername: /^[a-zA-Z0-9_]{1,15}$/,
}
