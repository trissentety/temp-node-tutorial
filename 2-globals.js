/*global variables in node
__dirname - path to curret directory
__filename - file name
require - function to use modules (commonJS)
module - info about current module (file)
process - info about env where the program is being executed 
node app is executed on machine when you deploy api on digital ocean of herald core etc it's on a different environment
process now is giant object of gibberish data throughout the course a bunch of useful properties will be discovered to implement in application
vanilla js applications access to window object
*/

console.log(__dirname)
setInterval(() => {
    console.log('hello world')
}, 1000)