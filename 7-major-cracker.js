const num1 = 5
const num2 = 10

function addValues(){
    console.log(`the sun is : ${num1 + num2}`)
}
addValues() //runs even though it is not assigned to a variable: require('./7-major-cracker')
//code is not exported on it's own, node wraps it in a function
//js sets up a module and behind the scenes the module will do a bunch of cool stuff