//general set up for built or external modules since it is built in you just go with require('os') it knows it is the built in module because your not using require(./)
//once set up you can access the methods by running the variable
const os = require('os') //looking for built in module accessed by running var os with os. lets you see the methods on a list in vsc or const {} = require('os') to use a specific one
//os is just some variable
//built in os module provides many built in properties and methods for interacting with operating system and server


// info about current user
const user = os.userInfo() 
//console.log(user) 
//run node app.js

//method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`) //method uptime

const currentOS = { //object called currentOS
    name:os.type(), //name = to method
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOS)


