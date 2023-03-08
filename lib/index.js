#!/usr/bin/env node

/**
 * @file index.js
 * Tool configuration.
 * @see https://www.npmjs.com/package/commander
 */
"use strict";

var _commander = _interopRequireDefault(require("commander"));
var _path = _interopRequireDefault(require("path"));
var _colors = _interopRequireDefault(require("colors"));
var _child_process = require("child_process");
var _constants = _interopRequireDefault(require("./constants"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Local
// Create the program
var program = new _commander["default"].Command();
var scriptPrefix = 'scaffold';
program.version(_constants["default"].getPackageVersion());
program.name('architect').option('-d, --debug', 'output extra debugging').option('-api, --api <name>', 'an API page component').option('-app, --app <name>', 'an _app page component').option('-t, --path <name>', 'path for the item').option('-c, --component <name>', 'a stateless component').option('-x, --context <name>', 'a context component').option('-p, --page <name>', 'a page component').option('-s, --story <name>', 'a Storybook component');
program.parse(process.argv);
console.log(_colors["default"].blue('\n-------------------'));
console.log(_colors["default"].blue('--- The Blueprint ---'));
console.log(_colors["default"].blue('-------------------\n'));
if (program.debug) console.log(program.opts());

/**
 * runScript
 * @param {string} name name of the script (minus the separator and the name)
 * @param {string} options options to pass to the script
 * @param {string} sep space separator in script name. Defaults to '-'
 */
var runScript = function runScript(name, options) {
  var ignoreName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var sep = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '-';
  var finalExec = "node ".concat(_path["default"].resolve(__dirname, "".concat(scriptPrefix).concat(sep).concat(name)), " --path ").concat(options[0], " --name ").concat(options[1]);
  if (ignoreName) {
    finalExec = "node ".concat(_path["default"].resolve(__dirname, "".concat(scriptPrefix).concat(sep).concat(name)));
  }
  console.log('Executing command...', finalExec);
  return (0, _child_process.exec)(finalExec, function (error, stdout, stderr) {
    if (error) {
      console.log("error: ".concat(error.message));
      return;
    }
    if (stderr) {
      console.log("stderr: ".concat(stderr));
      return;
    }
    console.log("stdout: ".concat(stdout));
  });
};

// Build an API component
if (program.api) runScript('api-component', [program.path, program.api]);

// Build an _app component
if (program.api) runScript('app', [program.path, program.app]);

// Build a stateless component
if (program.component) runScript('component', [program.path, program.component]);

// Build a context component
if (program.context) runScript('context', [program.path, program.context]);

// Build a page component
if (program.page) runScript('page-component', [program.path, program.page]);

// Build a story component
if (program.story) runScript('stories', [program.path, program.story]);
