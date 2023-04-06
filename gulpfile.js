const gulp = require('gulp');
const { exec } = require('child_process');

gulp.task('update-lib', (done) => {
  const projectPath = 'dotnetreport-lib';
  const distPath = 'dist/dotnetreport-ng';
  const appPath = 'projects/dotnetreport-app';

  // Rebuild the library
  exec(`ng build ${projectPath}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      done(error);
      return;
    }

    if (stderr) {
      console.error(`Error: ${stderr}`);
      //done(new Error(stderr));
      //return;
    }

    console.log(`Library rebuilt:\n${stdout}`);

    // Uninstall the existing library
    exec(`npm uninstall dotnetreport-ng`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        done(error);
        return;
      }

      if (stderr) {
        console.warn(`Warning: ${stderr}`);
      }

      console.log(`Library uninstalled:\n${stdout}`);

      // Install the updated library from the local file system
      exec(`npm install file:${distPath}`, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error: ${error.message}`);
          done(error);
          return;
        }

        if (stderr) {
          console.warn(`Warning: ${stderr}`);         
        }

        console.log(`Library installed:\n${stdout}`);

        // Restart the development server
        exec(`cd ${appPath} && ng serve`, (error, stdout, stderr) => {
          if (error) {
            console.error(`Error: ${error.message}`);
            done(error);
            return;
          }

          if (stderr) {
            console.warn(`Warning: ${stderr}`);
          }

          console.log(`Development server restarted:\n${stdout}`);

          done();
        });
      });
    });
  });
});
