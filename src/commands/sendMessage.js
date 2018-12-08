const store = require('../storeManager')
const Telegram = require('telegraf/telegram')

const sendMessage = function (message) {
  var botData = store.getBot()
  const bot = new Telegram(botData.token)
  bot.sendMessage(botData.userChatId, message).then(() => {
    console.log('The message has been sent')
  }).catch(error => {
    console.error(error)
  })
}

module.exports = sendMessage
