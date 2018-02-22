const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

const logger = require('../utils/logger.js');
const files = require('../utils/files.js');
const questions = require('../utils/questions.js');

const pluginsPath = 'plugins';
const pluginPrefix = 'com.poscoict.mobile';
const templateDir = path.normalize(`${__dirname}/../templates/${pluginsPath}`);

module.exports = () => {
  if(fs.existsSync(pluginsPath)) {
    inquirer.prompt(questions.mobilePlugins)
    .then(answers => {
      const plugins = answers.mobilePlugins;
      plugins.forEach(plugin => {
        const pluginDir = `${pluginPrefix}.${plugin}`;
        const srcDir = path.join(templateDir, pluginDir);
        const destDir = path.join(path.resolve(pluginsPath), pluginDir);

        if(!fs.existsSync(destDir)) {
          fs.mkdirSync(destDir);
          files.copyDirectoryRecursive(srcDir, destDir);
          logger.log(`Successful addition of ${plugin.toUpperCase()} plugin.`);
        } else {
          logger.warn(`${plugin.toUpperCase()} plugin already exists.`);
        }
      });
    });
  } else {
    logger.error(`${pluginsPath} directory does not exist.`);
  }
};