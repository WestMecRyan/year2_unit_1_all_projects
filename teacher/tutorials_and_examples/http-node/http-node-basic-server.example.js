const http = require('http');
const fs = require('fs').promises;
const path = require('path');
const querystring = require('querystring');


const server = http.createServer(async (req, res) => {
    console.log(`Received request for ${req.url}`);
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('hello, world!');
    } else if (req.url === '/about') {
        try {
            const content = await fs.readFile(path.join(__dirname, 'about.html'), 'utf8');
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        } catch (error) {
            res.writeHead(500);
            res.end('Server Error');
        }
    }
});

const PORT = 3000;
server.listen(PORT, async () => {
    console.log(`Server running on http://localhost:${PORT}`);
});