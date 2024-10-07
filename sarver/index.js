const http = require('http');
const { clearScreenDown } = require('readline');


http.createServer((request, response)=>{
    Console.log()
    response.end('hello');
}).listen(4200);
console.log(http);
