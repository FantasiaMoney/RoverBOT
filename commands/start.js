// Listen to /start command
async function Start(BOT, message) {
  await BOT.sendMessage(message.chat.id, "Welcome, please press /tasks")
}

module.exports = Start
