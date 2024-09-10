# Favorite Characters Gallery Project

## Objective

Create a web application that allows users to add, view, and update their favorite video game characters.

## Features

1. Display a list of characters (GET)
2. Add a new character (POST)
3. Update a character's details (PUT)

## Project Structure

```
super-squad/
│
├── server/
│   ├── server.js
│   └── data/
│       └── characters.json
│
└── client/
    ├── index.html
    └── styles.css
```

## Step-by-Step Guide

### 1. Set up the server (server.js)

- Use Express.js to create a server
- Set up routes for GET, POST, and PUT requests
- Use fs.promises for file operations

### 2. Create the data file (characters.json)

- Initialize with an empty array or some sample data

### 3. Create the client-side (index.html)

- Create a form to add new characters
- Create a section to display the list of characters
- Create a form to update character details
- Use fetch API for making requests to the server

### 4. Implement GET request

- Server: Create a route to send all characters
- Client: Fetch and display characters on page load

### 5. Implement POST request

- Server: Create a route to add a new character
- Client: Send form data to add a new character

### 6. Implement PUT request

- Server: Create a route to update a character
- Client: Send form data to update a character's details

### 7. Style the application (styles.css)

- Add basic styling to make the application visually appealing

## Bonus Challenges

- Add form validation
- Implement character search functionality
- Add a "favorite" feature to mark favorite characters
