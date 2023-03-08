/**
 * @file bin/scaffold-context.js
 * Handles scaffolding a basic context-based component.
 */
import path from 'path'
import minimist from 'minimist'
import scaffoldContext from './scaffolding/scaffold-context'

import constants from './constants'

const PACKAGE_PATH = constants.getPackagePath()
const SOURCE_DIR = constants.dirs().src

export default (function () {
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
