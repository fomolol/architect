/**
 * @file bin/scaffold-component.js
 * Handles scaffolding a basic stateless component.
 */
const path = require('path')
const minimist = require('minimist')
const scaffoldComponent = require('./scaffolding/scaffold-component')

const constants = require('./constants')

const PACKAGE_PATH = constants.getPackagePath()
const SOURCE_DIR = constants.dirs().src

module.exports = (function () {
  console.log('SOURCE_DIR', SOURCE_DIR)
  console.log('PACKAGE_PATH', PACKAGE_PATH)

  const FINAL_PATH = PACKAGE_PATH.replace('/node_modules', '')

  console.log('FINAL_PATH', FINAL_PATH)

  const argv = minimist(process.argv.slice(2))
  return scaffoldComponent({
    name: argv.name,
    src: path.resolve(__dirname, 'scaffolding/stateless-component'),
    dest: path.resolve(
      FINAL_PATH || PACKAGE_PATH,
      SOURCE_DIR,
      argv.path ? argv.path : '',
      'components',
      argv.name
    ),
  })
})()
