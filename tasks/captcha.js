// Regular Expression
const mysql = require('../utils/mysql')
const NewCaptcha = require("@haileybot/captcha-generator");
const path = require("path")
const fs = require("fs")

async function Captcha(BOT, message) {
  const newCaptcha = new NewCaptcha()
  // create and send capcha image
  const stream = fs.createWriteStream(path.join(__dirname, `${newCaptcha.value}.png`))
  stream.on('close', async function() {
    await BOT.sendPhoto(
      message.chat.id,
      fs.readFileSync(__dirname + `/${newCaptcha.value}.png`)
    )

    await BOT.sendMessage(
      message.chat.id,
      "Please enter captcha"
    )

    // update DB
    await mysql.Update(message.chat.id, {
      capchaValue: String(newCaptcha.value).toLowerCase()
    })

    // remove image
    fs.unlink(__dirname + `/${newCaptcha.value}.png`, () => {})
  })

  // start stream
  newCaptcha.PNGStream.pipe(stream)
}

module.exports = Captcha
