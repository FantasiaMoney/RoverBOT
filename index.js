// enabling of cancellation of promises is deprecated.
process.env["NTBA_FIX_319"] = 1;
process.env["NTBA_FIX_350"] = 1;

require('dotenv').config()
const TelegramBot = require('node-telegram-bot-api')

// bot comands
const {
  Start,
  Price,
  Swap,
  Vote
} = require('./commands')

// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.BOT_TOKEN

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true})

// Handle commands
bot.onText(/\/start/, msg => Start(bot, msg))
bot.onText(/\/price/, msg => Price(bot, msg))
bot.onText(/\/swap/, msg => Swap(bot, msg))
bot.onText(/\/vote/, msg => Vote(bot, msg))

// Handle errors
const onError = (error, type = 'Error') => {
  const message = `${type} | Description: ${error.message}`
  console.log(message)
}

bot.on('polling_error', error => onError(error, 'Polling_Error'))
bot.on('error', error => onError(error, 'Error'))
