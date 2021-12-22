// Listen to /start command
async function Start(BOT, message) {
  await BOT.sendMessage(message.chat.id, "Welcome, please press /price for get price info or /swap for get best DEXs routes")
}

module.exports = Start
