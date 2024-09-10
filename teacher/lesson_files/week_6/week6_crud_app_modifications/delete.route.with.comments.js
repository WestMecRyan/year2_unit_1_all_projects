// Add this route to your existing Express.js application
app.delete('/user/:name/:email', async (req, res) => {
    try {
        // Extract the name and email from the URL parameters
        const { name, email } = req.params;

        // Initialize an empty array to hold user data
        let users = [];

        // Read existing users from the JSON file
        try {
            // Attempt to read the file
            const data = await fs.readFile(dataPath, 'utf8');
            // Parse the JSON data into a JavaScript array
            users = JSON.parse(data);
        } catch (error) {
            // If the file doesn't exist or can't be read, return a 404 error
            return res.status(404).send('No users found');
        }

        // Find the index of the user in the array based on name and email
        const userIndex = users.findIndex(u => u.name === name && u.email === email);

        // If the user is not found (index is -1), return a 404 error
        if (userIndex === -1) {
            return res.status(404).send('User not found');
        }

        // Remove the user from the array
        // splice() modifies the original array, removing 1 element at userIndex
        users.splice(userIndex, 1);

        // Write the updated users array back to the JSON file
        await fs.writeFile(dataPath, JSON.stringify(users, null, 2));

        // Send a success response
        res.send('User deleted successfully');
    } catch (error) {
        // Log any errors that occur during the process
        console.error('Error deleting user:', error);
        // Send a 500 (Internal Server Error) response if an error occurs
        res.status(500).send('An error occurred while deleting the user.');
    }
});