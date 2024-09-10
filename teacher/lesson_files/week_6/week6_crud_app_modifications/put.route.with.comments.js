// Add this route to your existing Express.js application
app.put('/user/:name/:email', async (req, res) => {
    try {
        // Extract the current name and email from the URL parameters
        const { name, email } = req.params;

        // Extract the new name and email from the request body
        const { newName, newEmail } = req.body;

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

        // Find the user in the array based on the current name and email
        const user = users.find(u => u.name === name && u.email === email);

        // If the user is not found, return a 404 error
        if (!user) {
            return res.status(404).send('User not found');
        }

        // Update the user's name and email if new values are provided
        // If a new value is not provided, keep the existing value
        user.name = newName || user.name;
        user.email = newEmail || user.email;

        // Write the updated users array back to the JSON file
        await fs.writeFile(dataPath, JSON.stringify(users, null, 2));

        // Send a success response
        res.send('User updated successfully');
    } catch (error) {
        // Log any errors that occur during the process
        console.error('Error updating user:', error);
        // Send a 500 (Internal Server Error) response if an error occurs
        res.status(500).send('An error occurred while updating the user.');
    }
});