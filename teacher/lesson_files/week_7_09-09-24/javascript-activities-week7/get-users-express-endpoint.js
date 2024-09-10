// In your Express.js server file (e.g., server.js or app.js)

const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const dataPath = path.join(__dirname, 'data', 'users.json');

app.get('/users', async (req, res) => {
    try {
        const data = await fs.readFile(dataPath, 'utf8');
        const users = JSON.parse(data);
        res.json(users);
    } catch (error) {
        console.error('Error reading users:', error);
        res.status(500).json({ message: "Error retrieving users" });
    }
});