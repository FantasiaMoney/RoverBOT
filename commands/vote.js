// Listen to /start command
async function Vote(BOT, message) {
  const text = `<strong>
    ✔️
    PLEASE UPVOTE DAILY TO KEEP COTRADER TRENDING
    <a href="https://www.coingecko.com/en/coins/cotrader">Coin Gecko</a>
    <a href="https://coinmarketcap.com/currencies/cotrader/">Coin Market Cap</a>
    <a href="https://coinmooner.com/coin/722">Coin Mooner</a>
   </strong>
   `

   await BOT.sendMessage(message.chat.id, text, {
     parse_mode:'HTML',
     disable_web_page_preview:true
   })
}

module.exports = Vote
