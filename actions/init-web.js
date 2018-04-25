const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

const logger = require('../utils/logger.js');
const files = require('../utils/files.js');
const questions = require('../utils/questions.js');

const wwwDir = 'web';
const templateDir = path.normalize(`${__dirname}/../templates/${wwwDir}`);

module.exports = (resolve = undefined, reject = undefined) => {
  let question = questions.replaceWebFolder;
  let deleteFlag = true;
  
  /*
    index.js의 isCordova()에서 www folder가 존재하는지 검사하므로 아래 로직 불필요
  */
  if (!fs.existsSync(wwwDir)) {
    question = questions.createWebFolder;
    deleteFlag = false;
  }
  inquirer.prompt(question)
  .then(answers => {
    if(answers.answer) {
      const destDir = path.resolve(wwwDir);

      if(deleteFlag) {
        files.deleteDirectoryRecursive(destDir);
      }
      fs.mkdirSync(destDir);
      files.createPackageJson(destDir);
      files.copyDirectoryRecursive(templateDir, destDir);
      logger.log('Web resource initialization succeeded.');
      if(resolve) {
        resolve();
      }
    }
  });
};