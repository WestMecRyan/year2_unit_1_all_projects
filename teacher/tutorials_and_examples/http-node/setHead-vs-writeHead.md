```js
const http = require('http');

// Using writeHead
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Hello World</h1>');
}).listen(3000);

// Using statusCode and setHeader
http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
}).listen(3001);

// Equivalent to writeHead, but more verbose
http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.writeHead(res.statusCode, res.getHeaders());
  res.end('<h1>Hello World</h1>');
}).listen(3002);
```