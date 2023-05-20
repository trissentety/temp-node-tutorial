const http = require('http'); //require http module

const server = http.createServer((req,res) => { //method req=incoming request 
    //req object has info about method and useful stuff, res what is sent back
    if(req.url === '/') { //if = to homepage
      res.end('Welcome to our home page')
    }
        //check for about, content etc
    if(req.url === '/about') { //localhost:5000/about //change to req.ulr to see Oops
      res.end('Here is our short history')
    }
    res.end(`
    <h1>Oops!</h1>
  <p>We can't seem to find the page ypu are looking for</p>
  <a href="/">back home</a>`) // /means homepage
    //res.write('Welcome to our home page') //write method, logs on localhost:5000
    //res.end() //once your done writing
})

//specify what port the server is listening to, personal choice for number
server.listen(5000) 
//node app.js does not exit terminal because web server keeps listening for request
//looking for URL property to tell what address client is requesting so what endpoint the client is requesting