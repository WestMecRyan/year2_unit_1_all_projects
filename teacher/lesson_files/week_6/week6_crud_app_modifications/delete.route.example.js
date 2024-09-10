// Add this route to your existing Express.js application
app.delete('/user/:name/:email', async (req, res) => {
    try {
        const { name, email } = req.params;
        let users = [];

        // Read existing users
        try {
            const data = await fs.readFile(dataPath, 'utf8');
            users = JSON.parse(data);
        } catch (error) {
            return res.status(404).send('No users found');
        }

        // Find and remove the user
        const userIndex = users.findIndex(u => u.name === name && u.email === email);
        if (userIndex === -1) {
            return res.status(404).send('User not found');
        }

        users.splice(userIndex, 1);

        // Save updated users
        await fs.writeFile(dataPath, JSON.stringify(users, null, 2));
        res.send('User deleted successfully');
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).send('An error occurred while deleting the user.');
    }
});