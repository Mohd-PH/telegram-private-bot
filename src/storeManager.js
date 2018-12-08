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

const getBot = function () {
  var bot = settings.value('bot', undefined)
  if (!bot) {
    throw new Error('No bot has been saved yet, set up one using the -a flag or --addBot')
  } else {
    return bot
  }
}

module.exports = {
  addBot,
  getBot
}
