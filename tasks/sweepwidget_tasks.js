const config = require('../config.json')

async function SweepwidgetTasks(BOT, message, user){
  const UI = {
      reply_markup: {
        inline_keyboard: [
          [{ text: 'Done ✅', callback_data: 'ConfirmSweepwidgetTasks' }],
          []
        ]
      }
   }

   const telegramTaskID = user.telegramTaskID
   const currentTask = config.TASKS[telegramTaskID]

   const text = `
   <strong>Please complete all tasks here <a href="${config.SWEEPWIDGET_LINK}">this</a></strong>`

   await BOT.sendMessage(message.chat.id, text, {
     parse_mode:'HTML',
     disable_web_page_preview:true
   })

   await BOT.sendMessage(message.chat.id, '⚠️ Please please make sure you finished tasks, and only then press done.', UI)
}

module.exports = SweepwidgetTasks
