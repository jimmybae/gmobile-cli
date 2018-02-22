#!/usr/bin/env node
const program = require('commander');
const inquirer = require('inquirer');
const chalk = require('chalk');
const figlet = require('figlet');

const { version } = require('./package.json');
const logger = require('./utils/logger.js');
const initWeb = require('./actions/init-web.js');
const initMobile = require('./actions/init-mobile.js');
const cordovaUtil = require('./utils/cordova-util');

const versionStr = `
  ${chalk.blue(
    figlet.textSync('GMobile CLI', { horizontalLayout: 'default', font: 'standard' })
  )}
  Node: 9.4.0
  GMobile: 2.0.0
  GMobile CLI: ${version}
`;

program
  .name('gmobile')
  .version(versionStr, '-v, --version')
  .description('GMobile CLI')
  .on('--help', function() {
    console.log();
    console.log('  Examples:');
    console.log();
    console.log('    $ gmobile init');
    console.log('    $ gmobile init -h');
    console.log();
  });

program
  .command('init')
  .description('Helps to initialize the GMobile project.')
  .option('-w, --web', 'Only initialize web resource')
  .option('-m, --mobile', 'Only add custom plugins')
  .action((options) => {
    const iscordova = cordovaUtil.isCordova();
    if(iscordova === 2) {
      if(options.web) {
        initWeb();
      } else if (options.mobile) {
        initMobile();
      } else {
        const p = new Promise((resolve, reject) => {
          initWeb(resolve, reject);
        });
        p.then(() => {
          initMobile();
        });
      }
    } else if(iscordova) {
      logger.warn(`Cordova-based root directory looks like '${iscordova}'!`);
    } else {
      logger.error('Current working directory is not a Cordova-based project.');
    }
  });

if (!process.argv.slice(2).length) {
  program.outputHelp();
}

program.parse(process.argv);