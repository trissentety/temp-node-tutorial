const path = require('path'); //path module
//separater property that performs a platform specific separator
console.log(path.sep);

const filePath = path.join('/content/','subfolder','test.txt')
console.log(filePath)

const base = path.basename(filePath) //access last part of path
console.log(base) //logs test.txt

//returns absolute path which is needed sometimes, accepts a sequence of paths or path segments and resolves to an abolute path
const absolute = path.resolve(__dirname,'content','subfolder','test.txt'); //__dirname points to app.js
console.log(absolute) //gives entire path
//C:\Users\triss\Desktop\Visual Studio Code\Back end Developement\tutorial\content\subfolder\test.txt
//different resources will show different paths like heroku