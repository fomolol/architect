/**
 * @file bin/scaffold-app.js
 * Handles scaffolding an _app file.
 */
const path = require('path')
// const minimist = require('minimist');
const scaffoldApp = require('./scaffolding/scaffold-app')

const constants = require('./constants')

const PACKAGE_PATH = constants.getPackagePath()
const SOURCE_DIR = constants.dirs().src || PACKAGE_PATH

module.exports = (function () {
  // const argv = minimist(process.argv.slice(2));
  const FINAL_PATH = PACKAGE_PATH.replace('/node_modules', '')
  return scaffoldApp({
    // name: argv.name,
    src: path.resolve(__dirname, 'scaffolding/app'),
    dest: path.resolve(
      FINAL_PATH,
      SOURCE_DIR,
      argv.path ? argv.path : '',
      'pages'
    ),
  })
})()
