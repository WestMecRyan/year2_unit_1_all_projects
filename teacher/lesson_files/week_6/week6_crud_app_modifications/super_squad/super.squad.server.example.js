const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const dataPath = path.join(__dirname, 'data', 'superheroes.json');

app.use(express.json());
app.use(express.static('public'));

// GET: Fetch all superheroes
app.get('/superheroes', async (req, res) => {
    try {
        const data = await fs.readFile(dataPath, 'utf8');
        const superheroes = JSON.parse(data);
        res.json(superheroes);
    } catch (error) {
        res.status(500).send('Error reading superhero data');
    }
});

// POST: Add a new superhero
app.post('/superheroes', async (req, res) => {
    try {
        const data = await fs.readFile(dataPath, 'utf8');
        const superheroes = JSON.parse(data);
        superheroes.push(req.body);
        await fs.writeFile(dataPath, JSON.stringify(superheroes, null, 2));
        res.status(201).send('Superhero added successfully');
    } catch (error) {
        res.status(500).send('Error adding superhero');
    }
});

// PUT: Update a superhero
app.put('/superheroes/:name', async (req, res) => {
    try {
        const data = await fs.readFile(dataPath, 'utf8');
        let superheroes = JSON.parse(data);
        const index = superheroes.findIndex(h => h.name === req.params.name);
        if (index !== -1) {
            superheroes[index] = { ...superheroes[index], ...req.body };
            await fs.writeFile(dataPath, JSON.stringify(superheroes, null, 2));
            res.send('Superhero updated successfully');
        } else {
            res.status(404).send('Superhero not found');
        }
    } catch (error) {
        res.status(500).send('Error updating superhero');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));