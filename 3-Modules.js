//CommonJS, every file in node is module by default (have super powers by default)
//Modules - Encapsulated Code (only share minimum or what you want)
//every file is a modules
const names = require('./4-names') //extension is omitted if filename matches
const sayHi = require('./5-utilities') //any variable name as long as .john matches
const data = require('./6-alternative-flavor')
require('./7-major-cracker')
//console.log(data)
//console.log(names)
sayHi('susan')
sayHi(names.john) //uses variable
sayHi(names.peter)