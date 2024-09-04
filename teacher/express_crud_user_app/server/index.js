// require express as express
const express = require('express');
// require path as path
const path = require('path');
// require fs as fs
const fs = require('fs').promises;
// cache the express module as 'app'
const app = express();
// cache the client directory as 'clientPath' using path.join
const clientPath = path.join(__dirname, '..', 'client');
// create a path for the data
const dataPath = path.join(__dirname, 'data', 'users.json');
// use the static middleware to serve the client folder
app.use(express.static(clientPath));
// allow parsing form data with the urlencoded package
app.use(express.urlencoded({ extended: true }));
// get the '/' endpoint
// test it with a basic 200 and end response
app.get('/', (req, res) => {
    res
        .status(200)
        .send('It works!');
});
app.get('/', (req, res) => {
    res
        // sendFile sets the header content type based on the extension of the file name
        .sendFile('index.html', { root: clientPath }, (err) => { // 3 params , endpoint, path, and arrow function pass an err
            if (err) {
                console.error('error sending file:', err);
                res.status(500).send('error sending file');
            } else {
                res.status(200); // this is set by sendFile
                res.set('Content-Type', 'text/html'); // this is set by sendfile
                console.log('file sent successfully');
            }
        });
});
// then send the index.html file
// use error handling to catch sendFile errors

// practice get the '/about' endpoint and serve an about page
// serve the form file
app.get('/form', (req, res) => {
    res.sendFile('pages/form.html', { root: clientPath });
});
// use a post request to parse the request from the form
// assign the data to the users array
app.post('/submit-form', async (req, res) => { // make the function asynchronous with the async keyword
    // make a try catch block to handle errors from the request body
    try {
        // destructure the name, email and message from the req.body
        // initialize an empty users array to hold the data from the file
        // make a try catch block to await the reading of the file
        let users = [];
        try {
            const data = await fs.readFile(dataPath, 'utf8');
            users = JSON.parse(data);
        } catch (error) {
            users = [{ "name": "default", "email": "default@email.com", "messages": [] }];
            console.error('error parsing file, users is set to default ');
        }
        // find or create the user with a find method (check if user exists with same name and email in database
        await fs.writeFile(dataPath, JSON.stringify(users, null, 2));
        res.redirect('/form');
        // if the user existis push the message to tehir array
        // else create the user with the destructured request body
        // push the user to the users array

        // asynchronously write the data with writeFile method

        // redirect back to the form homepage

    } catch (error) { // describe if there is an error processing the form
        console.error('Error processing the form: ', error);
        res.status(500).send('an error occured while processing');

    }
});
// cache a PORT to process.envPORT || 3000
const PORT = process.env.PORT || 3000;
// listen on the PORT server
// log that the server is runnig
app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
});