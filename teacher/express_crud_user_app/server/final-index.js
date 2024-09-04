const express = require('express');
const path = require('path');
const fs = require('fs').promises;

const app = express();
const clientPath = path.join(__dirname, '..', 'client');
const dataPath = path.join(__dirname, 'data', 'users.json');

// Middleware
app.use(express.static(clientPath));
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: clientPath });
});

app.get('/form', (req, res) => {
    res.sendFile('pages/form.html', { root: clientPath });
});

app.post('/submit-form', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Read existing users
        let users = [];
        try {
            const data = await fs.readFile(dataPath, 'utf8');
            users = JSON.parse(data);
        } catch (error) {
            // If file doesn't exist or is empty, start with an empty array
            users = [];
        }

        // Find or create user
        let user = users.find(u => u.name === name && u.email === email);
        if (user) {
            user.messages.push(message);
        } else {
            user = { name, email, messages: [message] };
            users.push(user);
        }

        // Save updated users
        await fs.writeFile(dataPath, JSON.stringify(users, null, 2));

        res.redirect('/form');
    } catch (error) {
        console.error('Error processing form:', error);
        res.status(500).send('An error occurred while processing your submission.');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});