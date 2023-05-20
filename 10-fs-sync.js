 //you can interact with filesystem or fs
//asynchronous non-blocking interaction or synchronously blocking
const {readFileSync, writeFileSync} = require('fs'); //sync, destructured out of fs module
//or const fs = require('fs') fs.read
console.log('start')
const first = readFileSync('./content/first.txt','utf8') //encoding = utf8
const second = readFileSync('./content/second.txt','utf8')
//if it takes too long to read and write then the application is not productive enough, sometimes tasks take longer times
//Hello this is first text file Hello this is second text file
//console.log(first, second)

//writeFileSync if no file name then node will create the file
writeFileSync('./content/result-sync.txt',`Here is the result ${first}, ${second}`,{flag:'a'})
//overwrites what is in the file, flag a creates a new value so there's 2 lines in the text file
console.log('done with this task');
console.log('starting the next one')