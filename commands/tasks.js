// Listen to /start command
async function Tasks(BOT, message) {
  await BOT.sendMessage(message.chat.id, "tasks")
}

module.exports = Tasks
