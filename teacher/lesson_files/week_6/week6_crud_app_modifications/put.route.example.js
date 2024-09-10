// Add this route to your existing Express.js application
app.put('/user/:name/:email', async (req, res) => {
    try {
        const { name, email } = req.params;
        const { newName, newEmail } = req.body;
        let users = [];

        // Read existing users
        try {
            const data = await fs.readFile(dataPath, 'utf8');
            users = JSON.parse(data);
        } catch (error) {
            return res.status(404).send('No users found');
        }

        // Find and update the user
        const user = users.find(u => u.name === name && u.email === email);
        if (!user) {
            return res.status(404).send('User not found');
        }

        user.name = newName || user.name;
        user.email = newEmail || user.email;

        // Save updated users
        await fs.writeFile(dataPath, JSON.stringify(users, null, 2));
        res.send('User updated successfully');
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).send('An error occurred while updating the user.');
    }
});