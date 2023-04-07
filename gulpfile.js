const gulp = require('gulp');
const { series } = require('gulp');
const { exec } = require('child_process');
const fs = require('fs');
const replace = require('gulp-replace');

// Define the paths
const rootPath = 'C:/Users/GamingPC/source/repos/DotnetReport.Angular-Lib';
const appPath = 'C:/Users/GamingPC/source/repos/DotnetReport.Angular-Lib/projects/dotnetreport-app';
const libPath = 'C:/Users/GamingPC/source/repos/DotnetReport.Angular-Lib/projects/dotnetreport-lib';
const packageJsonPath = './projects/dotnetreport-lib/package.json';
const packageJson = require(packageJsonPath);

// Define the commands
const buildLibCommand = 'ng build dotnetreport-lib';
const uninstallPackageCommand = 'npm uninstall dotnetreport-ng';
const installPackageCommand = 'npm install file:dist/dotnetreport-ng';


const uninstalldnrPackageCommand = 'npm uninstall dotnetreport';
const installdnrPackageCommand = 'npm install file:../../../DotnetReport.Npm/dotnetreport-5.0.4.tgz --save-peer';

const serveCommand = 'ng serve';

// Define the tasks
function buildLib(cb) {
  exec(buildLibCommand, { cwd: rootPath }, cb);
}

function uninstallDnrPackage(cb) {
  exec(uninstalldnrPackageCommand, { cwd: libPath }, cb);
}

function uninstallPackage(cb) {
  exec(uninstallPackageCommand, { cwd: rootPath }, cb);
}

function installDnrPackage(cb) {
  exec(installdnrPackageCommand, { cwd: libPath }, cb);
}
function installPackage(cb) {
  exec(installPackageCommand, { cwd: rootPath }, cb);
}

function serve(cb) {
  const child = exec(serveCommand, { cwd: appPath });

  child.stdout.pipe(process.stdout);
  child.stderr.pipe(process.stderr);

  child.on('close', cb);
}

function buildRelease() {
  // Get the desired version from the file path and extension
  const versionRegex = /dotnetreport-(\d+\.\d+\.\d+)/;
  const version = packageJson.peerDependencies.dotnetreport.match(versionRegex)[1];
  console.log(`Building dotnetreport-ng with version ${version}`);

  // Replace the dotnetreport dependency with the desired version
  gulp.src(packageJsonPath)
    .pipe(replace(/"dotnetreport": "file:..\/..\/..\/DotnetReport.Npm\/dotnetreport-\d+\.\d+\.\d+-beta\.1.tgz"/, `"dotnetreport": "^${version}"`))
    .pipe(gulp.dest('dist/dotnetreport-ng'));

  // Build the dotnetreport-ng package
  return exec('npm pack', { cwd: 'dist/dotnetreport-ng' });
}


// Export the tasks
exports.default = series(uninstallDnrPackage, installDnrPackage, buildLib, uninstallPackage, installPackage);
exports.serve = serve;
exports.buildDev = buildLib;
exports.buildRelease = buildRelease;