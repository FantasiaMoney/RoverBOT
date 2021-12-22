const config = require('../config.json')

async function TelegramTasks(BOT, message, user){
  const UI = {
      reply_markup: {
        inline_keyboard: [
          [{ text: 'Done ✅', callback_data: 'TelegramTasks' }],
          []
        ]
      }
   }

   const telegramTaskID = user.telegramTaskID
   const currentTask = config.TASKS[telegramTaskID]

   const text = `
   <strong>${currentTask.description} <a href="${currentTask.link}">this</a> for earn $ ${currentTask.reward}</strong>`

   if(telegramTaskID === 0)
     await BOT.sendMessage(message.chat.id, '❗️Please do not remove likes or unsubscribe, there will be a verification before sending tokens. If you violate the rules, you will lose all tokens.❗️')

   await BOT.sendMessage(message.chat.id, text, {
     parse_mode:'HTML',
     disable_web_page_preview:true
   })

   await BOT.sendMessage(message.chat.id, '⚠️ Please please make sure you finished task, and only then press done.', UI)
}

module.exports = TelegramTasks
