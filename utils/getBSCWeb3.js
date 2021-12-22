require('dotenv').config()
const Web3 = require('web3')

const getBSCWeb3 = () => {
  const provider = process.env.BSC_PROVIDER
  return new Web3(provider)
}

module.exports = getBSCWeb3
