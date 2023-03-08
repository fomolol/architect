/**
 * @file bin/scaffold-app.js
 * Handles scaffolding an _app file.
 */
import path from 'path'
// import minimist from 'minimist')
import scaffoldApp from './scaffolding/scaffold-app'

import constants from './constants'

const PACKAGE_PATH = constants.getPackagePath()
const SOURCE_DIR = constants.dirs().src || PACKAGE_PATH

export default (function () {
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
