const settings = require('settings-store')
const packageData = require('../package.json')

settings.init({
  appName: packageData.name,
  publisherName: packageData.author, // optional
  reverseDNS: packageData.reverseDNS, // required for macOS
  enableReloading: false
})

const addBot = function (botName, botToken, userChatId) {
  var botsList = settings.value('bots', [])
  botsList.push({
    name: botName,
    token: botToken,
    userChatId
  })
  settings.setValue('bots', botsList)
  console.log(`Added the new bot ${botName}`)
  return botsList
}

module.exports = {
  addBot
}
