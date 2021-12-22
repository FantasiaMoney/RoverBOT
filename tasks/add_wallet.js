// Regular Expression
const regex = require('../utils/regex')
const mysql = require('../utils/mysql')

async function AddWallet(BOT, message) {
  const wallet = message.text
  // Validate address
  if (!wallet || !regex.walletAddress.test(wallet))
    return BOT.sendMessage(
      message.chat.id,
      'Invalid address, please type again. (Example: 0x3De33...)'
    )

  // Validate registration
  let user = await mysql.Read(message.chat.id)

  if(user.walletAddress !== '0x0000000000000000000000000000000000000000')
    return BOT.sendMessage(
      message.chat.id,
      'Wallet alredy added'
    )

  await mysql.Update(message.chat.id, {
    walletAddress: wallet,
    registrationStep: 1,
  })

  // finish registration if there are no new steps
  await mysql.Update(message.chat.id, {
    isRegestrationFinished: 1
  })

  BOT.sendMessage(
      message.chat.id,
      `Your wallet address is updated to ${wallet}`
   )
}

module.exports = AddWallet
