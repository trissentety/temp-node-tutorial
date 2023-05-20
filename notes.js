/*
Backend/Full-Stack

Node and Express JS Framework Fundamentals
Complex REST API
MERN APP
More Projects

Node JS
Node Fundamentals
Express.js
MongoDB, Mongoose
Applications
Deployment

Enviroment to run JS outside Browser
Built on Chrome's V8 JS Engine
Big Community
Full-Stack
Javascript used to build front end and back end

HTML, CSS, JS, ES6
Callbacks, Promises, Async-Await
YouTube - Coding Addict
Playlist - JS Nuggets

Intro 
Install
Node Fundamentals
Express Tutorial
Building Apps...

 
Javascript Fundamental learn again - Youtube Coding Addict for Javascript, JS Nuggets for Es6 ans asynchronous topics

Browser JS:
Dom
Window
Interactive Apps, bunch of cool things not available in node
No Filesystem
Fragmentation - browser apps depend on user's browser
ES6 Modules

Node.js:
No DOM, browser API's don't exist, geolocation, fetch etc
No Window 
Server Side Apps, pure logic without graphical interface, no document.queryselector
Filesystem - info about operating system, respond to network request
Versions - based on versions, depends on node js version it was built in, if browser app doesn't support specific features, it's our responsibility to fix it
CommonJS - node js has access to modules by default uses CommonJS library for the modules

nodejs.org > specific version > yes to everything
to check if everything installed correctly type node --version
for production apps use lts - long term support

how to get node to evaluate code:
repl - read eval print loop    //playing around
cli - running app code in node //everything else
index html with javascript code browser evaluates javascript code

terminal
node
> const name = "nick"
undefined
name
'nick'
same thing can be done in a browser console

in order to close repo ctrl+c how reple works

command prompt cd + drag and drop folder
C:\Users\triss>cd "C:\Users\triss\Desktop\Visual Studio Code\Back end Developement\tutorial"

C:\Users\triss\Desktop\Visual Studio Code\Back end Developement\tutorial>

to execute code
node app.js

C:\Users\triss\Desktop\Visual Studio Code\Back end Developement\tutorial>node app.js
large number
hey it's my first node app

ctrl+` to open vs terminal
PS C:\Users\triss\Desktop\Visual Studio Code\Back end Developement\tutorial> node app.js
large number
hey it's my first node app
PS C:\Users\triss\Desktop\Visual Studio Code\Back end Developement\tutorial> 

johnsmilga.com
project bridge or homepage find node express tutorial project to compare code to john's
filter by course > node

global variables in node
__dirname - path to curret directory
__filename - file name
require - function to use modules (commonJS)
module - info about current module (file)
process - info about env where the program is being executed

console.log(__dirname)
setInterval(() => {
    console.log('hello world')
}, 1000) //ctrl+c to break cycle
setTimeout() => {

}
previous commands: arrow up


PS C:\Users\triss\Desktop\Visual Studio Code\Back end Developement\tutorial> node 4-names.js
Module {
  id: '.',
  path: 'C:\\Users\\triss\\Desktop\\Visual Studio Code\\Back end Developement\\tutorial',
  exports: {}, //tells that it is an object, whatever is dumped in the export is going to be able to be accessed anywhere in the application
  you decide what values go inside of the exports object
  filename: 'C:\\Users\\triss\\Desktop\\Visual Studio Code\\Back end Developement\\tutorial\\4-names.js',
  loaded: false,
  children: [],
  paths: [
    'C:\\Users\\triss\\Desktop\\Visual Studio Code\\Back end Developement\\tutorial\\node_modules',  
    'C:\\Users\\triss\\Desktop\\Visual Studio Code\\Back end Developement\\node_modules',
    'C:\\Users\\triss\\Desktop\\Visual Studio Code\\node_modules',
    'C:\\Users\\triss\\Desktop\\node_modules',
    'C:\\Users\\triss\\node_modules',
    'C:\\Users\\node_modules',
    'C:\\node_modules'

to use names listed on a different text file
page containing variables needs this at bottom:
module.exports = { john, peter } //es6 syntax where key is same as value
page that uses variables needs this at top: (can require and sign to a variable or simply require)
const names = require('./4-names');
console.log(names ) without sayHi
PS C:\Users\triss\Desktop\Visual Studio Code\Back end Developement\tutorial> node app.js
{ john: 'john', peter: 'peter' }

5-utilities.js
module.exports = sayHi //similar to export default
clear terminal with clear
destructure const names = require('./4-names'); 
const {john} = require('./4-names');
or
sayHi(names.john)
//every file is a modules

const num1 = 5
const num2 = 10

function addValues(){
    console.log(`the sun is : ${num1 + num2}`)
}
addValues() //runs even though it is not assigned to a variable: require('./7-major-cracker')

Node's Built-in Modules:
OS - Operating System Module
PATH - PATH Module
FS - File System Module
HTTP - HTTP Module
These are not all of the modules. There's a lot of modules
More properties, methods, built in modules located in the docs @
nodejs > docs > v14.15.5 API LTS > Table of Contents

const os = require('os') //looking for built in module accessed by running var os with os. or const {} = require('os')
// info about current user
const user = os.userInfo() 
console.log(user) 
//run node app.js

PS C:\Users\triss\Desktop\Visual Studio Code\Back end Developement\tutorial> node app.js
{
  uid: -1,
  gid: -1,
  username: 'triss',
  homedir: 'C:\\Users\\triss',
  shell: null
}


The System Uptime is 575530.765 seconds //number of seconds in 100s instead of 60

const currentOS = { //object called currentOS
    name:os.type(), //name = to method
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOS)

PS C:\Users\triss\Desktop\Visual Studio Code\Back end Developement\tutorial> node app.js
The System Uptime is 576467.828 seconds
{
  name: 'Windows_NT',
  release: '10.0.19045',
  totalMem: 17064796160,
  freeMem: 11290021888
}

const path = require('path'); //path module
//separater property that performs a platform specific separator
console.log(path.sep);
\

for separator illustration
new folder named content > 
new folder inside of that named subfolder > 
new file named tet.txt

const filePath = path.join('/content','subfolder','test.txt')
console.log(filePath)
PS C:\Users\triss\Desktop\Visual Studio Code\Back end Developement\tutorial> node app.js
\content\subfolder\test.txt

//changing the words changes the words extra trailing slashes get removed however
const base = path.basename(filePath) //access last part of path
console.log(base) //logs test.txt


HTTP:
brief intro
cover in detail later

to get to settings.json vsc
bottom right manage gear > settings > settings.json


const http = require('http'); //require http module

const server = http.createServer((req,res) => { //method req=incoming request 
    //req object has info about method and useful stuff, res what is sent back
    console.log(req)
    res.write('Welcome to our home page') //write method, logs on localhost:5000
    res.end() //once your done writing
})

//specify what port the server is listening to, personal choice for number
server.listen(5000) 
//node app.js does not exit terminal because web server keeps listening for request

console.log(req) initiates this:

[Symbol(kBuffer)]: null,
    [Symbol(kBufferCb)]: null,
    [Symbol(kBufferGen)]: null,
    [Symbol(kCapture)]: false,
    [Symbol(kSetNoDelay)]: true,
    [Symbol(kSetKeepAlive)]: false,
    [Symbol(kSetKeepAliveInitialDelay)]: 0,
    [Symbol(kBytesRead)]: 0,
    [Symbol(kBytesWritten)]: 0
  },
  httpVersionMajor: 1,
  httpVersionMinor: 1,
  httpVersion: '1.1',
  complete: false,
  rawHeaders: [
    'Host',
    'localhost:5000',
    'Connection',
    'keep-alive',
    'Cache-Control',
    'max-age=0',
    'sec-ch-ua',
    '"Google Chrome";v="113", "Chromium";v="113", "Not-A.Brand";v="24"',
    'sec-ch-ua-mobile',
    '?0',
    'sec-ch-ua-platform',
    '"Windows"',
    'Upgrade-Insecure-Requests',
    '1',
    'User-Agent',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36',
    'Accept',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Sec-Fetch-Site',
    'none',
    'Sec-Fetch-Mode',
    'navigate',
    'Sec-Fetch-User',
    '?1',
    'Sec-Fetch-Dest',
    'document',
    'Accept-Encoding',
    'gzip, deflate, br',
    'Accept-Language',
    'en-US,en;q=0.9'
  ],
  rawTrailers: [],
  joinDuplicateHeaders: undefined,
  aborted: false,
  upgrade: false,
  url: '/',
  method: 'GET',
  statusCode: null,
  statusMessage: null,
  client: <ref *1> Socket {
    connecting: false,
    _hadError: false,
    _parent: null,
    _host: null,
    _closeAfterHandlingError: false,
    _readableState: ReadableState {
      objectMode: false,
      highWaterMark: 16384,
      buffer: BufferList { head: null, tail: null, length: 0 },
      length: 0,
      pipes: [],
      flowing: true,
      ended: false,
      endEmitted: false,
      reading: true,
      constructed: true,
      sync: false,
      needReadable: true,
      emittedReadable: false,
      readableListening: false,
      resumeScheduled: false,
      errorEmitted: false,
      emitClose: false,
      autoDestroy: true,
      destroyed: false,
      errored: null,
      closed: false,
      closeEmitted: false,
      defaultEncoding: 'utf8',
      awaitDrainWriters: null,
      multiAwaitDrain: false,
      readingMore: false,
      dataEmitted: false,
      decoder: null,
      encoding: null,
      [Symbol(kPaused)]: false
    },
    _events: [Object: null prototype] {
      end: [Array],
      timeout: [Function: socketOnTimeout],
      data: [Function: bound socketOnData],
      error: [Function: socketOnError],
      close: [Array],
      drain: [Function: bound socketOnDrain],
      resume: [Function: onSocketResume],
      pause: [Function: onSocketPause]
    },
    _eventsCount: 8,
    _maxListeners: undefined,
    _writableState: WritableState {
      objectMode: false,
      highWaterMark: 16384,
      finalCalled: false,
      needDrain: false,
      ending: false,
      ended: false,
      finished: false,
      destroyed: false,
      decodeStrings: false,
      defaultEncoding: 'utf8',
      length: 0,
      writing: false,
      corked: 0,
      sync: true,
      bufferProcessing: false,
      onwrite: [Function: bound onwrite],
      writecb: null,
      writelen: 0,
      afterWriteTickInfo: null,
      buffered: [],
      bufferedIndex: 0,
      allBuffers: true,
      allNoop: true,
      pendingcb: 0,
      constructed: true,
      prefinished: false,
      errorEmitted: false,
      emitClose: false,
      autoDestroy: true,
      errored: null,
      closed: false,
      closeEmitted: false,
      [Symbol(kOnFinished)]: []
    },
    allowHalfOpen: true,
    _sockname: null,
    _pendingData: null,
    _pendingEncoding: '',
    server: Server {
      maxHeaderSize: undefined,
      insecureHTTPParser: undefined,
      requestTimeout: 300000,
      headersTimeout: 60000,
      keepAliveTimeout: 5000,
      connectionsCheckingInterval: 30000,
      joinDuplicateHeaders: undefined,
      _events: [Object: null prototype],
      _eventsCount: 2,
      _maxListeners: undefined,
      _connections: 1,
      _handle: [TCP],
      _usingWorkers: false,
      _workers: [],
      _unref: false,
      allowHalfOpen: true,
      pauseOnConnect: false,
      noDelay: true,
      keepAlive: false,
      keepAliveInitialDelay: 0,
      httpAllowHalfOpen: false,
      timeout: 0,
      maxHeadersCount: null,
      maxRequestsPerSocket: 0,
      _connectionKey: '6::::5000',
      [Symbol(IncomingMessage)]: [Function: IncomingMessage],
      [Symbol(ServerResponse)]: [Function: ServerResponse],
      [Symbol(kCapture)]: false,
      [Symbol(async_id_symbol)]: 3,
      [Symbol(http.server.connections)]: ConnectionsList {},
      [Symbol(http.server.connectionsCheckingInterval)]: Timeout {
        _idleTimeout: 30000,
        _idlePrev: [TimersList],
        _idleNext: [TimersList],
        _idleStart: 35,
        _onTimeout: [Function: bound checkConnections],
        _timerArgs: undefined,
        _repeat: 30000,
        _destroyed: false,
        [Symbol(refed)]: false,
        [Symbol(kHasPrimitive)]: false,
        [Symbol(asyncId)]: 2,
        [Symbol(triggerId)]: 1
      },
      [Symbol(kUniqueHeaders)]: null
    },
    _server: Server {
      maxHeaderSize: undefined,
      insecureHTTPParser: undefined,
      requestTimeout: 300000,
      headersTimeout: 60000,
      keepAliveTimeout: 5000,
      connectionsCheckingInterval: 30000,
      joinDuplicateHeaders: undefined,
      _events: [Object: null prototype],
      _eventsCount: 2,
      _maxListeners: undefined,
      _connections: 1,
      _handle: [TCP],
      _usingWorkers: false,
      _workers: [],
      _unref: false,
      allowHalfOpen: true,
      pauseOnConnect: false,
      noDelay: true,
      keepAlive: false,
      keepAliveInitialDelay: 0,
      httpAllowHalfOpen: false,
      timeout: 0,
      maxHeadersCount: null,
      maxRequestsPerSocket: 0,
      _connectionKey: '6::::5000',
      [Symbol(IncomingMessage)]: [Function: IncomingMessage],
      [Symbol(ServerResponse)]: [Function: ServerResponse],
      [Symbol(kCapture)]: false,
      [Symbol(async_id_symbol)]: 3,
      [Symbol(http.server.connections)]: ConnectionsList {},
      [Symbol(http.server.connectionsCheckingInterval)]: Timeout {
        _idleTimeout: 30000,
        _idlePrev: [TimersList],
        _idleNext: [TimersList],
        _idleStart: 35,
        _onTimeout: [Function: bound checkConnections],
        _timerArgs: undefined,
        _repeat: 30000,
        _destroyed: false,
        [Symbol(refed)]: false,
        [Symbol(kHasPrimitive)]: false,
        [Symbol(asyncId)]: 2,
        [Symbol(triggerId)]: 1
      },
      [Symbol(kUniqueHeaders)]: null
    },
    parser: HTTPParser {
      '0': null,
      '1': [Function: parserOnHeaders],
      '2': [Function: parserOnHeadersComplete],
      '3': [Function: parserOnBody],
      '4': [Function: parserOnMessageComplete],
      '5': [Function: bound onParserExecute],
      '6': [Function: bound onParserTimeout],
      _headers: [],
      _url: '',
      socket: [Circular *1],
      incoming: [Circular *2],
      outgoing: null,
      maxHeaderPairs: 2000,
      _consumed: true,
      onIncoming: [Function: bound parserOnIncoming],
      [Symbol(resource_symbol)]: [HTTPServerAsyncResource]
    },
    on: [Function: socketListenerWrap],
    addListener: [Function: socketListenerWrap],
    prependListener: [Function: socketListenerWrap],
    setEncoding: [Function: socketSetEncoding],
    _paused: false,
    _httpMessage: ServerResponse {
      _events: [Object: null prototype],
      _eventsCount: 1,
      _maxListeners: undefined,
      outputData: [],
      outputSize: 0,
      writable: true,
      destroyed: false,
      _last: false,
      chunkedEncoding: false,
      shouldKeepAlive: true,
      maxRequestsOnConnectionReached: false,
      _defaultKeepAlive: true,
      useChunkedEncodingByDefault: true,
      sendDate: true,
      _removedConnection: false,
      _removedContLen: false,
      _removedTE: false,
      strictContentLength: false,
      _contentLength: null,
      _hasBody: true,
      _trailer: '',
      finished: false,
      _headerSent: false,
      _closed: false,
      socket: [Circular *1],
      _header: null,
      _keepAliveTimeout: 5000,
      _onPendingData: [Function: bound updateOutgoingData],
      req: [Circular *2],
      _sent100: false,
      _expect_continue: false,
      _maxRequestsPerSocket: 0,
      [Symbol(kCapture)]: false,
      [Symbol(kBytesWritten)]: 0,
      [Symbol(kNeedDrain)]: false,
      [Symbol(corked)]: 0,
      [Symbol(kOutHeaders)]: null,
      [Symbol(errored)]: null,
      [Symbol(kUniqueHeaders)]: null
    },
    [Symbol(async_id_symbol)]: 5,
    [Symbol(kHandle)]: TCP {
      reading: true,
      onconnection: null,
      _consumed: true,
      [Symbol(owner_symbol)]: [Circular *1]
    },
    [Symbol(lastWriteQueueSize)]: 0,
    [Symbol(timeout)]: null,
    [Symbol(kBuffer)]: null,
    [Symbol(kBufferCb)]: null,
    [Symbol(kBufferGen)]: null,
    [Symbol(kCapture)]: false,
    [Symbol(kSetNoDelay)]: true,
    [Symbol(kSetKeepAlive)]: false,
    [Symbol(kSetKeepAliveInitialDelay)]: 0,
    [Symbol(kBytesRead)]: 0,
    [Symbol(kBytesWritten)]: 0
  },
  _consuming: false,
  _dumped: false,
  [Symbol(kCapture)]: false,
  [Symbol(kHeaders)]: {
    host: 'localhost:5000',
    connection: 'keep-alive',
    'cache-control': 'max-age=0',
    'sec-ch-ua': '"Google Chrome";v="113", "Chromium";v="113", "Not-A.Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36',
    accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'sec-fetch-site': 'none',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-user': '?1',
    'sec-fetch-dest': 'document',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'en-US,en;q=0.9'
  },
  [Symbol(kHeadersCount)]: 30,
  [Symbol(kTrailers)]: null,
  [Symbol(kTrailersCount)]: 0
}
<ref *2> IncomingMessage {
  _readableState: ReadableState {
    objectMode: false,
    highWaterMark: 16384,
    buffer: BufferList { head: null, tail: null, length: 0 },
    length: 0,
    pipes: [],
    flowing: null,
    ended: false,
    endEmitted: false,
    reading: false,
    constructed: true,
    sync: true,
    needReadable: false,
    emittedReadable: false,
    readableListening: false,
    resumeScheduled: false,
    errorEmitted: false,
    emitClose: true,
    autoDestroy: true,
    destroyed: false,
    errored: null,
    closed: false,
    closeEmitted: false,
    defaultEncoding: 'utf8',
    awaitDrainWriters: null,
    multiAwaitDrain: false,
    readingMore: true,
    dataEmitted: false,
    decoder: null,
    encoding: null,
    [Symbol(kPaused)]: null
  },
  _events: [Object: null prototype] {},
  _eventsCount: 0,
  _maxListeners: undefined,
  socket: <ref *1> Socket {
    connecting: false,
    _hadError: false,
    _parent: null,
    _host: null,
    _closeAfterHandlingError: false,
    _readableState: ReadableState {
      objectMode: false,
      highWaterMark: 16384,
      buffer: BufferList { head: null, tail: null, length: 0 },
      length: 0,
      pipes: [],
      flowing: true,
      ended: false,
      endEmitted: false,
      reading: true,
      constructed: true,
      sync: false,
      needReadable: true,
      emittedReadable: false,
      readableListening: false,
      resumeScheduled: false,
      errorEmitted: false,
      emitClose: false,
      autoDestroy: true,
      destroyed: false,
      errored: null,
      closed: false,
      closeEmitted: false,
      defaultEncoding: 'utf8',
      awaitDrainWriters: null,
      multiAwaitDrain: false,
      readingMore: false,
      dataEmitted: false,
      decoder: null,
      encoding: null,
      [Symbol(kPaused)]: false
    },
    _events: [Object: null prototype] {
      end: [Array],
      timeout: [Function: socketOnTimeout],
      data: [Function: bound socketOnData],
      error: [Function: socketOnError],
      close: [Array],
      drain: [Function: bound socketOnDrain],
      resume: [Function: onSocketResume],
      pause: [Function: onSocketPause]
    },
    _eventsCount: 8,
    _maxListeners: undefined,
    _writableState: WritableState {
      objectMode: false,
      highWaterMark: 16384,
      finalCalled: false,
      needDrain: false,
      ending: false,
      ended: false,
      finished: false,
      destroyed: false,
      decodeStrings: false,
      defaultEncoding: 'utf8',
      length: 0,
      writing: false,
      corked: 0,
      sync: false,
      bufferProcessing: false,
      onwrite: [Function: bound onwrite],
      writecb: null,
      writelen: 0,
      afterWriteTickInfo: null,
      buffered: [],
      bufferedIndex: 0,
      allBuffers: true,
      allNoop: true,
      pendingcb: 0,
      constructed: true,
      prefinished: false,
      errorEmitted: false,
      emitClose: false,
      autoDestroy: true,
      errored: null,
      closed: false,
      closeEmitted: false,
      [Symbol(kOnFinished)]: []
    },
    allowHalfOpen: true,
    _sockname: null,
    _pendingData: null,
    _pendingEncoding: '',
    server: Server {
      maxHeaderSize: undefined,
      insecureHTTPParser: undefined,
      requestTimeout: 300000,
      headersTimeout: 60000,
      keepAliveTimeout: 5000,
      connectionsCheckingInterval: 30000,
      joinDuplicateHeaders: undefined,
      _events: [Object: null prototype],
      _eventsCount: 2,
      _maxListeners: undefined,
      _connections: 2,
      _handle: [TCP],
      _usingWorkers: false,
      _workers: [],
      _unref: false,
      allowHalfOpen: true,
      pauseOnConnect: false,
      noDelay: true,
      keepAlive: false,
      keepAliveInitialDelay: 0,
      httpAllowHalfOpen: false,
      timeout: 0,
      maxHeadersCount: null,
      maxRequestsPerSocket: 0,
      _connectionKey: '6::::5000',
      [Symbol(IncomingMessage)]: [Function: IncomingMessage],
      [Symbol(ServerResponse)]: [Function: ServerResponse],
      [Symbol(kCapture)]: false,
      [Symbol(async_id_symbol)]: 3,
      [Symbol(http.server.connections)]: ConnectionsList {},
      [Symbol(http.server.connectionsCheckingInterval)]: Timeout {
        _idleTimeout: 30000,
        _idlePrev: [TimersList],
        _idleNext: [TimersList],
        _idleStart: 35,
        _onTimeout: [Function: bound checkConnections],
        _timerArgs: undefined,
        _repeat: 30000,
        _destroyed: false,
        [Symbol(refed)]: false,
        [Symbol(kHasPrimitive)]: false,
        [Symbol(asyncId)]: 2,
        [Symbol(triggerId)]: 1
      },
      [Symbol(kUniqueHeaders)]: null
    },
    _server: Server {
      maxHeaderSize: undefined,
      insecureHTTPParser: undefined,
      requestTimeout: 300000,
      headersTimeout: 60000,
      keepAliveTimeout: 5000,
      connectionsCheckingInterval: 30000,
      joinDuplicateHeaders: undefined,
      _events: [Object: null prototype],
      _eventsCount: 2,
      _maxListeners: undefined,
      _connections: 2,
      _handle: [TCP],
      _usingWorkers: false,
      _workers: [],
      _unref: false,
      allowHalfOpen: true,
      pauseOnConnect: false,
      noDelay: true,
      keepAlive: false,
      keepAliveInitialDelay: 0,
      httpAllowHalfOpen: false,
      timeout: 0,
      maxHeadersCount: null,
      maxRequestsPerSocket: 0,
      _connectionKey: '6::::5000',
      [Symbol(IncomingMessage)]: [Function: IncomingMessage],
      [Symbol(ServerResponse)]: [Function: ServerResponse],
      [Symbol(kCapture)]: false,
      [Symbol(async_id_symbol)]: 3,
      [Symbol(http.server.connections)]: ConnectionsList {},
      [Symbol(http.server.connectionsCheckingInterval)]: Timeout {
        _idleTimeout: 30000,
        _idlePrev: [TimersList],
        _idleNext: [TimersList],
        _idleStart: 35,
        _onTimeout: [Function: bound checkConnections],
        _timerArgs: undefined,
        _repeat: 30000,
        _destroyed: false,
        [Symbol(refed)]: false,
        [Symbol(kHasPrimitive)]: false,
        [Symbol(asyncId)]: 2,
        [Symbol(triggerId)]: 1
      },
      [Symbol(kUniqueHeaders)]: null
    },
    parser: HTTPParser {
      '0': null,
      '1': [Function: parserOnHeaders],
      '2': [Function: parserOnHeadersComplete],
      '3': [Function: parserOnBody],
      '4': [Function: parserOnMessageComplete],
      '5': [Function: bound onParserExecute],
      '6': [Function: bound onParserTimeout],
      _headers: [],
      _url: '',
      socket: [Circular *1],
      incoming: [Circular *2],
      outgoing: null,
      maxHeaderPairs: 2000,
      _consumed: true,
      onIncoming: [Function: bound parserOnIncoming],
      [Symbol(resource_symbol)]: [HTTPServerAsyncResource]
    },
    on: [Function: socketListenerWrap],
    addListener: [Function: socketListenerWrap],
    prependListener: [Function: socketListenerWrap],
    setEncoding: [Function: socketSetEncoding],
    _paused: false,
    _httpMessage: ServerResponse {
      _events: [Object: null prototype],
      _eventsCount: 1,
      _maxListeners: undefined,
      outputData: [],
      outputSize: 0,
      writable: true,
      destroyed: false,
      _last: false,
      chunkedEncoding: false,
      shouldKeepAlive: true,
      maxRequestsOnConnectionReached: false,
      _defaultKeepAlive: true,
      useChunkedEncodingByDefault: true,
      sendDate: true,
      _removedConnection: false,
      _removedContLen: false,
      _removedTE: false,
      strictContentLength: false,
      _contentLength: null,
      _hasBody: true,
      _trailer: '',
      finished: false,
      _headerSent: false,
      _closed: false,
      socket: [Circular *1],
      _header: null,
      _keepAliveTimeout: 5000,
      _onPendingData: [Function: bound updateOutgoingData],
      req: [Circular *2],
      _sent100: false,
      _expect_continue: false,
      _maxRequestsPerSocket: 0,
      [Symbol(kCapture)]: false,
      [Symbol(kBytesWritten)]: 0,
      [Symbol(kNeedDrain)]: false,
      [Symbol(corked)]: 0,
      [Symbol(kOutHeaders)]: null,
      [Symbol(errored)]: null,
      [Symbol(kUniqueHeaders)]: null
    },
    timeout: 0,
    [Symbol(async_id_symbol)]: 5,
    [Symbol(kHandle)]: TCP {
      reading: true,
      onconnection: null,
      _consumed: true,
      [Symbol(owner_symbol)]: [Circular *1]
    },
    [Symbol(lastWriteQueueSize)]: 0,
    [Symbol(timeout)]: Timeout {
      _idleTimeout: -1,
      _idlePrev: null,
      _idleNext: null,
      _idleStart: 6736,
      _onTimeout: null,
      _timerArgs: undefined,
      _repeat: null,
      _destroyed: true,
      [Symbol(refed)]: false,
      [Symbol(kHasPrimitive)]: false,
      [Symbol(asyncId)]: 17,
      [Symbol(triggerId)]: 13
    },
    [Symbol(kBuffer)]: null,
    [Symbol(kBufferCb)]: null,
    [Symbol(kBufferGen)]: null,
    [Symbol(kCapture)]: false,
    [Symbol(kSetNoDelay)]: true,
    [Symbol(kSetKeepAlive)]: false,
    [Symbol(kSetKeepAliveInitialDelay)]: 0,
    [Symbol(kBytesRead)]: 0,
    [Symbol(kBytesWritten)]: 0
  },
  httpVersionMajor: 1,
  httpVersionMinor: 1,
  httpVersion: '1.1',
  complete: false,
  rawHeaders: [
    'Host',
    'localhost:5000',
    'Connection',
    'keep-alive',
    'sec-ch-ua',
    '"Google Chrome";v="113", "Chromium";v="113", "Not-A.Brand";v="24"',
    'sec-ch-ua-mobile',
    '?0',
    'User-Agent',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36',
    'sec-ch-ua-platform',
    '"Windows"',
    'Accept',
    'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
    'Sec-Fetch-Site',
    'same-origin',
    'Sec-Fetch-Mode',
    'no-cors',
    'Sec-Fetch-Dest',
    'image',
    'Referer',
    'http://localhost:5000/',
    'Accept-Encoding',
    'gzip, deflate, br',
    'Accept-Language',
    'en-US,en;q=0.9'
  ],
  rawTrailers: [],
  joinDuplicateHeaders: undefined,
  aborted: false,
  upgrade: false,
  url: '/favicon.ico',
  method: 'GET',
  statusCode: null,
  statusMessage: null,
  client: <ref *1> Socket {
    connecting: false,
    _hadError: false,
    _parent: null,
    _host: null,
    _closeAfterHandlingError: false,
    _readableState: ReadableState {
      objectMode: false,
      highWaterMark: 16384,
      buffer: BufferList { head: null, tail: null, length: 0 },
      length: 0,
      pipes: [],
      flowing: true,
      ended: false,
      endEmitted: false,
      reading: true,
      constructed: true,
      sync: false,
      needReadable: true,
      emittedReadable: false,
      readableListening: false,
      resumeScheduled: false,
      errorEmitted: false,
      emitClose: false,
      autoDestroy: true,
      destroyed: false,
      errored: null,
      closed: false,
      closeEmitted: false,
      defaultEncoding: 'utf8',
      awaitDrainWriters: null,
      multiAwaitDrain: false,
      readingMore: false,
      dataEmitted: false,
      decoder: null,
      encoding: null,
      [Symbol(kPaused)]: false
    },
    _events: [Object: null prototype] {
      end: [Array],
      timeout: [Function: socketOnTimeout],
      data: [Function: bound socketOnData],
      error: [Function: socketOnError],
      close: [Array],
      drain: [Function: bound socketOnDrain],
      resume: [Function: onSocketResume],
      pause: [Function: onSocketPause]
    },
    _eventsCount: 8,
    _maxListeners: undefined,
    _writableState: WritableState {
      objectMode: false,
      highWaterMark: 16384,
      finalCalled: false,
      needDrain: false,
      ending: false,
      ended: false,
      finished: false,
      destroyed: false,
      decodeStrings: false,
      defaultEncoding: 'utf8',
      length: 0,
      writing: false,
      corked: 0,
      sync: false,
      bufferProcessing: false,
      onwrite: [Function: bound onwrite],
      writecb: null,
      writelen: 0,
      afterWriteTickInfo: null,
      buffered: [],
      bufferedIndex: 0,
      allBuffers: true,
      allNoop: true,
      pendingcb: 0,
      constructed: true,
      prefinished: false,
      errorEmitted: false,
      emitClose: false,
      autoDestroy: true,
      errored: null,
      closed: false,
      closeEmitted: false,
      [Symbol(kOnFinished)]: []
    },
    allowHalfOpen: true,
    _sockname: null,
    _pendingData: null,
    _pendingEncoding: '',
    server: Server {
      maxHeaderSize: undefined,
      insecureHTTPParser: undefined,
      requestTimeout: 300000,
      headersTimeout: 60000,
      keepAliveTimeout: 5000,
      connectionsCheckingInterval: 30000,
      joinDuplicateHeaders: undefined,
      _events: [Object: null prototype],
      _eventsCount: 2,
      _maxListeners: undefined,
      _connections: 2,
      _handle: [TCP],
      _usingWorkers: false,
      _workers: [],
      _unref: false,
      allowHalfOpen: true,
      pauseOnConnect: false,
      noDelay: true,
      keepAlive: false,
      keepAliveInitialDelay: 0,
      httpAllowHalfOpen: false,
      timeout: 0,
      maxHeadersCount: null,
      maxRequestsPerSocket: 0,
      _connectionKey: '6::::5000',
      [Symbol(IncomingMessage)]: [Function: IncomingMessage],
      [Symbol(ServerResponse)]: [Function: ServerResponse],
      [Symbol(kCapture)]: false,
      [Symbol(async_id_symbol)]: 3,
      [Symbol(http.server.connections)]: ConnectionsList {},
      [Symbol(http.server.connectionsCheckingInterval)]: Timeout {
        _idleTimeout: 30000,
        _idlePrev: [TimersList],
        _idleNext: [TimersList],
        _idleStart: 35,
        _onTimeout: [Function: bound checkConnections],
        _timerArgs: undefined,
        _repeat: 30000,
        _destroyed: false,
        [Symbol(refed)]: false,
        [Symbol(kHasPrimitive)]: false,
        [Symbol(asyncId)]: 2,
        [Symbol(triggerId)]: 1
      },
      [Symbol(kUniqueHeaders)]: null
    },
    _server: Server {
      maxHeaderSize: undefined,
      insecureHTTPParser: undefined,
      requestTimeout: 300000,
      headersTimeout: 60000,
      keepAliveTimeout: 5000,
      connectionsCheckingInterval: 30000,
      joinDuplicateHeaders: undefined,
      _events: [Object: null prototype],
      _eventsCount: 2,
      _maxListeners: undefined,
      _connections: 2,
      _handle: [TCP],
      _usingWorkers: false,
      _workers: [],
      _unref: false,
      allowHalfOpen: true,
      pauseOnConnect: false,
      noDelay: true,
      keepAlive: false,
      keepAliveInitialDelay: 0,
      httpAllowHalfOpen: false,
      timeout: 0,
      maxHeadersCount: null,
      maxRequestsPerSocket: 0,
      _connectionKey: '6::::5000',
      [Symbol(IncomingMessage)]: [Function: IncomingMessage],
      [Symbol(ServerResponse)]: [Function: ServerResponse],
      [Symbol(kCapture)]: false,
      [Symbol(async_id_symbol)]: 3,
      [Symbol(http.server.connections)]: ConnectionsList {},
      [Symbol(http.server.connectionsCheckingInterval)]: Timeout {
        _idleTimeout: 30000,
        _idlePrev: [TimersList],
        _idleNext: [TimersList],
        _idleStart: 35,
        _onTimeout: [Function: bound checkConnections],
        _timerArgs: undefined,
        _repeat: 30000,
        _destroyed: false,
        [Symbol(refed)]: false,
        [Symbol(kHasPrimitive)]: false,
        [Symbol(asyncId)]: 2,
        [Symbol(triggerId)]: 1
      },
      [Symbol(kUniqueHeaders)]: null
    },
    parser: HTTPParser {
      '0': null,
      '1': [Function: parserOnHeaders],
      '2': [Function: parserOnHeadersComplete],
      '3': [Function: parserOnBody],
      '4': [Function: parserOnMessageComplete],
      '5': [Function: bound onParserExecute],
      '6': [Function: bound onParserTimeout],
      _headers: [],
      _url: '',
      socket: [Circular *1],
      incoming: [Circular *2],
      outgoing: null,
      maxHeaderPairs: 2000,
      _consumed: true,
      onIncoming: [Function: bound parserOnIncoming],
      [Symbol(resource_symbol)]: [HTTPServerAsyncResource]
    },
    on: [Function: socketListenerWrap],
    addListener: [Function: socketListenerWrap],
    prependListener: [Function: socketListenerWrap],
    setEncoding: [Function: socketSetEncoding],
    _paused: false,
    _httpMessage: ServerResponse {
      _events: [Object: null prototype],
      _eventsCount: 1,
      _maxListeners: undefined,
      outputData: [],
      outputSize: 0,
      writable: true,
      destroyed: false,
      _last: false,
      chunkedEncoding: false,
      shouldKeepAlive: true,
      maxRequestsOnConnectionReached: false,
      _defaultKeepAlive: true,
      useChunkedEncodingByDefault: true,
      sendDate: true,
      _removedConnection: false,
      _removedContLen: false,
      _removedTE: false,
      strictContentLength: false,
      _contentLength: null,
      _hasBody: true,
      _trailer: '',
      finished: false,
      _headerSent: false,
      _closed: false,
      socket: [Circular *1],
      _header: null,
      _keepAliveTimeout: 5000,
      _onPendingData: [Function: bound updateOutgoingData],
      req: [Circular *2],
      _sent100: false,
      _expect_continue: false,
      _maxRequestsPerSocket: 0,
      [Symbol(kCapture)]: false,
      [Symbol(kBytesWritten)]: 0,
      [Symbol(kNeedDrain)]: false,
      [Symbol(corked)]: 0,
      [Symbol(kOutHeaders)]: null,
      [Symbol(errored)]: null,
      [Symbol(kUniqueHeaders)]: null
    },
    timeout: 0,
    [Symbol(async_id_symbol)]: 5,
    [Symbol(kHandle)]: TCP {
      reading: true,
      onconnection: null,
      _consumed: true,
      [Symbol(owner_symbol)]: [Circular *1]
    },
    [Symbol(lastWriteQueueSize)]: 0,
    [Symbol(timeout)]: Timeout {
      _idleTimeout: -1,
      _idlePrev: null,
      _idleNext: null,
      _idleStart: 6736,
      _onTimeout: null,
      _timerArgs: undefined,
      _repeat: null,
      _destroyed: true,
      [Symbol(refed)]: false,
      [Symbol(kHasPrimitive)]: false,
      [Symbol(asyncId)]: 17,
      [Symbol(triggerId)]: 13
    },
    [Symbol(kBuffer)]: null,
    [Symbol(kBufferCb)]: null,
    [Symbol(kBufferGen)]: null,
    [Symbol(kCapture)]: false,
    [Symbol(kSetNoDelay)]: true,
    [Symbol(kSetKeepAlive)]: false,
    [Symbol(kSetKeepAliveInitialDelay)]: 0,
    [Symbol(kBytesRead)]: 0,
    [Symbol(kBytesWritten)]: 0
  },
  _consuming: false,
  _dumped: false,
  [Symbol(kCapture)]: false,
  [Symbol(kHeaders)]: {
    host: 'localhost:5000',
    connection: 'keep-alive',
    'sec-ch-ua': '"Google Chrome";v="113", "Chromium";v="113", "Not-A.Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36',
    'sec-ch-ua-platform': '"Windows"',
    accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-mode': 'no-cors',
    'sec-fetch-dest': 'image',
    referer: 'http://localhost:5000/',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'en-US,en;q=0.9'
  },
  [Symbol(kHeadersCount)]: 26,
  [Symbol(kTrailers)]: null,
  [Symbol(kTrailersCount)]: 0
}

//npmjs.com has everything like useful utility functions to full-blown frameworks and libraries
//react create app package is hosted on npm
/*
typical node project will have more than few npm packages installed as dependencies
npm calls reusable code a package
package is a folder that contains js code
packages, modules, dependencies are all used interchangeably when talking about sharable js code
they all mean the same thing

there's no quality control in npm registry anyone can publish anything
you have to find the usless packages and there's a lot of them out there
good indicator of security and usefulness of the package is weekly download

there's a good chance that if there is a bug, somebody has already fixed it
and as a result is already fixed in the package or there's a working solution
you can search of packages on npmjs.com like bootstap > click on package > shows docs, weekly downloads etc
npm --version or npm --v
when npm is installed you have access to npm global command
npm will most likely not be the same as node version and is ok



This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (tutorial)
version: (1.0.0)
description:
entry point: (1-intro.js)
test command:
git repository:
keywords:
author:
license: (ISC)
About to write to C:\Users\triss\Desktop\Visual Studio Code\Back end Developement\tutorial\package.json:

{
  "name": "tutorial",
  "version": "1.0.0",
  "description": "",
  "main": "1-intro.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this OK? (yes) yes


package.json:
{
  "name": "tutorial",
  "version": "1.0.0",
  "description": "",
  "main": "1-intro.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}

npm i lodash
installs lodash as a dependency in package.json

refresh explorer right panel > node modules > dependency storage location