const chalk = require('chalk');

exports.createWebFolder = [{
  name: 'answer',
  message: `Directory ${chalk.yellow('www')} is not exist. Create the directory?`,
  type: 'confirm'
}];
exports.replaceWebFolder = [{
  name: 'answer',
  message: `Directory ${chalk.yellow('www')} is not empty. Replace the contents?`,
  type: 'confirm'
}];

exports.mobilePlugins = [{
  name: 'mobilePlugins',
  message: 'Choose the costom plugins to apply.',
  type: 'checkbox',
  choices: [
    { value: 'gcm', name: 'GCM (android for only)' },
    { value: 'nfc', name: 'NFC (android for only)' },
    { value: 'scan', name: 'SCAN (android for only)' },
    { value: 'stt', name: 'STT (android for only)' }
  ],
  validate: function(input) {
    var done = this.async();
    if (input.length === 0) {
      // Pass the return value in the done callback
      done('Please select at least one.');
      return;
    }
    // Pass the return value in the done callback
    done(null, true);
  }
}];