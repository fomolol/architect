/**
 * @file bin/scaffold-component.js
 * Handles scaffolding a basic stateless component.
 */
import path from 'path'
import minimist from 'minimist'
import scaffoldComponent from './scaffolding/scaffold-component'

import constants from './constants'

const PACKAGE_PATH = constants.getPackagePath()
const SOURCE_DIR = constants.dirs().src

export default (function () {
  const FINAL_PATH = PACKAGE_PATH.replace('/node_modules', '')
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
