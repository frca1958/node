var http = require('http');
http.createServer(function(req,res){
 res.writeHead(200, { 'Content-Type': 'text/plain' });
 console.log('Got request:');
 res.end('Hello world!');
}).listen(3000);
console.log('Server started on localhost:3000; press Ctrl-C to terminate....');
