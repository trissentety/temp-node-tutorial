// local - not shared in module.exports
const secret = 'SUPER SECRET'
// share - shared with rest of application
const john = 'john'
const peter = 'peter'

module.exports = { john, peter } //es6 syntax where key is same as value
//console.log(module)