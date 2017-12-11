const components = require('./components')
const modules = require('./modules')
const syntax = require('./syntax')
const styles = require('./styles')
const cases = require('./cases')
const others = require('./others')

const examples = [
  components,
  modules,
  syntax,
  styles,
  cases,
  others
]

module.exports = function getExamples (options = {}) {
  if (options.scope === 'mobile') {
    const selected = [components, modules, syntax]
    others.group.unshift(...cases.group)
    others.group.unshift(...styles.group)
    selected.push(others)
    return selected
  }
  return examples
}
