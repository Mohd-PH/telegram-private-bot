#!/usr/bin/env node
const program = require('commander')
const packageData = require('../package.json')
const addBot = require('./commands/addBot')

program
  .version(packageData.version)
  .option('-m, --message [message]', 'The message to send', undefined)
  .option('-a, --addbot', 'Add a bot or replace existing bot')
  .parse(process.argv)

if (program.addbot) {
  addBot()
}
