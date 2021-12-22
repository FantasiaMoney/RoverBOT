const config = require('../config.json')

async function Tasks(BOT, message) {

  config.TASKS.map(async (item, key) => {
    const text = `<strong>
    ✔️
    ${item.description}
    <a href="${item.link}">HERE</a>
   </strong>
   `

   return await BOT.sendMessage(message.chat.id,
     text
     , {
     parse_mode:'HTML',
     disable_web_page_preview:true
   })
  }
  )
}

module.exports = Tasks
