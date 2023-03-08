/**
 * @file scaffold-api-component.js
 * Handles generating a standard API component.
 */
import path from 'path'
import minimist from 'minimist'
import scaffoldComponent from './scaffolding/scaffold-component'

import constants from './constants'

const PACKAGE_PATH = constants.getPackagePath()
const SOURCE_DIR = constants.dirs().src

const createClassName = (name) => {
  // Force uppercase to build the className
  const cleanName = `${name[0].toUpperCase()}${name.slice(1, name.length)}`
  // transforms PascalCase into slug-case for the CSS class name
  return cleanName
    .replace(/[A-Z]/g, (word) => '_' + word.toLowerCase())
    .substring(1) // trim off leading - from the first capital
}

export default (function () {
  const argv = minimist(process.argv.slice(2))
  const destPath = argv.path || argv.name
  const FINAL_PATH = PACKAGE_PATH.replace('/node_modules', '')
  return scaffoldComponent({
    name: argv.name,
    src: path.resolve(__dirname, 'scaffolding/api-component'),
    path: destPath,
    dest: path.resolve(
      FINAL_PATH,
      SOURCE_DIR,
      argv.path ? argv.path : '',
      'pages',
      'api',
      createClassName(argv.name).toLowerCase()
    ),
  })
})()
