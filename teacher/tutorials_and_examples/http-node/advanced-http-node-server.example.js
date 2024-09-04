// describe the idea of promises and async await
//
const http = require('http');
const fs = require('fs').promises; // what is fs promises?
const path = require('path');
const querystring = require('querystring'); // what is querystring?

let users = [];

// Function to load users from file
async function loadUsers() {
    try {
        const data = await fs.readFile('users.json', 'utf8');
        users = JSON.parse(data);
    } catch (error) {
        if (error.code === 'ENOENT') { // what is ENOENT
            // File doesn't exist, initialize with empty array
            await fs.writeFile('users.json', '[]');
        } else {
            console.error('Error loading users:', error);
        }
    }
}

// Function to save users to file
async function saveUsers() {
    try {
        await fs.writeFile('users.json', JSON.stringify(users, null, 2)); // what is null, 2?
    } catch (error) {
        console.error('Error saving users:', error);
    }
}

const server = http.createServer(async (req, res) => {
    console.log(`Received request for ${req.url}`);
    // why don't these endpoints need a GET method stated explicitly?
    if (req.url === '/') {
        // what is the difference in writeHead and just write
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
    } else if (req.url === '/form' && req.method === 'GET') {
        try {
            const content = await fs.readFile(path.join(__dirname, 'form.html'), 'utf8');
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        } catch (error) {
            res.writeHead(500);
            res.end('Server Error');
        }
    } else if (req.url === '/form' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString(); // what isa  chunk? what does it mean to chunk.toString?
        });
        req.on('end', async () => {
            const formData = querystring.parse(body);
            const { name, email, message } = formData;

            let user = users.find(user => user.name === name && user.email === email); // what is this method called?
            if (user) {
                user.messages.push(message);
            } else {
                user = { name, email, messages: [message] };
                users.push(user);
            }

            try {
                await saveUsers();
                res.writeHead(302, { 'Location': '/form' });
                console.log('Data saved successfully');
                res.end();
            } catch (error) {
                res.writeHead(500);
                res.end('Server Error');
            }
        });
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

const PORT = 3000;
server.listen(PORT, async () => {
    await loadUsers(); // Load users when server starts
    console.log(`Server running on http://localhost:${PORT}`);
});