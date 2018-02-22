const fs = require('fs');
const path = require('path');

const copyDirectoryRecursive = (srcDir, destDir) => {
  const filesToCreate = fs.readdirSync(srcDir);
  filesToCreate.forEach(file => {
    const srcContent = path.join(srcDir, file);
    // get stats about the current file
    const stats = fs.statSync(srcContent);
    if (stats.isFile()) {
      const destContent = path.join(destDir, file);
      fs.copyFileSync(srcContent, destContent);
    } else if (stats.isDirectory()) {
      fs.mkdirSync(path.join(destDir, file));
      // recursive call
      copyDirectoryRecursive(path.join(srcDir, file), path.join(destDir, file));
    }
  });
};

const deleteDirectoryRecursive = (dir) => {
  if(fs.existsSync(dir)) {
    fs.readdirSync(dir).forEach(function(file, index){
      const currentDir = path.join(dir, file);
      if(fs.lstatSync(currentDir).isDirectory()) { // recurse
        deleteDirectoryRecursive(currentDir);
      } else { // delete file
        fs.unlinkSync(currentDir);
      }
    });
    fs.rmdirSync(dir);
  }
};

exports.copyDirectoryRecursive = copyDirectoryRecursive;
exports.deleteDirectoryRecursive = deleteDirectoryRecursive;

exports.createPackageJson = (dir) => {
  const pwd = process.env.PWD;
  const { displayName } = require(path.join(pwd, 'package.json'));

  const packageJson = {
    name: `${displayName || pwd.substring(pwd.lastIndexOf('/') + 1)}Web`,
    version: '1.0.0',
    description: 'GMobile Project',
    author: '',
    license: '',
    main: '',
    scripts: {
      test: 'echo \"Error: no test specified\" && exit 1'
    },
    dependencies: {},
    devDependencies: {}
  };
  const packageJsonFile = path.join(dir, 'package.json');;
  fs.writeFileSync(
    packageJsonFile,
    JSON.stringify(packageJson, null, 2)
  );
};