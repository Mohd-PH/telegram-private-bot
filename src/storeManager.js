const settings = require("settings-store");
const package = require("../package.json");

settings.init({
  appName:       package.name,
  publisherName: package.author, //optional
  reverseDNS:    package.reverseDNS //required for macOS
});


const addBot = function (botName, botToken, userChatId){
  var botsList = settings.value('bots', []);
  botsList.push({
    name: botName,
    token: botToken,
    userChatId
  });
  settings.setValue('bots', botsList);
  return botsList;
}

module.exports = {
  addBot
}