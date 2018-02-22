const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const inquirer = require('inquirer');
const { execSync } = require('child_process');

const logger = require('../utils/logger.js');
const files = require('../utils/files.js');
const questions = require('../utils/questions.js');

const pluginsPath = 'plugins';
const destPath = 'node_modules';
const pluginPrefix = 'com.poscoict.mobile';
const templateDir = path.normalize(`${__dirname}/../templates/${pluginsPath}`);

module.exports = () => {
  if(!fs.existsSync(destPath)) {
    fs.mkdir(destPath);
  }
  inquirer.prompt(questions.mobilePlugins)
  .then(answers => {
    const plugins = answers.mobilePlugins;
    plugins.forEach(plugin => {
      const pluginDir = `${pluginPrefix}.${plugin}`;
      const srcDir = path.join(templateDir, pluginDir);
      const destDir = path.join(path.resolve(destPath), pluginDir);

      if(!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir);
        files.copyDirectoryRecursive(srcDir, destDir);
      }
      let pluginAdd = execSync(`cordova plugin add ${pluginPrefix}.${plugin} --searchpath node_modules`);
      console.log(chalk.gray(pluginAdd.toString()));
      logger.log(`${pluginPrefix}.${plugin} plugins addtion succeeded.`);
    });
  });
};