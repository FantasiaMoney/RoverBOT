const DexFormulaABI = require('../abi/DexFormulaABI')
const addresses = require('../addresses')
const getBSCWeb3 = require('../utils/getBSCWeb3')
const axios = require('axios')
const Web3Utils = require('web3-utils')

const COTAMOUNT = 100000
const COTMUL = 200000

async function getPriceFromOneInch(from, to, srcBN){
  const route = `https://api.1inch.exchange/v2.0/quote?fromTokenAddress=${from}&toTokenAddress=${to}&amount=${srcBN}`
  const response = await axios.get(route)
  return String(response.data.toTokenAmount)
}

async function getPriceETH(){
  const amount = Web3Utils.toWei(String(COTAMOUNT))
  const COT_TO_USD_ETH = Number(Web3Utils.fromWei(await getPriceFromOneInch(addresses.COT, addresses.DAI_Ethereum, amount))).toFixed(4)
  return COT_TO_USD_ETH
}

async function getPriceBNB(){
  const web3 = getBSCWeb3()
  const DexFormula = new web3.eth.Contract(DexFormulaABI, addresses.DEXFormulaAddress)
  // get COT in BNB
  const _cotToBnb = await DexFormula.methods.routerRatio(
    addresses.bCOT,
    addresses.WBNB,
    web3.utils.toWei(String(COTAMOUNT))
  ).call()

  // get BNB in USD
  const _COT_TO_USD = await DexFormula.methods.routerRatioByCustomRouter(
    addresses.WBNB,
    addresses.BUSD_Binace,
    _cotToBnb,
    addresses.PancakeRouterAddress
  ).call()


  COT_TO_USD_BNB = Number(Web3Utils.fromWei(String(_COT_TO_USD))).toFixed(4)

  return COT_TO_USD_BNB
}


async function Price(BOT, message) {
  const COT_TO_USD_BNB = await getPriceBNB()
  const COT_TO_USD_ETH = await getPriceETH()
  const CAP = Number(COTMUL * COT_TO_USD_ETH).toFixed()

  const text = `<strong>
    ✔️
    Binance chain price: ${COTAMOUNT} COT = ${COT_TO_USD_BNB} USD
    Ethereum chain price: ${COTAMOUNT} COT = ${COT_TO_USD_ETH} USD
    ______________________
    Buy COT on Ethereum chain <a href="https://app.1inch.io/#/1/swap/ETH/COT">HERE</a>
    Buy COT on Binance chain <a href="https://swap.cotrader.com/#/swap">HERE</a>
    Swap between ETH and BNB chains <a href="https://t.me/CoTraderDAO/329">HERE</a>
    ______________________
    Supply 20B max
    FDV MC ${CAP} USD
   </strong>
   `

   await BOT.sendMessage(message.chat.id, text, {
     parse_mode:'HTML',
     disable_web_page_preview:true
   })
}

module.exports = Price
