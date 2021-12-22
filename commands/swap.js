// Listen to /start command
async function Swap(BOT, message) {
  const text = `<strong>
    ✔️
    Buy COT on Ethereum chain <a href="https://app.1inch.io/#/1/swap/ETH/COT">HERE</a>
    Buy COT on Binance chain <a href="https://swap.cotrader.com/#/swap">HERE</a>
    Swap between ETH and BNB chains <a href="https://t.me/CoTraderDAO/329">HERE</a>
   </strong>
   `

   await BOT.sendMessage(message.chat.id, text, {
     parse_mode:'HTML',
     disable_web_page_preview:true
   })
}

module.exports = Swap
