// npm - global command, comes with node
// npm --version

//local dependency - use it only in this particular project
// npm i <packageName> //installs locally

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest files (stores important info about project/package)
// how to create package.json: manual approach (creates package.json in the roots, creates properties etc)
// automate creation of package.json:
// npm init (step by step, press enter to skip)
// npm init -y (everything default) without questions

//to use the newly installed package in package.json:
//external packages always have to install first
//node can't find dependencies that were not installed
const _ = require('lodash'); //common convention

const items = [1, [2, [3, [4]]]] //lodash has a flat and deep method that will return array flat
const newItems = _.flattenDeep(items); 
console.log(newItems); //returns [ 1, 2, 3, 4 ]