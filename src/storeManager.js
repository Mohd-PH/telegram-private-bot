const settings = require('settings-store')
const packageData = require('../package.json')

settings.init({
  appName: packageData.name,
  publisherName: packageData.author, // optional
  reverseDNS: packageData.reverseDNS, // required for macOS
  enableReloading: false
})

const addBot = function (botName, botToken, userChatId) {
  var bot = {
    name: botName,
    token: botToken,
    userChatId
  }
  settings.setValue('bot', bot)
  console.log(`Added the bot ${bot.name}`)
  return bot
}

module.exports = {
  addBot
}
