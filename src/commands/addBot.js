const store = require('../storeManager');
const inquirer = require('inquirer');
const Telegraf = require('telegraf');
const generateRandomString = require('../utils/generateRandomString');

const addBot = function(){
  inquirer.prompt([
    {
      name:"name",
      message:"Give a name to the bot:",
    },
    {
      name: "token",
      message: "what is the bot's token?"
    }
  ]).then(answers =>{
    if (! answers.name || ! answers.token){
      console.error('Please provide a name and a token for the bot');
      return;
    }
    var token = generateRandomString();
    console.log(`Now open your bot and send this token ${token}`);
    
    const bot = new Telegraf(answers.token);
    
    bot.hears(token, ctx => {
      var chatId = ctx.chat.id;
      console.log(`Got the message your chat id is ${chatId}`);
      bot.stop();
      
      store.addBot(answers.name, answers.token, chatId);
    })
    bot.startPolling();
  })
}

module.exports = addBot;