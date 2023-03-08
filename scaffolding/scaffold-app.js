/*
  Enables scaffolding of new FC items (e.g. components, tags) using the dopl templating library.
  See the stateless-component folder for the template source files.
*/

const dopl = require('dopl')

export default ({ src, dest }) => {
  return dopl({
    output: dest,
    src: src,
    data: {},
  })
}
