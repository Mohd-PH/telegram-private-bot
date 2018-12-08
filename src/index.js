#!/usr/bin/env node
const program = require('commander')
const packageData = require('../package.json')
const addBot = require('./commands/addBot')

program
  .version(packageData.version)
  .option('-s, --setup', 'Testing')
  .option('-m, --message [message]', 'The message to send', undefined)
  .option('-a, --addbot', 'Add a new Bot')
  .parse(process.argv)

if (program.addbot) {
  addBot()
}
