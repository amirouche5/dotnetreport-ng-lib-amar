const gulp = require('gulp');
const { series } = require('gulp');
const { exec } = require('child_process');

// Define the paths
const libPath = 'C:/Users/GamingPC/source/repos/DotnetReport.Angular-Lib';
const appPath = 'C:/Users/GamingPC/source/repos/DotnetReport.Angular-Lib/projects/dotnetreport-app';

// Define the commands
const buildLibCommand = 'ng build dotnetreport-lib';
const uninstallPackageCommand = 'npm uninstall dotnetreport-ng';
const installPackageCommand = 'npm install file:dist/dotnetreport-ng';
const serveCommand = 'ng serve';

// Define the tasks
function buildLib(cb) {
  exec(buildLibCommand, { cwd: libPath }, cb);
}

function uninstallPackage(cb) {
  exec(uninstallPackageCommand, { cwd: libPath }, cb);
}

function installPackage(cb) {
  exec(installPackageCommand, { cwd: libPath }, cb);
}

function serve(cb) {
  const child = exec(serveCommand, { cwd: appPath });

  child.stdout.pipe(process.stdout);
  child.stderr.pipe(process.stderr);

  child.on('close', cb);
}

// Export the tasks
exports.default = series(buildLib, uninstallPackage, installPackage, serve);
exports.serve = serve;