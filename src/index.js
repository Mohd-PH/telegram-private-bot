#!/usr/bin/env node
const program = require('commander');
const package = require('../package.json');

program
  .version(package.version)
  .option('-s, --setup', 'Testing')
  .option('-m, --message [message]', 'The message to send', undefined)
  .parse(process.argv);


console.log('ffdsfsd')