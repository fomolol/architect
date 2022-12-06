/**
 * @file bin/scaffold-context.js
 * Handles scaffolding a basic context-based component.
 */
const path = require('path')
const minimist = require('minimist')
const scaffoldContext = require('./scaffolding/scaffold-context')

const constants = require('./constants')

const PACKAGE_PATH = constants.getPackagePath()
const SOURCE_DIR = constants.dirs().src

module.exports = (function () {
  const argv = minimist(process.argv.slice(2))
  const FINAL_PATH = PACKAGE_PATH.replace('/node_modules', '')
  return scaffoldContext({
    name: argv.name,
    src: path.resolve(__dirname, 'scaffolding/context-component'),
    dest: path.resolve(
      FINAL_PATH,
      SOURCE_DIR,
      argv.path ? argv.path : '',
      'contexts',
      argv.name + 'Context'
    ),
  })
})()
