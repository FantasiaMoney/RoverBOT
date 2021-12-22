function agreement(BOT, message) {
  const agreeButton = {
      reply_markup: {
        inline_keyboard: [
          [{ text: 'I agree ✅', callback_data: 'Agreement' }], []
        ]
      }
  }

  BOT.sendMessage(message.chat.id,
  '✔️ I understand that the date of distribution shall be on 20th of September and asking for distribution before that date will have me banned from the group \n\n' +
  '✔️ I understand that if I am adjudged to be involved in multiple accounts, use of bots or any other fraudulent act, I will not receive my airdrop\n\n' +
  '✔️ I understand that the project shall have a fairlaunch immediately after the campaign\n\n'+
  '✔️ I certify to be an understanding community member and will participate in the community activities and maintain her rules\n\n'
  , agreeButton)
}

module.exports = agreement
