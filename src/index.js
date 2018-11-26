#!/usr/bin/env node
const program = require('commander');
const package = require('../package.json');
const store = require("./storeManager")

program
  .version(package.version)
  .option('-s, --setup', 'Testing')
  .option('-m, --message [message]', 'The message to send', undefined)
  .option('-a, --addbot', 'Add a new Bot')
  .parse(process.argv);


if(program.addbot){
  store.addBot('Testing', '9042389042380483290', 'lkjfiowrfoi4309ru24');
}

console.log('ffdsfsd')