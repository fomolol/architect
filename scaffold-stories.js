/**
 * @file bin/scaffold-stories.js
 * Handles scaffolding a Storybook story.
 */
const path = require('path')
const minimist = require('minimist')
const scaffoldComponent = require('./scaffolding/scaffold-story-component')

const constants = require('./constants')

const PACKAGE_PATH = constants.getPackagePath()
const SOURCE_DIR = constants.dirs().src

module.exports = (function () {
  const argv = minimist(process.argv.slice(2))
  const destPath = argv.path || argv.name
  const FINAL_PATH = PACKAGE_PATH.replace('/node_modules', '')
  return scaffoldComponent({
    name: argv.name,
    path: destPath,
    src: path.resolve(__dirname, 'scaffolding/component-stories'),
    dest: path.resolve(
      FINAL_PATH,
      SOURCE_DIR,
      argv.path ? argv.path : '',
      'components',
      destPath
    ),
  })
})()
