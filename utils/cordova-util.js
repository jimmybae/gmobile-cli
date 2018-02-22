const fs = require('fs');
const path = require('path');

isRootDir = (dir) => {
  if (fs.existsSync(path.join(dir, 'www'))) {
    if (fs.existsSync(path.join(dir, 'config.xml'))) {
      // For sure is.
      if (fs.existsSync(path.join(dir, 'platforms'))) {
        return 2;
      } else {
        return 1;
      }
    }
    // Might be (or may be under platforms/).
    if (fs.existsSync(path.join(dir, 'www', 'config.xml'))) {
      return 1;
    }
  }
  return 0;
}

// Runs up the directory chain looking for a .cordova directory.
// IF it is found we are in a Cordova project.
// Omit argument to use CWD.
exports.isCordova = (dir) => {
  if (!dir) {
    // Prefer PWD over cwd so that symlinked dirs within your PWD work correctly (CB-5687).
    const pwd = process.env.PWD;
    const cwd = process.cwd();
    if (pwd && pwd !== cwd && pwd !== 'undefined') {
      return this.isCordova(pwd) || this.isCordova(cwd);
    }
    return this.isCordova(cwd);
  }

  let bestReturnValueSoFar = false;
  for (let i = 0; i < 100; ++i) {
    const result = isRootDir(dir);
    if (result === 2) {
      if(i === 0) {
        return 2;
      } else {
        return dir;
      }
    }
    if (result === 1) {
      bestReturnValueSoFar = dir;
    }
    const parentDir = path.normalize(path.join(dir, '..'));
    // Detect fs root.
    if (parentDir === dir) {
      return bestReturnValueSoFar;
    }
    dir = parentDir;
  }
  console.error('Hit an unhandled case in util.isCordova');
  return false;
}